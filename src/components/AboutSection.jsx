import React from 'react';

import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from "../style.js";

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animation";


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
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
                </div>
                <motion.p variants={fade}>
                    Contact us for any photograohy or videography ideas that you have. We have
                    professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
        </About>
    )
}




export default AboutSection;