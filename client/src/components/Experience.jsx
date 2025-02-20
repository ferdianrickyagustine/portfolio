import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            company: "PT Omega Softindo",
            location: "Jakarta, Indonesia",
            position: "IT Payroll Consultant",
            period: "March 2023 – September 2024",
            responsibilities: [
                "Conducted testing for attendance website development",
                "Met with clients to conduct payroll program training",
                "Set up client payroll programs according to company criteria"
            ]
        },
        {
            company: "Course-Net Indonesia",
            location: "Jakarta, Indonesia",
            position: "Quality Assurance",
            period: "February 2021 – February 2022",
            responsibilities: [
                "Conducted LMS testing to find bugs and communicated with developers via backlog",
                "Added features and ideas for LMS development"
            ]
        }
    ]

    return (
        <section id="experience" className="py-16 md:py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Work Experience</h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />
                    
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative mb-8 md:mb-12 last:mb-0"
                        >
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <motion.div 
                                    className="w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </div>
                            <div className={`relative md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                                <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                                    <div className="mb-4">
                                        <h3 className="text-lg md:text-xl font-semibold text-white">{exp.position}</h3>
                                        <p className="text-blue-400">{exp.company}</p>
                                        <p className="text-sm text-gray-400">{exp.location}</p>
                                        <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-sm">{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience 