"use client";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import { motion } from "framer-motion";

export default function EditPage() {
    return (
        <ProtectedRoute>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
            >
                <ContentBox title="Edit Profile">
                    <div className="flex flex-col items-center gap-8 p-6 rounded-2xl shadow-lg bg-white max-w-2xl mx-auto border border-gray-200">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-28 h-28 mb-4"
                        >
                            <img src="/images/profile/pfp.svg" alt="Profile" className="rounded-full shadow-md" />
                        </motion.div>
                        <div className="md:grid grid-cols-2 sm:flex gap-4 w-full">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <Label text="Name" flag />
                                <Input type="name" placeholder="Dr. Mahmoud" className="shadow-sm" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <Label text="Email" flag />
                                <Input type="email" placeholder="Dr.Mahmoud@gmail.com" className="shadow-sm" />
                            </motion.div>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                <Label text="Academic Year" flag />
                                <select className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                                    <option>Select level</option>
                                    <option value='1nd'>1st</option>
                                    <option value='2nd'>2nd</option>
                                    <option value='3nd'>3rd</option>
                                    <option value='4nd'>4th</option>
                                    <option value='5nd'>5th</option>
                                </select>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <Label text="Phone" flag />
                                <Input type="text" placeholder="01234567891" className="shadow-sm" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full"
                        >
                            <Label text="Password" />
                            <Input type="password" placeholder="**********" className="shadow-sm" />
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 text-white mt-6 px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                        >
                            Save
                        </motion.button>
                    </div>
                </ContentBox>
            </motion.div>
        </ProtectedRoute>
    );
}
