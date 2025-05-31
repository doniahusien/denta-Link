'use client';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronLeft, 
  faPaperclip, 
  faSpinner, 
  faTimes, 
  faCheck, 
  faExclamation, 
  faSyncAlt,
  faTrash,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProtectedRoute from '@/components/ProtectedRoute';
import { toast } from 'react-hot-toast';
import { 
  fetchAllChats, 
  fetchChatMessages, 
  analyzeAIMessage,
  deleteChat 
} from '@/redux/features/ai/aiThunk';

export default function ChatBot() {
  const router = useRouter();
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  const {
    chats,
    loadingChats: loading,
    error,
    messages: reduxMessages,
    sending,
    sendError,
    deletingChat
  } = useSelector(state => state.aiTool);

  const [selectedChatId, setSelectedChatId] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [inputImage, setInputImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [optimisticMessages, setOptimisticMessages] = useState([]);
  const [messageQueue, setMessageQueue] = useState([]);
  const [localMessages, setLocalMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [switchingChat, setSwitchingChat] = useState(false);
  const [optimisticChats, setOptimisticChats] = useState([]);
  const [isNewChat, setIsNewChat] = useState(true);
  const [deletingChatId, setDeletingChatId] = useState(null);
  const [showChatMenu, setShowChatMenu] = useState(null);

  const displayMessages = useMemo(() => {
    if (selectedChatId) {
      const serverMessages = reduxMessages || [];
      const unconfirmedOptimistic = optimisticMessages.filter(optMsg => {
        const isConfirmed = serverMessages.some(
          serverMsg => serverMsg.content === optMsg.content && 
                     (serverMsg.image?.url === optMsg.image?.url)
        );
        return !isConfirmed || optMsg.status === 'failed';
      });
      return [...serverMessages, ...unconfirmedOptimistic].sort((a, b) => {
        const dateA = a.timestamp ? new Date(a.timestamp) : new Date();
        const dateB = b.timestamp ? new Date(b.timestamp) : new Date();
        return dateA - dateB;
      });
    } else {
      return [...localMessages, ...optimisticMessages].sort((a, b) => {
        const dateA = a.timestamp ? new Date(a.timestamp) : new Date();
        const dateB = b.timestamp ? new Date(b.timestamp) : new Date();
        return dateA - dateB;
      });
    }
  }, [reduxMessages, localMessages, optimisticMessages, selectedChatId]);

  useEffect(() => {
    dispatch(fetchAllChats());
  }, [dispatch]);

  useEffect(() => {
    if (selectedChatId) {
      setLoadingMessages(true);
      dispatch(fetchChatMessages(selectedChatId))
        .unwrap()
        .catch(err => {
          toast.error('Failed to load messages');
          console.error(err);
        })
        .finally(() => {
          setLoadingMessages(false);
          setSwitchingChat(false);
        });
    }
  }, [dispatch, selectedChatId]);

  useEffect(() => {
    scrollToBottom();
  }, [displayMessages]);

  useEffect(() => {
    if (messageQueue.length > 0 && !sending) {
      const nextMessage = messageQueue[0];
      handleSendMessage(nextMessage.content, nextMessage.image);
      setMessageQueue(prev => prev.slice(1));
    }
  }, [messageQueue, sending]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBack = () => router.back();

  const handleChatClick = (chatId) => {
    if (loadingMessages || selectedChatId === chatId || switchingChat) return;
    
    setSwitchingChat(true);
    setSelectedChatId(chatId);
    setIsNewChat(false);
    setInputMessage('');
    setInputImage(null);
    setImagePreview(null);
    setOptimisticMessages([]);
    setShowChatMenu(null);
  };

  const handleNewChat = () => {
    setSelectedChatId(null);
    setIsNewChat(true);
    setInputMessage('');
    setInputImage(null);
    setImagePreview(null);
    setOptimisticMessages([]);
    setMessageQueue([]);
    setLocalMessages([]);
    setShowChatMenu(null);
    setTimeout(() => scrollToBottom(), 100);
  };

  const handleRefreshChats = () => {
    dispatch(fetchAllChats());
    setShowChatMenu(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      toast.error('Please upload an image file (JPEG, PNG, etc.)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
    setInputImage(file);
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setInputImage(null);
    setImagePreview(null);
  };

  const handleSendMessage = (prefilledContent = null, prefilledImage = null) => {
    const content = prefilledContent || inputMessage.trim();
    const image = prefilledImage || inputImage;
    
    if (!content && !image) return;

    const tempId = Date.now().toString();
    const userMessage = {
      id: tempId,
      role: 'user',
      content,
      image: image ? { url: imagePreview, file: image } : null,
      isOptimistic: true,
      timestamp: new Date().toISOString()
    };

    const tempAiMessage = {
      id: `ai-${tempId}`,
      role: 'assistant',
      content: '',
      isOptimistic: true,
      status: 'waiting',
      timestamp: new Date().toISOString()
    };

    if (!selectedChatId) {
      setLocalMessages(prev => [...prev, userMessage, tempAiMessage]);
      
      const generatedTitle = content.length > 25 ? `${content.substring(0, 25)}...` : content;
      const optimisticChat = {
        _id: `temp-${tempId}`,
        title: generatedTitle,
        createdAt: new Date().toISOString(),
        isOptimistic: true
      };
      setOptimisticChats(prev => [...prev, optimisticChat]);
    } else {
      setOptimisticMessages(prev => [...prev, userMessage, tempAiMessage]);
    }

    if (!prefilledContent) {
      setInputMessage('');
      setInputImage(null);
      removeImage();
    }

    dispatch(analyzeAIMessage({ 
      message: content, 
      image: image?.file || image, 
      chatId: selectedChatId 
    }))
      .unwrap()
      .then((response) => {
        setOptimisticMessages(prev => 
          prev.filter(msg => msg.id !== `ai-${tempId}`)
        );
        
        setOptimisticMessages(prev => 
          prev.map(msg => 
            msg.id === tempId ? { ...msg } : msg
          )
        );

        if (!selectedChatId && response?.chatId) {
          setOptimisticChats(prev => prev.filter(chat => chat._id !== `temp-${tempId}`));
          setSelectedChatId(response.chatId);
          setIsNewChat(false);
        } else if (selectedChatId) {
          setTimeout(() => {
            dispatch(fetchChatMessages(selectedChatId));
          }, 200);
        }
      })
      .catch(err => {
        console.error('Send message failed:', err);
        toast.error('Failed to send message');
        setOptimisticMessages(prev => 
          prev.map(msg => 
            msg.id === tempId ? { ...msg, status: 'failed' } : 
            msg.id === `ai-${tempId}` ? null : msg
          ).filter(Boolean)
        );
        
        if (!selectedChatId) {
          setLocalMessages(prev => 
            prev.map(msg => 
              msg.id === tempId ? { ...msg, status: 'failed' } : 
              msg.id === `ai-${tempId}` ? null : msg
            ).filter(Boolean)
          );
          setOptimisticChats(prev => prev.filter(chat => chat._id !== `temp-${tempId}`));
        }
      });
  };

  const handleRetryMessage = (messageId) => {
    const failedMessage = optimisticMessages.find(msg => msg.id === messageId) || 
                        localMessages.find(msg => msg.id === messageId);
    if (failedMessage) {
      if (!selectedChatId) {
        setLocalMessages(prev => prev.filter(msg => msg.id !== messageId));
      }
      setOptimisticMessages(prev => prev.filter(msg => msg.id !== messageId));
      handleSendMessage(failedMessage.content, failedMessage.image);
    }
  };

  const formatChatTitle = (title) => {
    if (!title) return 'Untitled Chat';
    return title.length > 25 ? `${title.substring(0, 25)}...` : title;
  };

  const handleDeleteChat = async (chatId, e) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this chat? This action cannot be undone.')) {
      setShowChatMenu(null);
      return;
    }
    
    setDeletingChatId(chatId);
    try {
      await dispatch(deleteChat(chatId)).unwrap();
      toast.success('Chat deleted successfully');
      
      if (selectedChatId === chatId) {
        handleNewChat();
      }
      
      dispatch(fetchAllChats());
    } catch (error) {
      toast.error(error.message || 'Failed to delete chat');
    } finally {
      setDeletingChatId(null);
      setShowChatMenu(null);
    }
  };

  const toggleChatMenu = (chatId, e) => {
    e.stopPropagation();
    setShowChatMenu(showChatMenu === chatId ? null : chatId);
  };

  return (
    <ProtectedRoute>
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-6xl rounded-xl shadow-lg border border-gray-200 bg-white p-6 my-8 flex flex-col md:flex-row h-[calc(100vh-8rem)]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 border-r pr-4 flex flex-col mb-4 md:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Your Chats</h2>
              <div className="flex space-x-2">
                <button
                  onClick={handleRefreshChats}
                  className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                  disabled={loading}
                  aria-label="Refresh chats"
                >
                  <FontAwesomeIcon icon={faSyncAlt} className={loading ? 'animate-spin' : ''} />
                </button>
                <button
                  onClick={handleNewChat}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition flex items-center"
                  disabled={sending || loadingMessages || switchingChat}
                  aria-label="Start new chat"
                >
                  <span>+ New</span>
                </button>
              </div>
            </div>
            
            {loading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 p-2 bg-red-50 rounded text-sm">
                Error loading chats. Please try again.
              </div>
            ) : (
              <ul className="space-y-2 overflow-y-auto flex-grow pr-2">
                {chats.length === 0 && optimisticChats.length === 0 ? (
                  <li className="text-sm text-gray-500 p-2">
                    No chats yet. Start a new conversation!
                  </li>
                ) : (
                  <>
                    {chats.map(chat => (
                      <li
                        key={chat._id}
                        className={`group p-3 rounded-md cursor-pointer transition text-sm flex items-center justify-between
                          ${selectedChatId === chat._id && !isNewChat
                            ? 'bg-blue-100 border border-blue-200' 
                            : 'hover:bg-gray-50 border border-transparent'}
                          ${(switchingChat || loadingMessages) && selectedChatId === chat._id ? 'opacity-50' : ''}`}
                        onClick={() => handleChatClick(chat._id)}
                        aria-current={selectedChatId === chat._id ? 'true' : undefined}
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                          <span className="truncate">
                            {formatChatTitle(chat.title)}
                          </span>
                        </div>
                        
                        <div className="relative">
                          <button
                            onClick={(e) => toggleChatMenu(chat._id, e)}
                            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Chat options"
                          >
                            <FontAwesomeIcon icon={faEllipsisV} className="text-gray-500" />
                          </button>
                          
                          {showChatMenu === chat._id && (
                            <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                              <button
                                onClick={(e) => handleDeleteChat(chat._id, e)}
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                                disabled={deletingChatId === chat._id}
                              >
                                {deletingChatId === chat._id ? (
                                  <>
                                    <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                                    Deleting...
                                  </>
                                ) : (
                                  <>
                                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                                    Delete Chat
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                    {optimisticChats.map(chat => (
                      <li
                        key={chat._id}
                        className="p-3 rounded-md text-sm flex items-center opacity-80"
                      >
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="truncate">
                          {formatChatTitle(chat.title)}
                          {sending && (
                            <FontAwesomeIcon icon={faSpinner} className="ml-2 animate-spin" />
                          )}
                        </span>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col pl-0 md:pl-6">
            <div className="flex items-center mb-4 pb-4 border-b">
              <motion.button
                onClick={handleBack}
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 mr-2"
                disabled={switchingChat}
                aria-label="Go back"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              </motion.button>
              <h1 className="text-xl font-semibold text-gray-800">
                {isNewChat 
                  ? 'New Chat'
                  : selectedChatId 
                    ? formatChatTitle(chats.find(c => c._id === selectedChatId)?.title) 
                    : optimisticChats.length > 0 
                      ? formatChatTitle(optimisticChats[0].title) 
                      : 'New Chat'}
                {(switchingChat || loadingMessages) && selectedChatId && !isNewChat && (
                  <FontAwesomeIcon icon={faSpinner} className="ml-2 animate-spin" />
                )}
              </h1>
              <div className="ml-auto">
                <Image 
                  src="/images/Ai/logo.svg" 
                  alt="AI Assistant Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
              {switchingChat ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl text-gray-400 mb-2" />
                  <p className="text-gray-500">Loading chat...</p>
                </div>
              ) : (
                <>
                  {isNewChat && displayMessages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <Image 
                          src="/images/Ai/logo.svg" 
                          alt="AI Assistant" 
                          width={48} 
                          height={48} 
                        />
                      </div>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">Start a new conversation</h3>
                      <p className="text-gray-500 max-w-md">
                        Ask me anything or upload an image to get started. I'm here to help!
                      </p>
                    </div>
                  )}

                  {selectedChatId && loadingMessages && !switchingChat && !isNewChat && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-full max-w-2xl">
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!switchingChat && displayMessages.map((msg, i) => (
                    <motion.div
                      key={msg.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-3xl rounded-lg p-4 relative ${
                          msg.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        } ${
                          msg.isOptimistic ? 'opacity-80' : ''
                        }`}
                        aria-live={msg.status === 'waiting' ? 'polite' : undefined}
                      >
                        {msg.content && (
                          <div className={`prose ${msg.role === 'user' ? 'text-white' : 'text-gray-800'}`}>
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                        )}
                        {msg.image && (
                          <div className="mt-2 relative">
                            <img
                              src={msg.image.url || msg.image}
                              alt="User uploaded content"
                              className="max-w-full max-h-60 rounded-md border border-gray-200"
                            />
                            {msg.status === 'sending' && (
                              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-white text-xl" />
                              </div>
                            )}
                          </div>
                        )}
                        {msg.role === 'user' && (
                          <div className="flex justify-end mt-1 space-x-2">
                            {msg.status === 'sending' && (
                              <span className="text-xs flex items-center">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-1" />
                                Sending
                              </span>
                            )}
                            {msg.status === 'failed' && (
                              <button 
                                onClick={() => handleRetryMessage(msg.id)}
                                className="text-xs flex items-center text-red-300 hover:text-red-100"
                                aria-label="Retry sending message"
                              >
                                <FontAwesomeIcon icon={faExclamation} className="mr-1" />
                                Failed - Retry
                              </button>
                            )}
                            {msg.status === 'delivered' && (
                              <span className="text-xs flex items-center text-blue-200">
                                <FontAwesomeIcon icon={faCheck} className="mr-1" />
                                Delivered
                              </span>
                            )}
                          </div>
                        )}
                        {msg.role === 'assistant' && msg.status === 'waiting' && (
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                            </div>
                            <span className="text-xs text-gray-500">AI is thinking...</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t pt-4">
              {imagePreview && !switchingChat && (
                <div className="mb-3 relative">
                  <img
                    src={imagePreview}
                    alt="Preview of uploaded image"
                    className="max-h-60 rounded-md border border-gray-200"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                    aria-label="Remove image"
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              )}
              
              {!switchingChat && (
                <div className="flex items-center space-x-2">
                  <label className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={sending || loadingMessages}
                      className="hidden"
                      aria-label="Upload image"
                    />
                  </label>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (sending || loadingMessages) {
                          setMessageQueue(prev => [...prev, {
                            content: inputMessage.trim(),
                            image: inputImage
                          }]);
                          setInputMessage('');
                          setInputImage(null);
                          removeImage();
                        } else {
                          handleSendMessage();
                        }
                      }
                    }}
                    disabled={(sending || loadingMessages) && messageQueue.length > 0}
                    aria-label="Chat message input"
                  />
                  <button
                    onClick={() => {
                      if (sending || loadingMessages) {
                        setMessageQueue(prev => [...prev, {
                          content: inputMessage.trim(),
                          image: inputImage
                        }]);
                        setInputMessage('');
                        setInputImage(null);
                        removeImage();
                      } else {
                        handleSendMessage();
                      }
                    }}
                    disabled={(sending || loadingMessages) || (!inputMessage.trim() && !inputImage)}
                    className={`px-4 py-2 rounded-full flex items-center justify-center min-w-[80px] ${
                      (sending || loadingMessages) && messageQueue.length > 0
                        ? 'bg-blue-400 cursor-wait'
                        : !inputMessage.trim() && !inputImage
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    aria-label={(sending || loadingMessages) ? 'Sending message' : 'Send message'}
                  >
                    {(sending || loadingMessages) ? (
                      messageQueue.length > 0 ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                          {messageQueue.length + 1}
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                          Sending
                        </>
                      )
                    ) : (
                      'Send'
                    )}
                  </button>
                </div>
              )}
              {sendError && !switchingChat && (
                <div className="mt-2 text-sm text-red-500 bg-red-50 p-2 rounded">
                  {sendError}
                </div>
              )}
              {messageQueue.length > 0 && !switchingChat && (
                <div className="mt-2 text-sm text-blue-500 bg-blue-50 p-2 rounded">
                  {messageQueue.length} message{messageQueue.length !== 1 ? 's' : ''} in queue
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </ProtectedRoute>
  );
}