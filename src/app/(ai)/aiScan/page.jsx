'use client';
import { Suspense } from 'react';
import DelayedLoader from '@/components/UI/Loader/DelayedLoader';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function AiScan() {
  const router = useRouter();

  const handleContinue = (e) => {
    e.preventDefault();
    router.push('/chatbot');
  };

  return (
    <Suspense fallback={<DelayedLoader />}>
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen pt-24 flex justify-center items-start"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[1171px] h-[540px] rounded-[30px] shadow-[0_0.4px_4px_0_rgba(0,0,0,0.25)] border border-gray-300 bg-white p-16 mt-12"
      >
        <div className="flex justify-between items-start gap-32">
          {/* Left Section - How to use */}
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] font-semibold mb-8"
            >
              How to use
            </motion.h1>
            <div className="space-y-6 text-[#666666] text-lg">
              {[1, 2, 3].map((num, index) => (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  className="flex gap-2"
                >
                  <span className="font-semibold">{num}.</span>
                  <p>
                    <span className="font-semibold">
                      {num === 1 && "Upload an Image"}
                      {num === 2 && "AI Analysis"}
                      {num === 3 && "Receive Insights"}
                    </span>
                    {num === 1 && " – Select and upload a dental X-ray or a photo of teeth."}
                    {num === 2 && " – Our AI will analyze the image to detect potential dental issues."}
                    {num === 3 && " – Get a detailed analysis with possible diagnoses and recommendations."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section - Upload Info */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F5F8FF] rounded-[20px] p-8 flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ rotate: 10 }}
              >
                <Image
                  src="/images/Ai/Ai1.svg"
                  alt="AI Scan Illustration"
                  width={120}
                  height={120}
                  className="mb-6"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center text-[#666666] text-lg mb-6"
              >
                Upload a photo, and the <span className="text-[#247CFF]">chatbot</span> will provide insights to assist you in diagnosis.
              </motion.p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={handleContinue}
                  className="text-[#247CFF] flex items-center hover:underline ml-auto"
                >
                  Continue
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </Suspense>
  );
}