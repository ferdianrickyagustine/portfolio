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
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Work Experience</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700/50">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                                    <p className="text-gray-400">{exp.company} - {exp.location}</p>
                                </div>
                                <span className="text-sm text-gray-500">{exp.period}</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience 