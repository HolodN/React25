import React from 'react';
import {motion} from "framer-motion";
import '../App.css'

const Description = () => {
    return (
        <div>
            <div>
            {/*<div>Description</div>*/}
            {/*<motion.img*/}
            {/*    width={'15%'}*/}
            {/*    src='/img/icon.png'*/}
            {/*    alt=''*/}

            {/*    //анимация*/}
            {/*    animate={{rotate:360}}*/}
            {/*    transition={{*/}
            {/*        delay:2,*/}
            {/*        duration:2,*/}
            {/*        repeat: Infinity,*/}
            {/*        repeatDelay: 0.5,*/}
            {/*        repeatType:'reverse',*/}
            {/*        type:'spring'*/}
            {/*    }}*/}
            {/*    />*/}

            {/*<motion.p*/}
            {/*    initial={{*/}
            {/*        x:-1000,*/}
            {/*        opacity:0,*/}
            {/*    }}*/}
            {/*    animate={{*/}
            {/*        x: 500,*/}
            {/*        opacity:1,*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        delay:1,*/}
            {/*        duration:2,*/}
            {/*        type:'tween'*/}
            {/*    }}*/}
            {/*    >*/}
            {/*    Текст который появится*/}
            {/*</motion.p>*/}
            </div>
            <motion.div id='div1'
                initial={{
                    x:-1000,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 1,
                }}
                >
                Framer is the world's best no-code website builder. If you have a Framer website, all your animations are already powered by Motion.
            </motion.div>
            <motion.div id='div2'
            initial={{
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                delay: 1,
                duration: 1,
            }}
            >
                <motion.img
                    src='img/banner-new.jpeg'
                    className='banner'
                    width={850}

                    initial={{
                        opacity: 0.6,
                    }}
                    transition={{
                        duration: 5,
                    }}
                    whileTap={{
                        rotate:360
                    }}
                />
            </motion.div>

            <div id='divImg'>
            <motion.div id='div3'
                        initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2,
                        }}
            >
                <motion.img
                    src='img/ball.jpeg'
                    className='ball'
                    width={200}

                    initial={{
                        opacity: 0.6,
                    }}
                    transition={{
                        duration: 5,
                    }}
                    whileHover={{
                        scale: 1.5,
                        transition: {
                            duration: 2,
                        }
                    }}
                />
            </motion.div>

            <motion.div id='div4'
                        initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2,
                        }}
            >
                <motion.img drag='x'
                    src='img/ball.jpeg'
                    className='ball'
                    width={200}

                    initial={{
                        opacity: 0.6,
                    }}
                    transition={{
                        duration: 5,
                    }}
                    whileDrag={{
                        scale: 1.5,
                        transition: {
                            duration: 2,
                        }
                    }}
                />
            </motion.div>
            </div>
            <motion.button className='btn btn-primary'
                whileHover={{
                    scale: 1.5,
                }}
            >
              Нажми
            </motion.button>

        </div>
    );
};

export default Description;