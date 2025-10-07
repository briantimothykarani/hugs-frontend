

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPageHero() {
    return (
        <>
            <nav className="fixed top-0 w-full flex justify-between items-center p-6 z-20 bg-white bg-opacity-50">
                <div>
                    <motion.div
                        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                         className="text-2xl font-bold text-puple-700">Hugs</motion.div>
                </div>
                <div className=' flex justify-center'>
                    <Link to="" className=" text-purple-700 hover:text-black">
                        Pricing
                    </Link>

                    <Link to="" className=" text-purple-700 hover:text-black">
                        Aboutus
                    </Link>


                </div>
                <div className="flex gap-6">
                    <Link to="/login" className=" text-black hover:text-purple-700">
                        Login
                    </Link>
                    <Link to="/signup" className="text-white bg-purple-700 rounded w-15 text-center  p-0.5 hover:text-purple-300">
                        Sign Up
                    </Link>

                </div>
            </nav >

            <div className="h-[500px] w-full bg-white overflow-hidden flex justify-center items-center flex-col text-center">
                < motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-5xl md:text-6xl font-extrabold mb-4 text-center text-purple-700">
                    Empowering Student Mental Health
                </motion.h1>

                <div className="flex justify-between">
                    <div>
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}>
                            <img src='./images/brain1.jpeg' alt='landingpageimg1' className='w-70 h-70' />
                        </motion.div>
                    </div>
                    <div>
                        <p


                            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">

                            Hugs supports your emotional well‑being through peer chat,<br /> self‑help tools, and
                            counselor access.
                        </p>
                        <p className="flex flex-col sm:flex-row gap-4 justify-center ">
                            <Link
                                to="/signup"
                                className="bg-purple-700 hover:bg-purple-600 transition px-6 py-3 rounded-4xl"
                            >
                                Get Started<br />

                            </Link></p>
                    </div>


                    <div>
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}>
                            <img src="./images/brain2.jpeg" alt='nlnl' className='w-70 h-70' />
                        </motion.div>
                    </div>
                </div>


            </div >

        </>
    );
}

export default LandingPageHero;