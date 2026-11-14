/**
 * All of the site's content lives here. Edit this file to update the website;
 * the components in src/components only decide how it looks.
 *
 * Images are imported (not referenced by path) so Astro can resize and convert
 * them to modern formats at build time. To add an image, put it in src/assets/
 * and import it at the top of this file.
 */
import type { ImageMetadata } from "astro";

import profilePic from "../assets/profile-pic.png";
import educationArt from "../assets/education.png";
import impactAward from "../assets/achievements/Aman_Garg_Impact_Award.png";
import genaiBadge from "../assets/achievements/GenAI_L2_Badge.png";
import citiustechLogo from "../assets/logos/citiustech.png";
import aethereusLogo from "../assets/logos/aethereus.png";
import alphaaiLogo from "../assets/logos/alphaai.png";
import vitescoLogo from "../assets/logos/vitesco.png";

// ---------------------------------------------------------------- Basics

export const NAME = "Aman Garg";
export const FIRST_NAME = "Aman";
export const HEADLINE = "AI Engineer & Data Scientist";
export const DESCRIPTION =
  "I have 3 years of experience designing LLM systems end to end, including RAG, " +
  "knowledge-graph retrieval, agentic workflows with LLM tool-calling, and document " +
  "extraction, on Azure OpenAI, Vertex AI, LangChain, LangGraph and Neo4j. I have " +
  "delivered several use cases including but not limited to document extraction, " +
  "text-to-Cypher analytics and explainable claims prediction, from feature " +
  "engineering and retrieval design to evaluation and user-facing apps.";

/** Short version used for search engines and link previews. */
export const META_DESCRIPTION =
  "Aman Garg, AI Engineer & Data Scientist. LLM systems end to end: RAG, GraphRAG, " +
  "agentic workflows and document extraction on Azure OpenAI, Vertex AI and Neo4j.";

/** File inside public/. */
export const RESUME_FILE = "Aman_Garg_Resume_Latest.pdf";
export const PROFILE_PIC = profilePic;
export const EDUCATION_ART = educationArt;
export const CONTACT_EMAIL = "garg.aman96@gmail.com";

export type SocialIcon = "linkedin" | "github" | "email";

export const SOCIAL_MEDIA: { name: string; url: string; icon: SocialIcon }[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aman-garg-b2ba4a120/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/amang3196", icon: "github" },
  { name: "Email", url: `mailto:${CONTACT_EMAIL}`, icon: "email" },
];

// ---------------------------------------------------------------- Hero stats
// The number tiles under the intro. Keep `value` short (it is shown large).

export const STATS: { value: string; label: string }[] = [
  { value: "3+", label: "years building production AI" },
  { value: "6", label: "GenAI systems delivered at CitiusTech" },
  { value: "4", label: "roles across AI & data science" },
  { value: "2025", label: "CitiusTech Impact Award" },
];

// ---------------------------------------------------------------- Achievements

export const ACHIEVEMENTS: {
  title: string;
  issuer: string;
  date?: string;
  image: ImageMetadata;
  description: string;
}[] = [
  {
    title: "Impact Award",
    issuer: "CitiusTech",
    date: "June 2025",
    image: impactAward,
    description:
      "Recognised for driving impactful results on the Neo4j Claims Analytics project " +
      "through innovative use of LLMs and conversational analytics.",
  },
  {
    title: "Certified GenAI Expert - L2",
    issuer: "CitiusTech",
    image: genaiBadge,
    description:
      "Certified Generative AI Expert (Level 2) under the Health-Tech Specialization Track.",
  },
];

// ---------------------------------------------------------------- Experience
// `title` on a point is optional; when present it is shown in bold.

export const JOBS: {
  title: string;
  company: string;
  dates: string;
  logo: ImageMetadata;
  points: { title?: string; text: string }[];
  tools: string[];
}[] = [
  {
    title: "Sr. AI Engineer",
    company: "CitiusTech Healthcare Technology",
    dates: "Oct 2023 – Sep 2026",
    logo: citiustechLogo,
    points: [
      {
        title: "AI Claims Denial Prediction",
        text: "End-to-end system combining LLM pattern detection with Neo4j rule-based prediction; pipeline parameterized for production scale.",
      },
      {
        title: "GenAI Document Intelligence",
        text: "Replaced per-payor Azure Document Intelligence models with a single LLM + RAG pipeline that required no per-payor retraining.",
      },
      {
        title: "Knowledge Graph vs Vector RAG Benchmark",
        text: "Compared Vertex AI vector RAG with Neo4j KG RAG across 100+ HR policy documents; KG RAG won on multi-document questions.",
      },
      {
        title: "Conversational Analytics",
        text: "Chatbot over a Neo4j knowledge graph: natural language → Cypher → interpreted answers with auto-generated charts.",
      },
      {
        title: "Synthetic Test Case Generation",
        text: "Architected a RAG pipeline that generates test cases directly from source code using a Local LLM(Ollama).",
      },
      {
        title: "Smart Search GenAI Enhancement",
        text: "Added voice interaction, personas and guardrails(using nemo guardrails) to an enterprise search experience.",
      },
    ],
    tools: [
      "LLMs", "Generative AI", "RAG", "GraphRAG", "Agentic AI", "Prompt Engineering",
      "Natural Language Processing (NLP)", "RAGAS", "LangChain", "LangGraph", "Azure",
      "LlamaIndex", "FAISS", "ChromaDB", "Pinecone", "Machine Learning", "Deep Learning", "Exploratory Data Analysis", "Feature Engineering", "Predictive Modeling", "Python", "SQL", "Neo4j", "Pandas", "Streamlit", "Git", "FastAPI", "Azure OpenAI", "Azure AI Foundry", "Azure ML Studio", "Google Vertex AI",
    ],
  },
  {
    title: "Intern - Data Science/AI",
    company: "Aethereus Consulting",
    dates: "May 2023 – Aug 2023",
    logo: aethereusLogo,
    points: [
      { text: "Built an end-to-end ML pipeline on AWS: sourced data from Salesforce CDP into S3, then trained and deployed models with Amazon SageMaker, Lambda and API Gateway." },
      { text: "Scoped the requirements for an AI-based route optimization solution for field sales reps." },
      { text: "Built a VR product gallery in Unity for Oculus Quest 2 to support marketing." },
    ],
    tools: ["Python", "Amazon S3", "Amazon SageMaker", "Amazon API Gateway", "AWS Lambda", "Unity"],
  },
  {
    title: "Data Science Intern",
    company: "Alpha AI",
    dates: "Apr 2022 – Jul 2022",
    logo: alphaaiLogo,
    points: [
      { text: "Built a generative AI talking-head animation pipeline combining first-order head motion and audio-video lip-sync models." },
      { text: "Shipped it as a Dockerized Streamlit app and parallelized model inference to serve multiple users at once." },
      { text: "Researched and evaluated pre-trained AI models against existing business problems." },
    ],
    tools: ["Generative AI", "PyTorch", "TensorFlow", "OpenCV", "Streamlit", "Docker", "Blender", "Omniverse"],
  },
  {
    title: "AI Intern",
    company: "Vitesco Technologies India",
    dates: "Sep 2020 – Jul 2021",
    logo: vitescoLogo,
    points: [
      { text: "Built a neural network to predict axle torque for a digital twin, working with domain experts to understand the business problem and bridge their knowledge with AI." },
    ],
    tools: ["PyCharm", "Python", "Pandas", "Keras", "NumPy", "asammdf"],
  },
];

/** How many tool tags to show per job before the "+N more" button. */
export const TOOLS_PREVIEW_COUNT = 10;

// ---------------------------------------------------------------- Education

export const EDUCATION: { degree: string; school: string; years: string }[] = [
  {
    degree: "MBA (Data Sciences & Data Analytics)",
    school: "Symbiosis International University",
    years: "2021 – 2023",
  },
  {
    degree: "B.C.A",
    school: "Symbiosis International University",
    years: "2018 – 2021",
  },
];

// ---------------------------------------------------------------- Outside of work
// `text` may contain simple HTML such as <em>.

export const FUN_FACTS: { emoji: string; title: string; text: string }[] = [
  {
    emoji: "🎬",
    title: "Documentaries",
    text: "In my free time I watch documentaries. Two of such documentaries pulled me towards Data Science. Do watch \"<em>The Great Hack</em>\" and \"<em>The Social Dilemma</em>\".",
  },
  {
    emoji: "🧠",
    title: "Curious reader",
    text: "I often read articles on Psychology, Neuroscience, Astronomy, and Philosophy. I am fascinated by the human mind and the universe.",
  },
  {
    emoji: "🏋️",
    title: "Gym freak",
    text: "I am a gym freak. I love to lift weights and work out. I have been going to the gym consistently for the last 4 years.",
  },
  {
    emoji: "🔁",
    title: "Showing up",
    text: "Two things that working out has taught me are discipline and consistency. This has helped me realise that showing up is what makes the difference.",
  },
  {
    emoji: "⚽",
    title: "Match day",
    text: "On the weekend, I take that Manchester United jersey out, put it on and for 2 hours it's just me watching my favorite team play my favourite game (football).",
  },
  {
    emoji: "❓",
    title: "Always asking",
    text: "I’m naturally curious, and asking questions is how I learn and get things right.",
  },
];
