/* ------------------------------------------------------------------
   AI Skills Development — curriculum data
   3MTT × Meta · delivered by Robotics and Artificial Intelligence Nigeria

   Built to Meta's brief. Two content sources only:
     1. AI 101 — the curriculum Startupbootcamp developed for Meta.
        Four modules, 20.5 hours. Slides hosted on Google Drive,
        one link per section. Compulsory for every participant.
     2. Meta Blueprint courses — the six named in the brief, on
        Coursera, DeepLearning.AI and DataCamp.

   Priority of this track is reach: open to the whole 3MTT community,
   no cost barrier. Anything that cannot be completed free is marked
   `paid: true` and kept out of the required path.
   ------------------------------------------------------------------ */

const PROGRAMME = {
  name: "AI Skills Development",
  cohort: "3MTT × Meta · 2026",
  start: "2026-09-01",
  end: "2026-10-31",
  accessCode: "meta3mtt2026",
  formats: [
    { id: "self", t: "Self-paced only", d: "Work through everything on your own schedule. All materials, no fixed times. Best if your week is unpredictable or data is tight." },
    { id: "live", t: "Self-paced + 2 live sessions", d: "Everything above, plus the two virtual instructor-led sessions — one on AI 101, one on machine learning. Two sessions in the whole programme, not a weekly commitment." }
  ],
  scholarship: "Top 100 performers are eligible for certifications, plus $5,000 in Meta advertising credits.",
  // Registration Google Form. The wizard opens this pre-filled from what the
  // participant typed, so RAIN receives a record of every enrolment.
  // Get the entry IDs from the form's "Get pre-filled link" option.
  registerForm: {
    url: "https://docs.google.com/forms/d/e/REPLACE-FORM-ID/viewform",
    entries: {
      name:     "entry.REPLACE1",
      email:    "entry.REPLACE2",
      phone:    "entry.REPLACE3",
      fellowId: "entry.REPLACE4",
      format:   "entry.REPLACE5"
    }
  },
  links: {
    register:           "https://docs.google.com/forms/d/e/1FAIpQLScGPMaz3mWACa7zTt0jj3GHaoNVoGEeRhHeppWWiBusDj_cTg/viewform",
    pre:                "https://docs.google.com/forms/d/e/1FAIpQLSdxNMC2dcKn_HdEzYZTCtV8_P8ZgxfpXmnVhiDWZWf95mH5Qw/viewform",
    m1pre:              "https://docs.google.com/forms/d/e/1FAIpQLSc5IRYM3RrE_DQnkKcruE4UV4raZjxUtMwTzzZ5E7Ugm7Q44Q/viewform",
    m1quiz:             "https://docs.google.com/forms/d/e/1FAIpQLScqVj9fflNkCA_9swkeInT60lQCyGSzucA3rmYSBQsznbq8hg/viewform",
    m2quiz:             "https://docs.google.com/forms/d/e/1FAIpQLScAke2a6YR3p-NEJ8zYOhfsJFUZtmcd6nbEPuF3MYWoP3mMgw/viewform",
    m3quiz:             "https://docs.google.com/forms/d/e/1FAIpQLSciFl6WdlAjS1aA-ekod07ZqjE18kgZ627yWgNsm7oV2e6NFg/viewform",
    bpquiz:             "https://docs.google.com/forms/d/e/1FAIpQLSed5HBuTbGQwfh8V-8ZjQrV7bECU7IJMaDo11gaOb143eWAsQ/viewform",
    m4quiz:             "https://docs.google.com/forms/d/e/1FAIpQLSeJbGXNPAELq_SMAOKctWfRax5PSclA0kWWHMeOg1NK6DT2iw/viewform",
    capstoneProposal:   "https://docs.google.com/forms/d/e/1FAIpQLSdnDkrdFRlqQmKih_ZSFcloCCA-G32Tv6MP1qMhOByGjzWK1A/viewform",
    capstone:           "https://docs.google.com/forms/d/e/1FAIpQLSdejZ-QyZVt6is3WfphEoWqL_xCSy9O-daD8sXEGSXBBk4YRg/viewform",
    post:               "https://docs.google.com/forms/d/e/1FAIpQLSfA0mRwDLj8e0KdiRrQWFFCZkhwg9svnCJq2GB1NefB_9RV5w/viewform",
    progress:           "https://docs.google.com/forms/d/e/1FAIpQLSeTe28LxmW6deGaZ7mnPFhrnLDbZmTPl1CLB1VHnxepq4pO7Q/viewform",
    sessions:           "https://REPLACE-virtual-session-schedule",
    support:            "https://docs.google.com/forms/d/e/1FAIpQLSemRwluO_H72aAfppFSkxHoOLbMYS-VIaZxqwU8mPhX7BThuA/viewform",
    community:          "https://chat.whatsapp.com/F5xggrrre5M6PqgNtmKiah"
  }
};

/* ---- AI 101 (Startupbootcamp for Meta). One Drive link per section. ---- */
const AI101 = [
  { m: 1, t: "AI Essentials", h: 4.5,
    aim: "Understand how AI works, what it can do, and how to use it responsibly.",
    outcome: "You can explain AI to a non-technical audience, judge when to use it, and apply basic data thinking to a real problem.",
    quiz: "m1quiz",
    sections: [
      { s: 1, t: "How AI Actually Works", h: 1,
        pts: ["Neural networks simplified", "Training data and why it matters", "Generative, predictive and analytical AI", "Meta AI tools — when to use what"],
        drive: "https://docs.google.com/presentation/d/1U9BxDItVCB_ahYdP4sbbb_DG6cg4SMlO/edit?usp=sharing" },
      { s: 2, t: "Data: The Foundation of AI", h: 0.5,
        pts: ["Data collection methods", "Data quality and cleaning basics", "From data to insights", "Understanding your audience through data", "Meta platform analytics"],
        drive: "https://docs.google.com/presentation/d/1U9BxDItVCB_ahYdP4sbbb_DG6cg4SMlO/edit?usp=sharing" },
      { s: 3, t: "AI For Your Studies & Projects", h: 1,
        pts: ["What AI excels at", "What AI struggles with", "The hallucination problem and verification", "Positive demonstrations with Meta AI"],
        drive: "https://docs.google.com/presentation/d/1U9BxDItVCB_ahYdP4sbbb_DG6cg4SMlO/edit?usp=sharing" },
      { s: 4, t: "Using AI Responsibly", h: 1.5,
        pts: ["Privacy and data security", "Bias in AI", "Academic integrity and plagiarism boundaries", "Misinformation and photorealistic content", "Environmental impact", "Impact on human agency"],
        drive: "https://docs.google.com/presentation/d/1U9BxDItVCB_ahYdP4sbbb_DG6cg4SMlO/edit?usp=sharing" },
      { s: 5, t: "Your AI Future Starts Here", h: 0.5,
        pts: ["Common misconceptions", "AI won't replace you, but someone using AI will", "Regional AI development landscape", "Positive opportunities and impact"],
        drive: "https://docs.google.com/presentation/d/1U9BxDItVCB_ahYdP4sbbb_DG6cg4SMlO/edit?usp=sharing" }
    ]},
  { m: 2, t: "Career Advantage", h: 5,
    aim: "Position yourself for the AI-powered workplace and stand out to employers.",
    outcome: "You finish with an AI-enhanced job search toolkit: optimised CV, tailored cover letters, interview prep and professional content samples.",
    quiz: "m2quiz",
    sections: [
      { s: 1, t: "The Changing Landscape of Work", h: 1.5,
        pts: ["How employers are using AI", "Industries disrupted vs enhanced", "Skills that become more valuable with AI", "Remote work and AI-enabled global opportunities"],
        drive: "https://docs.google.com/presentation/d/1nHEHkI6Z3_048n7BEeGrjihr_M6TVRq_/edit?usp=sharing" },
      { s: 2, t: "Strategic Job Search with AI", h: 1.5,
        pts: ["CV optimisation — enhancing your authentic story", "Cover letter personalisation at scale", "Interview preparation with AI role-play", "LinkedIn profile optimisation", "Smart use vs misuse"],
        drive: "https://docs.google.com/presentation/d/1nHEHkI6Z3_048n7BEeGrjihr_M6TVRq_/edit?usp=sharing" },
      { s: 3, t: "Building Your Professional Brand", h: 1,
        pts: ["Personal website and portfolio with AI tools", "Content creation for professional social media", "Thought leadership and knowledge sharing", "Networking message crafting"],
        drive: "https://docs.google.com/presentation/d/1nHEHkI6Z3_048n7BEeGrjihr_M6TVRq_/edit?usp=sharing" },
      { s: 4, t: "AI Career Pathways", h: 1,
        pts: ["Emerging roles: prompt engineers, AI trainers, AI ethicists", "AI skills in traditional roles", "Entrepreneurship in AI services", "Regional spotlight: where the opportunities are"],
        drive: "https://docs.google.com/presentation/d/1nHEHkI6Z3_048n7BEeGrjihr_M6TVRq_/edit?usp=sharing" }
    ]},
  { m: 3, t: "Create & Communicate", h: 5.5,
    aim: "Create professional content across text, images and video using AI tools.",
    outcome: "You produce a multi-channel content campaign — written, visual and video — demonstrating real prompt engineering skill.",
    quiz: "m3quiz",
    sections: [
      { s: 1, t: "Mastering AI Prompts for Any Task", h: 1.5,
        pts: ["Anatomy of effective prompts", "Context, constraints and examples", "Iteration and refinement", "Prompt libraries and templates", "Multi-turn conversations", "Meta AI across WhatsApp, Instagram, Facebook"],
        drive: "https://docs.google.com/presentation/d/11fmuiV_P5OdxUb-vv4Ul7v2u1o46HA7J/edit?usp=sharing" },
      { s: 2, t: "Written Communication", h: 1.5,
        pts: ["Academic writing assistance", "Business communication", "Social media content across platforms", "Adapting tone for different audiences", "Translation and localisation", "Exercise: a campaign for a local issue"],
        drive: "https://docs.google.com/presentation/d/11fmuiV_P5OdxUb-vv4Ul7v2u1o46HA7J/edit?usp=sharing" },
      { s: 3, t: "Creating Visual Content That Stands Out", h: 1.5,
        pts: ["AI image generation with Meta's Imagine", "Video creation and editing", "Presentation design and data visualisation", "Voice-overs and audio", "Instagram Reels", "Visual norms across regions"],
        drive: "https://docs.google.com/presentation/d/11fmuiV_P5OdxUb-vv4Ul7v2u1o46HA7J/edit?usp=sharing" },
      { s: 4, t: "Strategic Content Thinking", h: 1,
        pts: ["Content calendars and campaign planning", "A/B testing and optimisation", "Analytics and performance measurement", "Authenticity vs automation", "Accessibility in AI-generated content"],
        drive: "https://docs.google.com/presentation/d/11fmuiV_P5OdxUb-vv4Ul7v2u1o46HA7J/edit?usp=sharing" }
    ]},
  { m: 4, t: "Build the Future", h: 5.5,
    aim: "Turn ideas into reality with AI-powered innovation and no-code tools.",
    outcome: "You complete a Startup-in-a-Box: validated idea, business plan, functional prototype and go-to-market strategy.",
    quiz: "m4quiz",
    sections: [
      { s: 1, t: "Ideation & Opportunity Discovery", h: 1.5,
        pts: ["AI for market research and trend analysis", "Problem identification in local contexts", "Competitive analysis and positioning", "Brainstorming and idea refinement with AI"],
        drive: "https://docs.google.com/presentation/d/1QBL5i37Gc7i6MdLbSR_O3HVebM-cbFrh/edit?usp=sharing" },
      { s: 2, t: "Validation & Business Planning", h: 1.5,
        pts: ["Customer persona development", "Value proposition testing", "Business model canvas with AI", "Financial projections and unit economics", "Pitch deck creation", "Market testing on Meta platforms"],
        drive: "https://docs.google.com/presentation/d/1QBL5i37Gc7i6MdLbSR_O3HVebM-cbFrh/edit?usp=sharing" },
      { s: 3, t: "Building Your First Prototype with AI", h: 2,
        pts: ["AI-assisted coding with Code Llama", "Building landing pages and websites", "Chatbots for customer service", "Automating workflows with Meta Business Suite", "Practical project: build a functional MVP"],
        drive: "https://docs.google.com/presentation/d/1QBL5i37Gc7i6MdLbSR_O3HVebM-cbFrh/edit?usp=sharing" },
      { s: 4, t: "From Campus Project to Real Business", h: 0.5,
        pts: ["AI-powered marketing and customer acquisition", "Scaling considerations", "Roadmapping", "Funding landscape for AI-enabled startups"],
        drive: "https://docs.google.com/presentation/d/1QBL5i37Gc7i6MdLbSR_O3HVebM-cbFrh/edit?usp=sharing" }
    ]}
];

/* ---- Meta Blueprint courses named in the brief ---- */
const COURSES = {
  BP1: { p: "Coursera", t: "GenAI in Social Media Marketing", h: 4, lvl: "Beginner",
         url: "https://www.coursera.org/learn/genai-in-social-media-marketing",
         note: "Meta · 9 videos, 6 readings, 5 assignments" },
  BP2: { p: "Coursera", t: "GenAI in Data Analytics", h: 3, lvl: "Beginner",
         url: "https://www.coursera.org/learn/genai-in-data-analytics",
         note: "Meta · 8 videos, 4 readings, 4 assignments" },
  BP3: { p: "DeepLearning.AI", t: "Prompt Engineering with Llama 2 & 3", h: 1, lvl: "Beginner",
         url: "https://www.deeplearning.ai/courses/prompt-engineering-with-llama-2", note: "Taught by Amit Sangani, Meta" },
  BP4: { p: "DeepLearning.AI", t: "Introducing Multimodal Llama 3.2", h: 1, lvl: "Intermediate",
         url: "https://www.deeplearning.ai/courses/introducing-multimodal-llama-3-2", note: "Taught by Amit Sangani, Meta" },
  BP5: { p: "Coursera", t: "Building Generative AI Apps with Llama", h: 96, lvl: "Advanced",
         url: "https://www.coursera.org/professional-certificates/building-generative-ai-apps-llama",
         note: "Meta · Professional Certificate · 3 courses" },
  
};

