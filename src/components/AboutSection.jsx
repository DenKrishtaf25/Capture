import React from 'react';

import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from "../style.js";

//Framer Motion
import { motion } from 'framer-motion';

const titleAnim = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0, 
        transition: { duration: .75, ease: "easeOut"},
    }
};
const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: .75, ease: "easeOut", staggerChildren: .3 }},
}

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div 
                    className="title"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    >
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            come true.
                    </motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photograohy or videography ideas that you have. We have
                    professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    )
}




export default AboutSection;