
import './HeroSection.css';
import HeroSectionNameWithSkill from './HeroSectionNameWithSkill';
import MouseScroll from './MouseScroll';
import ResumeButton from './ResumeButton';
import SocialMediaSection from './SocialMediaSection';
const HeroSection = () => {

    
    return (
        <div className="HeroSection">
            <HeroSectionNameWithSkill />
            <p className='HeroPara'>
                I specialize in building scalable, maintainable applications that feature engaging UI.
                My strong problem-solving skills enable me to tackle complex challenges and deliver efficient
                solutions effectively.
            </p>
            <div className='ResumeButttonSection'>
                <ResumeButton />
            </div>
            <div className='SocialMediaSectionParent'>
                <SocialMediaSection/>
            </div>
            <MouseScroll />
        </div>
    );
};

export default HeroSection;