const WEEKS = [
  { n: 1, from: "2026-09-01", to: "2026-09-06",
    title: "Start, and get measured",
    aim: "Register, record your baseline, and begin AI 101. Nobody moves on without a pre-assessment on record.",
    items: [
      { k: "form", t: "Join the WhatsApp cohort community for your state", link: "community", first: true },
      { k: "task", t: "Create your Coursera and DeepLearning.AI accounts using the same email you registered with." },
      { k: "task", t: "Write one sentence: the task in your work you most want AI to help with. Keep it — it becomes your capstone." },
      { k: "form", t: "Module 1 pre-course check — 10 questions, not pass or fail", link: "m1pre" },
      { k: "slide", m: 1, s: 1 },
      { k: "slide", m: 1, s: 2 }
    ]},
  { n: 2, from: "2026-09-07", to: "2026-09-13",
    title: "AI Essentials",
    aim: "Finish Module 1. What AI is good at, where it fails, and how to use it without causing harm.",
    items: [
      { k: "slide", m: 1, s: 3 },
      { k: "slide", m: 1, s: 4 },
      { k: "slide", m: 1, s: 5 },
      { k: "form", t: "Module 1 assessment — AI Essentials (20 questions)", link: "m1quiz" }
    ]},
  { n: 3, from: "2026-09-14", to: "2026-09-20",
    title: "Generative AI on Meta's platforms",
    aim: "First Blueprint courses. See how generative AI is actually applied to analytics and to reaching an audience.",
    items: [
      { k: "course", c: "BP2" },
      { k: "form", t: "Week 3 progress log", link: "progress" }
    ]},
  { n: 4, from: "2026-09-21", to: "2026-09-27",
    title: "Career Advantage",
    aim: "Module 2. Build the job search toolkit — CV, cover letters, interview prep, professional presence.",
    items: [
      { k: "slide", m: 2, s: 1 },
      { k: "slide", m: 2, s: 2 },
      { k: "slide", m: 2, s: 3 },
      { k: "slide", m: 2, s: 4 },
      { k: "form", t: "Module 2 assessment — Career Advantage (20 questions)", link: "m2quiz" }
    ]},
  { n: 5, from: "2026-09-28", to: "2026-10-04",
    title: "Reaching an audience",
    aim: "Short week — Thursday 1 October is a public holiday, and the load is set accordingly.",
    note: "Independence Day falls on Thursday 1 October.",
    items: [
      { k: "course", c: "BP1" },
      { k: "live", t: "Live session 1 of 2 — Machine Learning", link: "sessions",
        d: "The one topic the Blueprint courses do not cover, and the reason we are not relying on DataCamp. What machine learning is, how models learn, where they fail, and how to judge a result. Held mid-programme, for the whole cohort." },
      { k: "form", t: "Week 5 progress log", link: "progress" }
    ]},
  { n: 6, from: "2026-10-05", to: "2026-10-11",
    title: "Create & Communicate",
    aim: "Module 3. Prompting properly, then producing real content across text, image and video.",
    items: [
      { k: "slide", m: 3, s: 1 },
      { k: "slide", m: 3, s: 2 },
      { k: "slide", m: 3, s: 3 },
      { k: "slide", m: 3, s: 4 },
      { k: "form", t: "Module 3 assessment — Create & Communicate (20 questions)", link: "m3quiz" }
    ]},
  { n: 7, from: "2026-10-12", to: "2026-10-18",
    title: "Building on Llama",
    aim: "Meta's own engineers on Meta's own open models. Short courses, high value.",
    items: [
      { k: "course", c: "BP3" },
      { k: "course", c: "BP4" },
      { k: "form", t: "Blueprint assessment — all four courses (20 questions)", link: "bpquiz" },
      { k: "form", t: "Capstone proposal — one page", link: "capstoneProposal" }
    ]},
  { n: 8, from: "2026-10-19", to: "2026-10-25",
    title: "Build the Future",
    aim: "Module 4 and your capstone. Last taught week — no new material after Wednesday.",
    items: [
      { k: "slide", m: 4, s: 1 },
      { k: "slide", m: 4, s: 2 },
      { k: "slide", m: 4, s: 3 },
      { k: "slide", m: 4, s: 4 },
      { k: "form", t: "Module 4 assessment — Build the Future (20 questions)", link: "m4quiz" },
      { k: "live", t: "Live session 2 of 2 — AI 101 wrap-up", link: "sessions",
        d: "All four AI 101 modules pulled together, with time for questions before the capstone. Held at the end of AI 101, for the whole cohort." }
    ]},
  { n: 9, from: "2026-10-26", to: "2026-10-31",
    title: "Submit, measure, close",
    aim: "Capstones in, impact measured, top 100 confirmed. Everything closes at 23:59 on Saturday 31 October.",
    items: [
      { k: "form", t: "Capstone submission — final", link: "capstone" },
      { k: "form", t: "Post-assessment — impact measurement", link: "post" },
      { k: "task", t: "Showcase day: state-level demo sessions, Thursday 29 October." }
    ]}
];

