import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { GraduationCap, MessageSquare } from "lucide-react"; // swapped from flowbite-icons

export default function LandingPage() {
    const parallax = useRef<React.ElementRef<typeof Parallax> | null>(null);

    return (
        <div className="h-120 w-full bg-gradient-to-br from-white-600 via-blue-700 to-black text-white overflow-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full flex justify-between items-center p-6 z-20 bg-black bg-opacity-50">
                <div className="text-2xl font-bold">Hugs</div>
                <div className="flex gap-6">

                    <Link to="/login" className="hover:text-purple-300">
                        Login
                    </Link>
                    <Link to="/signup" className="hover:text-purple-300">
                        Sign Up
                    </Link>

                </div>
            </nav>

            <Parallax pages={2} ref={parallax}>
                {/* Hero Layer */}
                <ParallaxLayer offset={0} speed={0.5} className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                            Empowering Student Mental Health
                        </h1>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                                    Hugs supports your emotional well‑being through peer chat,<br /> self‑help tools, and
                                    counselor access.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/signup"
                                        className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-4xl"
                                    >
                                        Get Started
                                    </Link>

                                </div>
                            </div>
                            <div>
                                <p>imsge</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />  <br />
                        <div>
                            <p>yfugigi</p>
                        </div>
                    </motion.div>
                </ParallaxLayer>


            </Parallax >

        </div>


    );
}


/*
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { GraduationCap, MessageSquare } from "lucide-react"; // swapped from flowbite-icons

export default function LandingPage() {
    const parallax = useRef<React.ElementRef<typeof Parallax> | null>(null);

    return (
        <div className="h-screen w-full bg-gradient-to-br from-white-600 via-blue-700 to-black text-white overflow-hidden">
          
            <nav className="fixed top-0 w-full flex justify-between items-center p-6 z-20 bg-black bg-opacity-50">
                <div className="text-2xl font-bold">Hugs</div>
                <div className="flex gap-6">

                    <Link to="/login" className="hover:text-purple-300">
                        Login
                    </Link>
                    <Link to="/signup" className="hover:text-purple-300">
                        Sign Up
                    </Link>

                </div>
            </nav>

            <Parallax pages={2} ref={parallax}>
            
                <ParallaxLayer offset={0} speed={0.5} className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                            Empowering Student Mental Health
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Hugs supports your emotional well‑being through peer chat, self‑help tools, and
                            counselor access.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/signup"
                                className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-4xl"
                            >
                                Get Started
                            </Link>

                        </div>
                    </motion.div>
                </ParallaxLayer>

   ]

                <ParallaxLayer
                    offset={1}
                    speed={0.3}
                    className="bg-white text-gray-800 flex flex-col items-center justify-center py-20 px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-5xl w-full grid md:grid-cols-3 gap-10"
                    >
                        {[
                            {
                         
                            {       icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
                                title: "Peer Chat",
                                desc: "Secure and anonymous chats with fellow students.",
                            },
                                icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
                                title: "Self‑Help Tools",
                                desc: "Guided journaling, breathing, and resilience exercises.",
                            },
                            {
                                icon: <MessageSquare className="h-12 w-12 text-indigo-600" />,
                                title: "Counseling Access",
                                desc: "Connect with professionals via your institution.",
                            },
                        ].map((f, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
                                {f.icon}
                                <h3 className="mt-4 font-semibold text-xl">{f.title}</h3>
                                <p className="mt-2 text-gray-700">{f.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </ParallaxLayer>
            </Parallax>

          

        </div>
    );
}

*/