import React from 'react'
import "./ProjectSection.css"
import ProjectCard from './ProjectCard'


//image
import ReactIcon from "../assets/reactIcon.png"
import nodejs from "../assets/nodejs.png"
import express from "../assets/express.png"
import redis from "../assets/redis.png"
import kubernet from "../assets/kubernet.png"
import mongodb from "../assets/mongodb.png"
import sql from "../assets/sql.png"

// ProjectBigPic
import githPic from "../../src/assets/githubPicExample.jpg"

const ProjectSection = () => {

// For card 1 detail-----------------------------------------------------------
  const technologies1 = [
    { name: "React.js", iconImg: ReactIcon },
    { name: "MongoDB", iconImg: mongodb },
    { name: "Kubernetes", iconImg: kubernet },
    { name: "Express", iconImg: express },
    { name: "Node.js", iconImg: nodejs },
    { name: "Redis", iconImg: redis },
    { name: "SQL", iconImg: sql },

  ];
  const projectSpecifications1 = [
    { id: 1, text: "Realtime chats and notifications between users." },
    { id: 2, text: "Deposit and Withdrawal from banks, secured through email OTP." },
    { id: 3, text: "Metrics dashboard for users and merchants." },
  ];


  // For 2card details-------------------------------------------------->
  
  return (
    <div className='ProjectSection'>
        <p>Projects</p>
        <div className='ProjectSectionContainer'>
            <ProjectCard  githPic={githPic} projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI" LiveLink="#"  technologies={technologies1} prjoectName="Zappier Webhook " projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/>
            <ProjectCard  githPic={githPic} projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI" LiveLink="#" technologies={technologies1}  prjoectName="Paytm Wallet" projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/> 
            <ProjectCard  githPic={githPic} projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI" LiveLink="#" technologies={technologies1}  prjoectName="StockMarket" projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/>
            <ProjectCard  githPic={githPic} projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI/mediumFullWithCloudflare" LiveLink="https://medium-p.vercel.app/" technologies={technologies1}  prjoectName="Medium BlogPost" projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/>
            <ProjectCard githPic={githPic}  projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI" LiveLink="#" technologies={technologies1}  prjoectName="Ecommerce " projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/>
            <ProjectCard  githPic={githPic} projectSpecifications={projectSpecifications1} Ulink="https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn" GLink="https://github.com/JIPANALI" LiveLink="#" technologies={technologies1}  prjoectName="VideoAudio Chat" projectDesc="Zapier is a web automation tool that allows users to connect different web applications and automate tasks between them."/>
        </div>
    </div>
  )
}

export default ProjectSection