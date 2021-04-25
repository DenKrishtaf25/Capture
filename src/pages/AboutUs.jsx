import React from 'react';

// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';

//Animations
import { pageAnimation } from "../pages/animation";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <AboutSection />
            <ServicesSection />
            <FAQSection />
        </motion.div>
    );
}


export default AboutUs;