/* Optional extension for participants who want to go further. Not required,
   not counted toward completion, and flagged where it costs money. */
const EXTENSION = [
  { c: "BP5", why: "Meta's full professional certificate on building applications with Llama — three courses, advertised as three months at eight hours a week, and pitched at developers with one to two years of Python. Far too large for the nine weeks, so it sits outside the programme as the natural next step. Audit access is free; the certificate is paid." }
];

const COMPLETION = [
  { t: "Pre-assessment on record",
    d: "Submitted on time. Without a baseline there is nothing to measure against." },
  { t: "All four AI 101 modules worked through",
    d: "Every section downloaded and completed. AI 101 is compulsory for every participant." },
  { t: "All four module assessments passed",
    d: "Pass mark 60%. Retakes stay open until the Sunday of the following week. These scores decide the top 100." },
  { t: "The required Blueprint courses completed",
    d: "Generative AI in Data Analytics, Generative AI in Social Media Marketing, and both Llama short courses." },
  { t: "Capstone submitted",
    d: "One artefact, plus 300 words on the problem, what you built, and what you would not trust it with." },
  { t: "Post-assessment on record",
    d: "Submitted by 23:59 on Saturday 31 October. The cohort closes together." }
];

const helpers = {
  sec: (m, s) => AI101.find(x => x.m === m).sections.find(y => y.s === s),
  mod: m => AI101.find(x => x.m === m)
};
