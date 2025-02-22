import { FiLinkedin, FiGithub } from 'react-icons/fi'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
            <div className="container mx-auto px-4 py-20 md:py-32 text-center">
                <div className="mb-8">
                    <img 
                        src="https://ik.imagekit.io/matguchi18/Face.jpg" 
                        alt="Ferdian Ricky Agustine"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-gray-800 shadow-xl shadow-blue-500/10"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    Ferdian Ricky Agustine
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8">
                    Software Developer
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-8">
                    Tangerang, Indonesia | +6283897229856 | ferdianrickyag@gmail.com
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:space-x-4">
                    <a 
                        href="https://www.linkedin.com/in/ferdian-ricky-agustine-080a281a8/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600/80 text-white rounded-full hover:bg-blue-500/80 transition-colors border border-blue-500 hover:scale-105 duration-200"
                    >
                        <FiLinkedin className="text-xl" />
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href="https://github.com/ferdianrickyagustine" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors border border-gray-600 hover:scale-105 duration-200"
                    >
                        <FiGithub className="text-xl" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero 