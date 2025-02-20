const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-xl font-bold text-white">FRA</a>
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
                        <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
                        <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
                        <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
                        <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors">Certifications</a>
                    </div>
                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar