import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const Certifications = () => {
    const certifications = [
        {
            name: "Full Stack JavaScript",
            issuer: "Hacktiv8",
            date: "Issued on February 2025",
            certificate: "View Certificate",
            validity: "No expiration date",
            url: "https://drive.google.com/file/d/1c2F1iomvZP8OXYpzVznfPm1YPtU685r5/view?usp=sharing"
        },
        {
            name: "Problem Solving (Basic)",
            issuer: "Hacker Rank",
            date: "Issued on February 2025",
            certificate: "Certificate: 2fbfc499420f",
            validity: "No expiration date",
            url: "https://www.hackerrank.com/certificates/2fbfc499420f"
        },
        {
            name: "Javascript (Basic)",
            issuer: "Hacker Rank",
            date: "Issued on February 2025",
            certificate: "Certificate: 5cb2a57381ec",
            validity: "No expiration date",
            url: "https://www.hackerrank.com/certificates/5cb2a57381ec"
        },
        {
            name: "CSS (Basic)",
            issuer: "Hacker Rank",
            date: "Issued on February 2025",
            certificate: "Certificate: 6f04643f1786",
            validity: "No expiration date",
            url: "https://www.hackerrank.com/certificates/6f04643f1786"
        },
        {
            name: "SQL (Basic)",
            issuer: "Hacker Rank",
            date: "Issued on February 2025",
            certificate: "Certificate: 60724af1fe37",
            validity: "No expiration date",
            url: "https://www.hackerrank.com/certificates/60724af1fe37"
        },
        {
            name: "React (Basic)",
            issuer: "Hacker Rank",
            date: "Issued on February 2025",
            certificate: "Certificate: 71a77bed3a16",
            validity: "No expiration date",
            url: "https://www.hackerrank.com/certificates/71a77bed3a16"
        }
    ]

    return (
        <section id="certifications" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Certifications</h2>
                <motion.div 
                    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    {certifications.map((cert, index) => (
                        <div 
                            key={index}
                            className="group bg-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-gray-400">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm">{cert.date}</p>
                            <motion.a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-400/80 text-sm font-mono mt-2 hover:text-blue-300 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <span>{cert.certificate}</span>
                                <FiExternalLink className="text-lg" />
                            </motion.a>
                            <p className="text-gray-500 text-sm mt-1">{cert.validity}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications 