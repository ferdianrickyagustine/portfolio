import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import LoadingScreen from './components/LoadingScreen'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
                    </motion.div>
                ) : (
                    <>
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
                        >
                            <Navbar />
                            <Hero />
                            <About />
                            <Experience />
                            <Education />
                            <Skills />
                            <Projects />
                            <Certifications />
                        </motion.div>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/+6283897229856"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
                            aria-label="Chat on WhatsApp"
                        >
                            <FaWhatsapp className="text-3xl" />
                        </a>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default App

