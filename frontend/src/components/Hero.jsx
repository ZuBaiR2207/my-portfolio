import React from 'react';
import { motion } from 'framer-motion';
function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-indigo-950 to-gray-700 text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-center'
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-6xl font-bold mb-4'
                >
                    Zubair Md Talha
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-2xl text-gray-400'
                >
                    Backend Developer & IT Student
                </motion.p>
            </motion.div>

        </div>
    );
}
export default Hero;