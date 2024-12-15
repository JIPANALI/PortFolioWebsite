import React from "react";
import "./SkillSection.css";
import SkillCard1 from "./SkillCard1";

// Import icons
import ReactIcon from "../assets/reactLogo.png";
import nextjs from "../assets/nextJs.png";
import nAuth2 from "../assets/nAuth2.png";
import tail from "../assets/tail.png";
import css from "../assets/css.png";
import mat from "../assets/mat.jpg";
import ant from "../assets/ant.png";
import boots from "../assets/boots.png";
import recoil from "../assets/recoil.png";
import reactFlow from "../assets/reactFlow.png";
import JWT from "../assets/jwt.png";
import Chook from "../assets/Chook.png";

// 
import express from "../assets/express.png"
import nodejs from "../assets/nodejs.png"
import hono from "../assets/hono.png"
import postgres from "../assets/postgres.png"
import mongo from "../assets/mongo.png"
import redis from "../assets/redis.png"
import kafka from "../assets/kafka.png"
import turbo from "../assets/turbo.png"
import ws from "../assets/ws.jpg"
import grpc from "../assets/grpc.png"
import alert from "../assets/alert.png"
// 
import docker from "../assets/docker.png"
import kubernet from "../assets/kubernet.png"
import helm from "../assets/helm.png"
import argocd from "../assets/argocd.png"
import cicd from "../assets/cicd.png"
import git from "../assets/git.png"
import s3 from "../assets/s3.png"
import EC2 from "../assets/EC2.png"
import nginx from "../assets/nginx.png"
import vh from "../assets/vh.png"
import vultr from "../assets/vultr.jpg"

// 
import webRtc from "../assets/webRtc.png"
import vitest from "../assets/vitest.png"
import newralic from "../assets/newralic.svg"
import prometheus from "../assets/prometheus.png"
import gafana from "../assets/gafana.png"
import clouldflare from "../assets/clouldflare.png"
import py from "../assets/py.png"
import Cp from "../assets/Cp.png"
import typescript from "../assets/typescript.png"
import noti from "../assets/noti.png"
import zod from "../assets/zod.png"
import openSpec from "../assets/openSpec.png"
import js from "../assets/js.png"

const SkillSection = () => {
  const cardData = {
    name: "Frontend",
    items: [
      { title: "React.js", icon: ReactIcon },
      { title: "Next.js", icon: nextjs },
      { title: "NextAuth", icon: nAuth2 },
      { title: "Tailwind", icon: tail },
      { title: "CSS", icon: css },
      { title: "Material UI", icon: mat },
      { title: "Ant Design", icon: ant },
      { title: "Bootstrap", icon: boots },
      { title: "Recoil", icon: recoil },
      { title: "React Flow", icon: reactFlow },
      { title: "Custom Hooks", icon: Chook },
      { title: "JWT", icon: JWT },
    ],
  };

  const cardData2 = {
    name: "Backend",
    items: [
      { title: "Express.js", icon: express },
      { title: "Node.js", icon: nodejs },
      { title: "Hono with Cloudflare", icon: hono },
      { title: "PostgreSQL with Prisma ORM", icon: postgres },
      { title: "MongoDB", icon: mongo },
      { title: "Redis with PubSub and Queue", icon: redis },
      { title: "Kafka", icon: kafka },
      { title: "Monorepo with TurboRepo", icon: turbo },
      { title: "WebSocket", icon: ws },
      { title: "GRPC", icon: grpc },
      { title: "WebRTC", icon: webRtc },
      { title: "Rate Limiting", icon: alert },
    ],
  };

  const cardData3 = {
    name: "DevOps",
    items: [
      { title: "Docker", icon: docker },
      { title: "Kubernetes", icon: kubernet },
      { title: "Helm", icon: helm },
      { title: "Argo CD", icon: argocd },
      { title: "CI/CD Pipeline", icon: cicd },
      { title: "Git", icon: git },
      { title: "GitHub Actions", icon: ReactIcon },
      { title: "AWS S3", icon: s3 },
      { title: "EC2 and CDN", icon: EC2 },
      { title: "Nginx", icon: nginx },
      { title: "Horizontal/Vertical Scaling", icon: vh },
      { title: "Deployment with Vultr", icon: vultr },
    ],
  };

  const cardData4 = {
    name: "Languges & Other Skills",
    items: [
      
      { title: "Testing with Zod", icon: zod },
      { title: "Testing with Vitest", icon: vitest },
      { title: "Monitoring with Newralic", icon: newralic },
      { title: "Monitoring with Prometheus", icon: prometheus },
      { title: "Monitoring with Grafana", icon: gafana },
      { title: "TypeScript", icon: typescript },
      { title: "C Programming", icon: Cp },
      { title: "JavaScript", icon: js },
      { title: "Python", icon: py },
      { title: "Cloudflare Workers", icon: clouldflare },
      { title: "Real-time Notifications", icon: noti },
      { title: "OpenSpec API", icon: openSpec },
     
      
    ],
  };

  return (
    <div className="SkillSection">
      <div className="SkillSectionContainer">
        <h1>Skills</h1>
        <div className="SkillSectionContainerContent">
          <SkillCard1 name={cardData.name} items={cardData.items} />
          <SkillCard1 name={cardData2.name} items={cardData2.items} />
          <SkillCard1 name={cardData3.name} items={cardData3.items} />
          <SkillCard1 name={cardData4.name} items={cardData4.items} />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
