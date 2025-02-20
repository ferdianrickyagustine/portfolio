const Skills = () => {
    const skillCategories = [
        {
            category: "Language",
            skills: ["JavaScript", "TypeScript"]
        },
        {
            category: "Front End",
            skills: ["React JS", "Redux", "React Native", "HTML & CSS", "Apollo Client", "NextJs"]
        },
        {
            category: "Back End",
            skills: ["Node JS", "Express", "Sequelize", "PostgreSQL", "GraphQL", "Apollo Server", "MongoDB", "Redis", "Rest API", "NextJs"]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700/50">
                            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span 
                                        key={idx} 
                                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills 