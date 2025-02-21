export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tags: string[]; // New field for technologies used
}

export const projects: Project[] = [
  {
    title: "ClimateForge",
    year: 2024,
    description: "Landing page for a climate tech company",
    url: "https://www.climateforge.ai/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "CHAT470",
    year: 2023,
    description: "Capstone project — Discord clone with AI chatbot",
    url: "https://www.youtube.com/watch?v=pVIfunDXPds&ab_channel=SSUComputerScienceDepartment",
    tags: ["MERN", "WebSocket", "WebRTC", "OpenAI"],
  },
  {
    title: "NeonType",
    year: 2021,
    description: "Customizable typing speed test",
    url: "https://neon-type.netlify.app/",
    tags: ["React", "MUI", "PWA"],
  },
  {
    title: "E-commerce",
    year: 2023,
    description: "Web store built with React, Stripe and Firebase",
    url: "https://github.com/jjblek/e-commerce",
    tags: ["React", "Stripe", "Firebase"],
  },
  {
    title: "Pentago",
    year: 2022,
    description: "The classic board game, Pentago",
    url: "https://jjblek.github.io/pentago/",
    tags: ["React"],
  },
  {
    title: "Wordle Clone",
    year: 2023,
    description: "The word-guessing game, Wordle",
    url: "https://jjblek.github.io/wordle-clone/",
    tags: ["React"],
  },
  {
    title: "DFA Minimization",
    year: 2023,
    description: "An algorithm to minimize a DFA",
    url: "https://github.com/jjblek/DFA-minimization",
    tags: ["C++", "Algorithms"],
  },
  {
    title: "Social Network",
    year: 2022,
    description: "Generate a social network from a JSON file",
    url: "https://github.com/jjblek/Social-Network",
    tags: ["C++", "CMake", "JSON", "Python"],
  },
  {
    title: "Tic-Tac-Toe",
    year: 2020,
    description: "Tic-Tac-Toe written in x86-64 Assembly (NASM)",
    url: "https://github.com/jjblek/tic-tac-toe",
    tags: ["Assembly", "NASM"],
  },
];
