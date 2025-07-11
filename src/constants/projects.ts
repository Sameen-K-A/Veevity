import { IProjects } from "@/types/general";

export const projects: IProjects[] = [
  {
    name: 'Talk To Pro',
    sub_heading: "A digital platform to connect with mentors.",
    description: "Talk To Pro bridges the gap between students and industry professionals. Whether you're fresh out of college or at a career crossroads, you can connect directly with verified mentors from IT, medicine, engineering, and more. Get personalized guidance to navigate your career path with confidence and avoid the common pitfalls of post-graduation confusion.",
    tag: ["React", "Typescript", "NodeJS", "JWT", "Tailwind"],
    image: "/projectsImg/talktopro.png",
    url: "https://www.talktopro.in",
  },
  {
    name: 'Veevity',
    sub_heading: "Our company portfolio.",
    description: "Veevity builds custom digital solutions, including SaaS platforms, web/mobile apps, AI chatbots, and MVPs. We also develop our own products, giving us a deep understanding of the challenges founders face.",
    tag: ["NextJS", "Typescript", "Chatbot", "Tailwind"],
    image: "/projectsImg/veevity.png",
    url: "https://veevity.vercel.app",
  }
];