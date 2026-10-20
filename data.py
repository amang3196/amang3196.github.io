"""All of the site's content lives here. Edit this file to update the website;
the templates in templates/ only decide how it looks."""

NAME = "Aman Garg"
HEADLINE = "An AI Engineer & Data Scientist"
DESCRIPTION = (
    "I have 3 years of experience designing LLM systems end to end, including RAG, "
    "knowledge-graph retrieval, workflows with LLM tool-calling, and document "
    "extraction, on Azure OpenAI, Vertex AI, LangChain, LangGraph and Neo4j. I have "
    "delivered several use cases including but not limited to document extraction, "
    "text-to-Cypher analytics and explainable claims prediction, from feature "
    "engineering and retrieval design to evaluation and user-facing apps."
)

RESUME_FILE = "Aman_Garg_Resume_3Yr.pdf"   # inside static/
PROFILE_PIC = "profile-pic.png"               # inside static/
CONTACT_EMAIL = "garg.aman96@gmail.com"

SOCIAL_MEDIA = [
    {"name": "LinkedIn", "url": "https://www.linkedin.com/in/aman-garg-b2ba4a120/", "icon": "linkedin"},
    {"name": "Email", "url": f"mailto:{CONTACT_EMAIL}", "icon": "email"},
    {"name": "GitHub", "url": "https://github.com/amang3196", "icon": "github"},
]

EDUCATION = [
    {
        "degree": "MBA (Data Sciences & Data Analytics)",
        "school": "Symbiosis International University",
        "years": "2021 - 2023",
    },
    {
        "degree": "B.C.A",
        "school": "Symbiosis International University",
        "years": "2018 - 2021",
    },
]

ACHIEVEMENTS = [
    {
        "title": "Impact Award",
        "issuer": "CitiusTech",
        "date": "June 2025",
        "image": "Aman_Garg_Impact_Award.png",
        "description": (
            "Recognised for driving impactful results on the Neo4j Claims Analytics project "
            "through innovative use of LLMs and conversational analytics."
        ),
    },
    {
        "title": "Certified GenAI Expert - L2",
        "issuer": "CitiusTech",
        "date": "",
        "image": "GenAI_L2_Badge.png",
        "description": "Certified Generative AI Expert (Level 2) under the Health-Tech Specialization Track.",
    },
]

# Simple HTML (like <em>) is allowed in these lines.
FUN_FACTS = [
    "In my free time I watch documentaries. Two of such documentaries pulled me towards Data Science. Do watch \"<em>The Great Hack</em>\" and \"<em>The Social Dilemma</em>\".",
    "I often read articles on Psychology, Neuroscience, Astronomy, and Philosophy. I am fascinated by the human mind and the universe.",
    "I am a gym freak. I love to lift weights and work out. I have been going to the gym consistently for the last 4 years.",
    "Two things that working out has tauhght me are discipline and consistency. This has helped me realise that showing up is what makes the difference.",
    "On the weekend, I take that Manchester United jersey out, put it on and for 2 hours it's just me watching my favorite team play my favourite game (football).",
    "I’m naturally curious, and asking questions is how I learn and get things right.",
]

JOBS = [
    {
        "title": "Sr. AI Engineer",
        "company": "CitiusTech Healthcare Technology",
        "dates": "10/2023 - 09/2026",
        "logo": "citiustech.png",
        "points": [
            "AI Claims Denial Prediction: End-to-end system combining LLM pattern detection with Neo4j rule-based prediction; pipeline parameterized for production scale.",
            "GenAI Document Intelligence: Replaced per-payor Azure Document Intelligence models with a single LLM + RAG pipeline that required no per-payor retraining.",
            "Knowledge Graph vs Vector RAG Benchmark: Compared Vertex AI vector RAG with Neo4j KG RAG across 100+ HR policy documents; KG RAG won on multi-document questions.",
            "Conversational Analytics	Chatbot over a Neo4j knowledge graph:  natural language → Cypher → interpreted answers with auto-generated charts.",
            "Synthetic Test Case Generation: Local Llama + FAISS RAG pipeline that generates test cases directly from source code.",
            "Smart Search GenAI Enhancement: Added voice interaction, personas and guardrails to an enterprise search experience.",
        ], 
        "tools": ["GenAI", "LLM", "RAG", "Data Science", "Machine Learning", "Python", "SQL" ,"LangChain", "LangGraph", "Neo4j", "Azure", "Git", "Streamlit"],
    },
    {
        "title": "Intern - Data Science/AI",
        "company": "Aethereus Consulting",
        "dates": "05/2023 - 08/2023",
        "logo": "aethereus.png",
        "points": [
            "Built an end-to-end ML pipeline on AWS: sourced data from Salesforce CDP into S3, then trained and deployed models with Amazon SageMaker, Lambda and API Gateway.",
            "Scoped the requirements for an AI-based route optimization solution for field sales reps.",
            "Built a VR product gallery in Unity for Oculus Quest 2 to support marketing.",
        ],
        "tools": ["Python", "Amazon S3", "Amazon Sagemaker", "Amazon API Gateway", "AWS Lambda", "Unity"],
    },
    {
        "title": "Data Science Intern",
        "company": "Alpha AI",
        "dates": "04/2022 - 07/2022",
        "logo": "alphaai.png",
        "points": [
            "Built a generative AI talking-head animation pipeline combining first-order head motion and audio-video lip-sync models.",
            "Shipped it as a Dockerized Streamlit app and parallelized model inference to serve multiple users at once.",
            "Researched and evaluated pre-trained AI models against existing business problems.",
        ],
        "tools": ["Generative AI", "PyTorch", "Tensorflow", "OpenCV", "Streamlit", "Docker", "Blender", "Omniverse"],
    },
    {
        "title": "AI Intern",
        "company": "Vitesco Technologies India",
        "dates": "09/2020 - 07/2021",
        "logo": "vitesco.png",
        "points": [
            "Built a neural network to predict axle torque for a digital twin, working with domain experts to understand the business problem and bridge their knowledge with AI.",
        ],
        "tools": ["Pycharm", "Python", "Pandas", "Keras", "Numpy", "asammdf"],
    },
]
