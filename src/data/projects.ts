export type ProjectCategory =
  | "All"
  | "Mobile"
  | "AI"
  | "Web"
  | "Internship";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: Exclude<ProjectCategory, "All">;
  tags: string[];
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "pump-connect",
    title: "Pump Connect",
    subtitle: "Bluetooth insulin pump companion",
    description:
      "A university project mobile app to control and monitor an insulin pump remotely with secure pairing and real-time data exchange.",
    longDescription:
      "Pump Connect was built as a Bluetooth-enabled companion for remote insulin pump monitoring. The focus was safety-first UX: secure device pairing, reliable real-time data sync, and a responsive interface that keeps dose management clear and calm under pressure.",
    category: "Mobile",
    tags: ["Flutter", "Bluetooth", "Real-time", "Healthcare UI"],
    year: "2024",
    role: "Mobile Developer",
    highlights: [
      "Secure Bluetooth device pairing flow",
      "Real-time pump status and dose visibility",
      "Safety-focused responsive mobile UI",
    ],
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
  },
  {
    slug: "image-recognition-chatbot",
    title: "Image Recognition Chatbot",
    subtitle: "Conversational product intelligence",
    description:
      "AI chatbot using the Qwen model to identify Indian commercial products from images and answer composition-related queries.",
    longDescription:
      "This conversational image recognition system extracts product names from photos, retrieves official company data, and generates grounded responses. It combines AI vision, web scraping, and NLP into an interactive assistant tailored for products available in India.",
    category: "AI",
    tags: ["Qwen", "Computer Vision", "NLP", "Scraping"],
    year: "2025",
    role: "AI Engineer",
    highlights: [
      "Image-based product identification",
      "Company data enrichment pipeline",
      "Composition-aware conversational answers",
    ],
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    slug: "ibit",
    title: "iBit Application",
    subtitle: "Geological sample analysis",
    description:
      "Cross-platform Flutter + Firebase app for sediment sample analysis with image processing and secure cloud storage.",
    longDescription:
      "iBit supports geological research by analyzing sediment samples through image processing — extracting size, shape, and color parameters. Built with Flutter and Firebase for authentication, cloud storage, feedback loops, and reliable error handling.",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "Image Processing", "Auth"],
    year: "2024",
    role: "Full Stack Mobile Developer",
    highlights: [
      "Image parameter extraction pipeline",
      "Secure Firebase auth & storage",
      "Research-ready feedback workflows",
    ],
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
  },
  {
    slug: "transpo",
    title: "Transpo",
    subtitle: "Real-time transportation info",
    description:
      "Transportation companion app for live route and schedule tracking to improve daily commute planning.",
    longDescription:
      "Transpo delivers real-time transportation information with route tracking and schedule visibility. The product prioritizes accessibility and convenience so users can plan journeys with clearer, faster information.",
    category: "Mobile",
    tags: ["Flutter", "Maps", "Real-time", "UX"],
    year: "2023",
    role: "App Developer",
    highlights: [
      "Route and schedule tracking",
      "Accessible information architecture",
      "Improved day-to-day trip planning",
    ],
    gradient: "from-blue-500/30 via-indigo-500/10 to-transparent",
  },
  {
    slug: "alembic-csr-fep",
    title: "Alembic CSR FEP",
    subtitle: "Agriculture assistance platform",
    description:
      "Cross-platform Flutter app for farmer assistance with role-based auth, admin commerce tools, and ration-card data retrieval.",
    longDescription:
      "Built during an internship at Alembic CSR Foundation, this platform streamlines agriculture assistance. It includes Firebase role-based authentication, an admin panel for products/orders/sales, and a farmer information system with ration card-based retrieval.",
    category: "Internship",
    tags: ["Flutter", "Firebase", "Admin Panel", "RBAC"],
    year: "2025",
    role: "Flutter Developer Intern",
    highlights: [
      "Role-based Firebase authentication",
      "Admin commerce & agriculture data tools",
      "Farmer info via ration card lookup",
    ],
    gradient: "from-lime-500/25 via-green-500/10 to-transparent",
  },
  {
    slug: "apmc-marketplace",
    title: "APMC Marketplace App",
    subtitle: "Cross-platform commerce platform",
    description:
      "Flutter marketplace inspired by APMC Gondal with splash flows, RBAC, and admin tools for orders, products, and shops.",
    longDescription:
      "Developed at Seaneb Technologies as a cross-platform web and Android application similar to APMC Gondal. Delivered splash onboarding, role-based auth, list-driven browsing, and admin capabilities for orders, products, sales, and shop management.",
    category: "Internship",
    tags: ["Flutter", "Web", "Admin", "Marketplace"],
    year: "2026",
    role: "Full Stack Developer Intern",
    highlights: [
      "Cross-platform web + Android delivery",
      "Role-based secure authentication",
      "Admin order/product/sales management",
    ],
    gradient: "from-fuchsia-500/20 via-rose-500/10 to-transparent",
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "Mobile",
  "AI",
  "Web",
  "Internship",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
