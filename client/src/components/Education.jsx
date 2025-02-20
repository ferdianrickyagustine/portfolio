import { motion } from 'framer-motion'

const Education = () => {
    const education = [
        {
            school: "Hacktiv8",
            location: "Jakarta, Indonesia",
            degree: "Full Stack JavaScript Immersive Program",
            period: "November 2024 – February 2025",
            details: "Score: 86/100",
            image: "https://ik.imagekit.io/matguchi18/hacktiv8.png"
        },
        {
            school: "Universitas Bina Nusantara",
            location: "Tangerang, Indonesia",
            degree: "Bachelor of Information System",
            period: "2018 – 2022",
            details: "GPA 3.45/4.00",
            image: "https://ik.imagekit.io/matguchi18/binus.png"
        }
    ]

    return (
        <section id="education" className="py-16 md:py-20 bg-gray-800/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Education</h2>
                <motion.div 
                    className="max-w-4xl mx-auto space-y-6 md:space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-700/50 shadow-lg hover:border-blue-500/30 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <img 
                                    src={edu.image} 
                                    alt={edu.school}
                                    className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] object-contain rounded-lg bg-white/10 p-4 mx-auto md:mx-0"
                                />
                                <div className="flex-grow text-center md:text-left">
                                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-white">{edu.school}</h3>
                                            <p className="text-gray-400">{edu.location}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 mt-1 md:mt-0">{edu.period}</span>
                                    </div>
                                    <p className="text-gray-300">{edu.degree}</p>
                                    <p className="text-sm text-gray-400 mt-1">{edu.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Education 