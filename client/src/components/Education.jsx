const Education = () => {
    const education = [
        {
            school: "Hacktiv8",
            location: "Jakarta, Indonesia",
            degree: "Full Stack JavaScript Immersive Program",
            period: "November 2024 – February 2025",
            details: "(Transcript)"
        },
        {
            school: "Universitas Bina Nusantara",
            location: "Tangerang, Indonesia",
            degree: "Bachelor of Information System",
            period: "2018 – 2022",
            details: "GPA 3.45/4.00"
        }
    ]

    return (
        <section id="education" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Education</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700/50 shadow-lg">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                                    <p className="text-gray-400">{edu.location}</p>
                                </div>
                                <span className="text-sm text-gray-500">{edu.period}</span>
                            </div>
                            <p className="text-gray-300">{edu.degree}</p>
                            <p className="text-gray-400 text-sm mt-1">{edu.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education 