import RotatingText from '@/components/RotatingText'
import { LayoutGroup, motion } from 'framer-motion'
// import Image from "@/assets/Linkedin-White.png" //Dummy Image
import Image from "@/assets/shashank.jpeg"
import { useTheme } from '@/context/theme'
import { GlitchText } from "@/components/Glitch"

function Hero() {
    const { theme } = useTheme()
    return (
        <section className="min-h-screen flex items-center mb-6">
            <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <p className="text-md code-font">Hey!</p>

                    <h1 className="text-6xl font-bold gap-6 text-center md:text-left leading-tight heading-font">
                        I'm
                        <div>{theme === "light" ? "Shashank" : <GlitchText className="heading-font" text='Shashank' />}</div>
                    </h1>

                    <div className="space-y-4 mt-6 code-font text-md">

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
                                        texts={[
                                            'Engineer Platforms',
                                            'Automate Workflows',
                                            'Scale Kubernetes',
                                            'Design Observability',
                                            'Stabilize Systems',
                                        ]}
                                        mainClassName="px-3 bg-cyan-300 text-black overflow-hidden py-1 rounded-lg"
                                        staggerFrom="last"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={3000}
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
                                        texts={[
                                            'Master Boss Fights',
                                            'Decode Plot Twists',
                                            'Study Human Behavior',
                                            'Chase Melodies',
                                            'Capture Moments',
                                            'Explore New Places',
                                            'Build UI',
                                        ]}
                                        mainClassName="px-3 bg-yellow-300 text-black overflow-hidden py-1 rounded-lg"
                                        staggerFrom="first"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={3000}
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
                        className="size-96 md:size-128 object-cover rounded-full object-left"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero