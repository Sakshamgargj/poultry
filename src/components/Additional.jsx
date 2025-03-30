import React from 'react'
import { motion } from 'framer-motion';

function Additional() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 p-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-lg shadow-lg bg-white"
            >
                <motion.h2
                    className="text-2xl font-mono mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, color: "#ca8a04" }}
                    transition={{ duration: 0.3 }}
                >
                    About Us
                </motion.h2>
                <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                <motion.p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                </motion.p>
                <motion.p className="text-sm leading-relaxed mt-4">
                    Morbi nunc odio, gravida at, cursus nec. Donec accumsan malesuada orci. Donec sit amet eros.
                </motion.p>
                <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                    Read More
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-5 rounded-lg shadow-lg bg-white"
            >
                <motion.h2
                    className="text-2xl font-mono mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, color: "#ca8a04" }}
                    transition={{ duration: 0.3 }}
                >
                    Popular Services
                </motion.h2>
                <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                <motion.p className="text-sm leading-relaxed text-yellow-600">
                    Morbi nunc odio, gravida at <br />
                    Duis ultricies pharetra magna <br />
                    Donec accumsan malesuada orci <br />
                    Donec sit amet eros. <br />
                    Lorem ipsum dolor sit amet, consectetuer <br />
                    Mauris fermentum dictum magna
                </motion.p>
                <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                    Read More
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-5 rounded-lg shadow-lg bg-white"
            >
                <motion.h2
                    className="text-2xl font-mono mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, color: "#ca8a04" }}
                    transition={{ duration: 0.3 }}
                >
                    Latest News
                </motion.h2>
                <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                <motion.p className="text-xs text-gray-500 font-mono">
                    Posted: Jan 15, 2011
                </motion.p>
                <motion.p className="text-sm leading-relaxed mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie
                </motion.p>
                <motion.p className="text-xs text-gray-500 font-mono mt-4">
                    Posted: Jan 15, 2011
                </motion.p>
                <motion.p className="text-sm leading-relaxed mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum
                </motion.p>
                <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                    Read More
                </button>
            </motion.div>
        </div>
    )
}

export default Additional
