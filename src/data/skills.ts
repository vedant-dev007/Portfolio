export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Cloud"
  | "AI";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "React", level: 92, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 93, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 86, category: "Backend" },
  { name: "Express", level: 84, category: "Backend" },
  { name: "NestJS", level: 72, category: "Backend" },
  { name: "Django", level: 70, category: "Backend" },
  { name: "Laravel", level: 68, category: "Backend" },
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "Flutter", level: 94, category: "Mobile" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "Firebase", level: 93, category: "Database" },
  { name: "Supabase", level: 78, category: "Database" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 78, category: "Cloud" },
  { name: "Vercel", level: 88, category: "Cloud" },
  { name: "DigitalOcean", level: 74, category: "Cloud" },
  { name: "OpenAI", level: 86, category: "AI" },
  { name: "Claude API", level: 82, category: "AI" },
  { name: "LangChain", level: 80, category: "AI" },
  { name: "AI Agents", level: 84, category: "AI" },
  { name: "Automation", level: 88, category: "AI" },
  { name: "RAG", level: 78, category: "AI" },
  { name: "MCP", level: 76, category: "AI" },
  { name: "Vector Databases", level: 74, category: "AI" },
];

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Cloud",
  "AI",
];
