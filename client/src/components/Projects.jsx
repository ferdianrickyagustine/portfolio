import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { useState } from 'react'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            name: "EzGigs",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/EzGigs.png",
            description: "A comprehensive online ticketing platform designed for event organizers and buyers. The platform offers a robust Content Management System (CMS) for sellers and AI-powered analytics to optimize event performance. It also features a vibrant marketplace where buyers can discover and purchase tickets seamlessly.",
            techStack: ["TypeScript", "NextJS", "MongoDB", "Stripe", "Cron", "React-Camera", "Gemini AI", "Google Vision"],
            github: "https://github.com/BSD-22/EzGigs",
            live: "https://ez-gigs-bsd-22.vercel.app/"
        },
        {
            name: "Lazada Clone",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/LazadaClone.png",
            description: "A simplified e-commerce website that replicates Lazada's wishlist feature, allowing users to browse and save products for future purchases.",
            techStack: ["TypeScript", "Next js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/ferdianrickyagustine/gc-02-p3",
            live: "https://gc-02-p3.vercel.app/"
        },
        {
            name: "Tiktok Clone",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/Tiktok%20Clone.jpeg",
            description: "A mobile application that replicates social media called TikTok.",
            techStack: ["React Native", "GraphQL", "Apollo", "MongoDB"],
            github: "https://github.com/H8-FSJS-P3S5/gc01-ferdianrickyagustine",
            live: "https://expo.dev/preview/update?message=ProfilePage&updateRuntimeVersion=1.0.0&createdAt=2025-01-19T06%3A37%3A19.322Z&slug=exp&projectId=614e8940-c48c-4b27-b2e7-a7a42e9233fc&group=4cd6f9a3-101e-4b61-9090-ff3284e31a5e"
        },
        {
            name: "Guessionary",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/Guesionnary.png",
            description: "A web based application for playing game by selecting words then guessing words from image drawn by other players. Real-time multiplayer game using Socket.io for picture guessing challenges.",
            techStack: ["ReactJS", "TypeScript", "Prisma", "Vite + Tailwind", "Redux", "Socket.io"],
            github: "https://github.com/BenZeta/Guessionary"
        },
        {
            name: "Adopt Hero",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/AdoptHero.png",
            description: "A web-based application to adopt pet and using Gemini AI as a chatbot to recommend pets based on user's input.",
            techStack: ["ReactJS", "Express.js", "Sequelize", "PostgreSQL", "Jest", "AWS", "Gemini AI", "Vite + Tailwind"],
            github: "https://github.com/ferdianrickyagustine/iproject",
            live: "https://iproject-xi.vercel.app/"
        },
        {
            name: "Moofee",
            image: "https://ik.imagekit.io/matguchi18/Image%20Portfolio/Moofee.png",
            description: "A web-based application to search for movies",
            techStack: ["ReactJS", "Express.js", "Sequelize", "PostgreSQL", "AWS", "Vite + Tailwind"],
            github: "https://github.com/ferdianrickyagustine/iproject",
            live: "https://movies-aoyp.vercel.app/"
        }
    ]

    return (
        <section id="projects" className="py-16 md:py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Projects</h2>
                <motion.div 
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="group bg-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="aspect-[3/2] relative">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-full object-cover rounded-t-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="px-4 md:px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        View Details
                                    </button>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-gray-800 rounded-xl p-4 md:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                                onClick={e => e.stopPropagation()}
                            >
                                <button 
                                    className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <FiX className="text-xl md:text-2xl" />
                                </button>

                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.name}
                                    className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-6"
                                />

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{selectedProject.name}</h3>
                                
                                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{selectedProject.description}</p>
                                
                                <div className="mb-4 md:mb-6">
                                    <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-2 md:px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-end">
                                    {selectedProject.github && (
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors border border-gray-600 text-sm md:text-base"
                                        >
                                            <FiGithub className="text-lg" />
                                            <span>GitHub</span>
                                        </motion.a>
                                    )}
                                    {selectedProject.live && (
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-500/80 transition-colors border border-blue-500 text-sm md:text-base"
                                        >
                                            <FiExternalLink className="text-lg" />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects 