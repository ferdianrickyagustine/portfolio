import { useMotionValue, motion, animate, useTransform } from "framer-motion"
import { useEffect } from "react"

const LoadingScreen = ({ onLoadingComplete }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
        const controls = animate(count, 100, { 
            duration: 1,
            onComplete: () => {
                setTimeout(() => {
                    onLoadingComplete()
                }, 500)
            }
        })
        return () => controls.stop()
    }, [])

    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
            <div className="text-center">
                <motion.div 
                    className="text-6xl font-bold text-blue-400 mb-4"
                    style={{
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                >
                    <motion.span>{rounded}</motion.span>%
                </motion.div>
            </div>
        </div>
    )
}

export default LoadingScreen 