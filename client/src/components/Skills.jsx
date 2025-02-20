import { motion } from 'framer-motion'
import { 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiRedux, 
    SiHtml5,
    SiCss3,
    SiApollographql,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiSequelize,
    SiPostgresql,
    SiGraphql,
    SiMongodb,
    SiRedis,
    SiPostman
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

const Skills = () => {
    const skillCategories = [
        {
            category: "Language",
            icon: <FaCode className="text-2xl text-blue-400" />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> }
            ]
        },
        {
            category: "Front End",
            icon: <SiReact className="text-2xl text-blue-400 animate-spin-slow" />,
            skills: [
                { name: "React JS", icon: <SiReact className="text-blue-400" /> },
                { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
                { name: "React Native", icon: <SiReact className="text-blue-400" /> },
                { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
                { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
                { name: "Apollo Client", icon: <SiApollographql className="text-purple-400" /> },
                { name: "NextJs", icon: <SiNextdotjs className="text-white" /> }
            ]
        },
        {
            category: "Back End",
            icon: <SiNodedotjs className="text-2xl text-green-400" />,
            skills: [
                { name: "Node JS", icon: <SiNodedotjs className="text-green-400" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "Sequelize", icon: <SiSequelize className="text-blue-400" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
                { name: "Apollo Server", icon: <SiApollographql className="text-purple-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
                { name: "Redis", icon: <SiRedis className="text-red-400" /> },
                { name: "Rest API", icon: <SiPostman className="text-orange-400" /> },
                { name: "NextJs", icon: <SiNextdotjs className="text-white" /> }
            ]
        }
    ]

    return (
        <section id="skills" className="py-16 md:py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Technical Skills</h2>
                <motion.div 
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-gray-800/50 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700/50"
                        >
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                {category.icon}
                                <h3 className="text-lg md:text-xl font-semibold text-white">{category.category}</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-2 md:gap-3">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-2 md:px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:bg-blue-400/10 hover:border-blue-400/30 hover:scale-105 transition-all duration-200"
                                    >
                                        <div className="flex gap-1">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs md:text-sm text-gray-300">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills 