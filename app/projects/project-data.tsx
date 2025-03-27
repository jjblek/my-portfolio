export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tags: string[]; // New field for technologies used
  hiddenTags?: string[];
}

export const projects: Project[] = [
  {
    title: "DFA Flow",
    year: 2024,
    description: "Interactive DFA Visualizer/Editor/Minimizer",
    url: "https://dfa-flow.vercel.app/",
    tags: ["Next.js", "Tailwind", "Python", "AWS Lambda", "Docker", "CI/CD", "JSON"],
    hiddenTags: ["TypeScript", "Git"]
  },
  {
    title: "ClimateForge",
    year: 2024,
    description: "Landing page for ClimateForge.ai",
    url: "https://www.climateforge.ai/",
    tags: ["Next.js", "Tailwind"],
    hiddenTags: ["TypeScript", "Git"]
  },
  {
    title: "CHAT470",
    year: 2023,
    description: "Capstone project — Discord clone with AI chatbot",
    url: "https://www.youtube.com/watch?v=pVIfunDXPds&ab_channel=SSUComputerScienceDepartment",
    tags: ["React", "MUI", "Node.js", "MongoDB", "WebSocket", "WebRTC", "PWA"],
    hiddenTags: ["Git"]
  },
  {
    title: "NeonType",
    year: 2021,
    description: "Customizable typing speed test",
    url: "https://neon-type.netlify.app/",
    tags: ["React", "MUI", "PWA"],
    hiddenTags: ["Git"]
  },
  {
    title: "Wordle Clone",
    year: 2023,
    description: "The word-guessing game, Wordle",
    url: "https://jjblek.github.io/wordle-clone/",
    tags: ["React", "MUI"],
    hiddenTags: ["Git"]
  },
  {
    title: "Pentago",
    year: 2022,
    description: "The classic board game, Pentago",
    url: "https://jjblek.github.io/pentago/",
    tags: ["React", "MUI"],
    hiddenTags: ["Git"]
  },
  {
    title: "E-commerce",
    year: 2021,
    description: "Web store built with React, Stripe and Firebase",
    url: "https://github.com/jjblek/e-commerce",
    tags: ["React", "MUI", "Stripe", "Firebase"],
    hiddenTags: ["Git"]
  },
  {
    title: "DFA Minimization",
    year: 2023,
    description: "An algorithm to minimize a DFA",
    url: "https://github.com/jjblek/DFA-minimization",
    tags: ["C++", "CMake"],
    hiddenTags: ["Git"]
  },
  {
    title: "Social Network",
    year: 2022,
    description: "Generate a social network from a JSON file",
    url: "https://github.com/jjblek/Social-Network",
    tags: ["C++", "CMake", "JSON", "Python"],
    hiddenTags: ["Git"]
  },
  {
    title: "Tic-Tac-Toe",
    year: 2020,
    description: "Tic-Tac-Toe written in x86-64 Assembly (NASM)",
    url: "https://github.com/jjblek/tic-tac-toe",
    tags: ["Assembly", "NASM"],
    hiddenTags: ["Git"]
  },
];
