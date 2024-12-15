import React from 'react';
import './ProjectCard.css';

import StakeButton from './StakeButton';
import LiveLinkButton from './LiveLinkButton';
import GithubCardButton from './GithubCardButton';
import CardYouTubeButton from './CardYouTubeButton';

const ProjectCard = ({githPic, Ulink, GLink, LiveLink, projectDesc, prjoectName, technologies ,projectSpecifications}) => {
    return (
        <div className="ProjectCard">
            <div className="ProjectCard-inner">
                <img className='ProjectCard-innerBigImg' src={githPic} />
                <p>{prjoectName}</p>
                <span className='ProjectCard-innerdescription'>{projectDesc}</span>
                <div className='StakeBtnSection'>
                    {technologies.map((tech, index) => (
                        <StakeButton key={index} name={tech.name} iconImg={tech.iconImg} />
                    ))}
                </div>
                <div className="ProjectCardSpecification">
                    <ul className="ProjectCardSpecification-list">
                        {projectSpecifications.map((spec) => (
                            <li key={spec.id} className="ProjectCardSpecification-item">
                                {spec.text}
                            </li>))}
                    </ul>
                </div>

                <div className='VisitSection'>
                    <CardYouTubeButton Ulink={Ulink} />
                    <GithubCardButton GLink={GLink}/>
                    <LiveLinkButton LiveLink={LiveLink}/>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
