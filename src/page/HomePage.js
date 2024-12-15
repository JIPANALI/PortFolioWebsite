import React, { useRef } from "react";
import HeroSection from "../component/HeroSection";
import ProjectSection from "../component/ProjectSection";
import SkillSection from "../component/SkillSection";
import EducationSection from "../component/EducationSection";
import ContactMeSection from "../component/ContactMeSection";

const HomePage = ({ scrollToSection }) => {
    const projectRef = useRef(null);
    const skillRef = useRef(null);
    const educationRef = useRef(null);
    const homeRef = useRef(null);
    const contactRef = useRef(null);

    // Handle scrolling based on section name
    const handleScroll = (sectionName) => {
        if (sectionName === "home" && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        else if (sectionName === "project" && projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (sectionName === "skill" && skillRef.current) {
            skillRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (sectionName === "education" && educationRef.current) {
            educationRef.current.scrollIntoView({ behavior: "smooth" });
        }else if (sectionName === "contact" && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    scrollToSection.current = handleScroll;

    return (
        <div>
            <div ref={homeRef}>
                <HeroSection />
            </div>
            <div ref={projectRef}>
                <ProjectSection />
            </div>
            <div ref={skillRef}>
                <SkillSection />
            </div>
            <div ref={educationRef}>
                <EducationSection />
            </div>
            <div ref={contactRef}>
                <ContactMeSection />
            </div>

        </div>
    );
};

export default HomePage;
