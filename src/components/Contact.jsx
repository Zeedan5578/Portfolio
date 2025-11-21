import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const { isDark } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div className={`${isDark?'bg-gradient-to-br text-blue-50 from-black via-gray-800 to-zinc-900':'bg-gradient-to-br  from-white/80 via-gray-400 to-zinc-200'} py-12 px-4 sm:px-6 min-h-screen`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Get In Touch
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`mt-6 text-lg ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
                    >
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mt-12"
                >
                    {/* Email */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col items-center"
                    >
                        <motion.a
                            href="mailto:zeedanmohsin36@gmail.com"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className={`p-6 rounded-full ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                        >
                            <FaEnvelope className={`text-3xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                        </motion.a>
                        <h3 className="mt-4 text-lg font-medium">Email</h3>
                        
                    </motion.div>

                    {/* GitHub */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col items-center"
                    >
                        <motion.a
                            href="https://github.com/zeedan5578"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className={`p-6 rounded-full ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                        >
                            <FaGithub className={`text-3xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                        </motion.a>
                        <h3 className="mt-4 text-lg font-medium">GitHub</h3>
                        
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col items-center"
                    >
                        <motion.a
                            href="https://www.linkedin.com/in/zeedan-mohsin-8132a4249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className={`p-6 rounded-full ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                        >
                            <FaLinkedin className={`text-3xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                        </motion.a>
                        <h3 className="mt-4 text-lg font-medium">LinkedIn</h3>
                       
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-20 max-w-md mx-auto"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Or send me a message</h2>
                    <form action="https://formspree.io/f/xzzvalaj" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="name" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className={`w-full px-4 py-2 rounded-lg ${isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                className={`w-full px-4 py-2 rounded-lg ${isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="4" 
                                className={`w-full px-4 py-2 rounded-lg ${isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className={`w-full py-3 px-6 rounded-lg font-medium ${isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white transition-colors`}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;