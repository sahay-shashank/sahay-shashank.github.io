import RotatingText from '@/components/RotatingText'
import { LayoutGroup, motion } from 'framer-motion'
import Image from "@/assets/Linkedin-White.png" //Dummy Image
import { useTheme } from '@/context/theme'
import { GlitchText } from "@/components/Glitch"

function Hero() {
    const { theme } = useTheme()
    return (
        <section className="min-h-screen flex items-center my-6">
            <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <p className="text-lg">Hey,</p>

                    <h1 className="text-4xl md:text-6xl font-bold gap-6 text-center md:text-left">
                        I'm
                        <div>{theme === "light" ? "Shashank" : <GlitchText text='Shashank' />}</div>
                    </h1>

                    <div className="space-y-4 mt-6">

                        <LayoutGroup>
                            <motion.p
                                className="flex gap-2 items-center justify-center md:justify-start"
                                layout
                            >
                                <motion.span
                                    layout
                                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                                >
                                    By Day, I
                                </motion.span>
                                <a href='#career'>
                                    <RotatingText
                                        texts={['Build UI', 'Design Systems', 'Ship Products']}
                                        mainClassName="px-3 bg-cyan-300 text-black overflow-hidden py-1 rounded-lg"
                                        staggerFrom="last"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={5000}
                                    />
                                </a>
                            </motion.p>
                        </LayoutGroup>

                        <LayoutGroup>
                            <motion.p
                                className="flex gap-2 items-center justify-center md:justify-start"
                                layout
                            >
                                <motion.span
                                    layout
                                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                                >
                                    By Night, I
                                </motion.span>
                                <a href='#hobby'>
                                    <RotatingText
                                        texts={['Explore Ideas', 'Refactor Code', 'Study Systems']}
                                        mainClassName="px-3 bg-yellow-300 text-black overflow-hidden py-1 rounded-lg"
                                        staggerFrom="random"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </a>
                            </motion.p>
                        </LayoutGroup>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={Image}
                        alt="Hero"
                        className="w-72 md:w-96 object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero