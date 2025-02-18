'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function ChatBot() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex justify-center items-start pt-8 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[1100px] rounded-[20px] shadow-[0_0.4px_4px_0_rgba(0,0,0,0.15)] border border-gray-200 bg-white p-6 mt-4 mb-12"
      >
        {/* Header */}
        <div className="flex items-center mb-4 border-b pb-4">
          <motion.button 
            onClick={handleBack}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-black hover:text-[#247CFF] transition-colors p-2 rounded-full hover:bg-[#F8F9FF]"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </motion.button>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[28px] font-semibold mx-auto"
          >
            ChatBot
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="ml-auto"
          >
            <Image
              src="/images/Ai/logo.svg"
              alt="DentalLink Logo"
              width={70}
              height={70}
            />
          </motion.div>
        </div>

        {/* Chat Content */}
        <div className="flex flex-col gap-6">
          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-end"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-[350px] h-[200px] rounded-[10px] overflow-hidden shadow-sm"
            >
              <Image
                src="/images/Ai/xray.svg"
                alt="Dental X-ray"
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Analysis Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
            className="bg-[#f0f7ff] rounded-[10px] p-5 max-w-[600px]"
          >
            <h2 className="font-semibold mb-2">Detected issues:</h2>
            <p className="text-[#606060] mb-4">
              Possible cavity in the upper molar and slight enamel erosion.
            </p>
            <h2 className="font-semibold mb-2">Recommendation:</h2>
            <p className="text-[#606060]">
              Consider a dental check-up for further evaluation. Maintaining good oral hygiene and reducing sugar intake can help prevent further decay.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-3 mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-[#F8F9FF] rounded-[10px] flex items-center justify-center border border-gray-100"
            >
              <Image
                src="/images/Ai/share.svg"
                alt="Share"
                width={22}
                height={22}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-[#F8F9FF] rounded-[10px] flex items-center justify-center border border-gray-100"
            >
              <Image
                src="/images/Ai/attach.svg"
                alt="Attach"
                width={22}
                height={22}
              />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#F8F9FF] rounded-[10px] py-2 px-3 ml-auto border border-gray-100"
            >
              <Image
                src="/images/Ai/pdf.svg"
                alt="PDF"
                width={22}
                height={22}
              />
              <span className="text-sm text-[#666666]">data.pdf</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}