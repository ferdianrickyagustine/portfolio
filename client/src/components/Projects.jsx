import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    const projects = [
        {
            name: "EzGigs",
            description: "A comprehensive online ticketing platform designed for event organizers and buyers. The platform offers a robust Content Management System (CMS) for sellers and AI-powered analytics to optimize event performance. It also features a vibrant marketplace where buyers can discover and purchase tickets seamlessly.",
            techStack: ["TypeScript", "NextJS", "MongoDB", "Stripe", "Cron", "React-Camera", "Gemini AI", "Google Vision"],
            github: "https://github.com/BSD-22/EzGigs",
            live: "https://ez-gigs-bsd-22.vercel.app/"
        },
        {
            name: "Adopt Hero",
            description: "A web based application to adopt pet",
            techStack: ["ReactJS", "Express.js", "Sequelize", "PostgreSQL", "Jest", "AWS", "Gemini AI", "Vite + Tailwind"],
            github: "https://github.com/ferdianrickyagustine/iproject",
            live: "https://iproject-xi.vercel.app/"
        },
        {
            name: "Guessionary",
            description: "A web based application for playing game by selecting words then guessing word from image drew by other player",
            techStack: ["ReactJS", "TypeScript", "Prisma", "Vite + Tailwind", "Redux", "Socket.io"],
            github: "https://github.com/BenZeta/Guessionary"
        },
        {
            name: "Undercover",
            description: "A web based social media that inspired by X",
            techStack: ["Express", "EJS", "Sequelize", "PostgreSQL", "ImageKit", "HTML", "CSS"]
        },
        {
            name: "Tiktok Clone",
            description: "A mobile application that replicates social media called TikTok.",
            techStack: ["React Native", "GraphQL", "Apollo", "MongoDB"],
            github: "https://github.com/H8-FSJS-P3S5/gc01-ferdianrickyagustine",
            live: "https://expo.dev/preview/update?message=ProfilePage&updateRuntimeVersion=1.0.0&createdAt=2025-01-19T06%3A37%3A19.322Z&slug=exp&projectId=614e8940-c48c-4b27-b2e7-a7a42e9233fc&group=4cd6f9a3-101e-4b61-9090-ff3284e31a5e"
        },
        {
            name: "Moofee",
            description: "A web based application to search for movies",
            techStack: ["ReactJS", "Express.js", "Sequelize", "PostgreSQL", "AWS", "Vite + Tailwind"],
            github: "https://github.com/ferdianrickyagustine/iproject",
            live: "https://movies-aoyp.vercel.app/"
        }
    ]

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>
                <motion.div 
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-700/50 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.name}
                                </h3>
                                
                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, idx) => (
                                        <motion.span 
                                            key={idx}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {(project.github || project.live) && (
                                    <div className="flex gap-4 mt-4">
                                        {project.github && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
                                            >
                                                <FiGithub className="text-lg" />
                                                <span>GitHub</span>
                                            </motion.a>
                                        )}
                                        {project.live && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-500/80 transition-colors border border-blue-500"
                                            >
                                                <FiExternalLink className="text-lg" />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects 