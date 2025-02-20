import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-xl font-bold text-white ml-10">Profile</a>

                    <div className="hidden md:flex space-x-8 mr-10">
                        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
                        <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
                        <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
                        <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
                        <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors">Certifications</a>
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800/50">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                            <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
                            <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a>
                            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
                            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                            <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar