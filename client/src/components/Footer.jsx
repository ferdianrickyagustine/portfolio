import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900/80 border-t border-gray-800/50">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">Contact Me</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <a 
                            href="mailto:ferdianrickyag@gmail.com"
                            className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
                        >
                            <FiMail className="text-xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-white">ferdianrickyag@gmail.com</p>
                            </div>
                        </a>

                        <a 
                            href="https://wa.me/+6283897229856"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
                        >
                            <FiPhone className="text-xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="text-white">+6283897229856</p>
                            </div>
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/ferdian-ricky-agustine-080a281a8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
                        >
                            <FiLinkedin className="text-xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">LinkedIn</p>
                                <p className="text-white">Ferdian Ricky Agustine</p>
                            </div>
                        </a>

                        <a 
                            href="https://github.com/ferdianrickyagustine"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
                        >
                            <FiGithub className="text-xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">GitHub</p>
                                <p className="text-white">ferdianrickyagustine</p>
                            </div>
                        </a>
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-8">
                        © {new Date().getFullYear()} Ferdian Ricky Agustine. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 