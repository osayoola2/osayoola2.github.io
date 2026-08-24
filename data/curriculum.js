/* ------------------------------------------------------------------
   Practical AI Fellowship — curriculum data
   3MTT × Meta · delivered by Robotics and Artificial Intelligence Nigeria

   ACCESS RULE FOR THIS PROGRAMME
   Every course below is free to access with a free account, and every
   course below is Meta's own material.
     · Coursera (Meta)  — audit mode: all video and reading content,
                          free, no payment, no certificate.
     · DeepLearning.AI  — Meta-built short courses, taught by Meta's
                          own partner engineering team, free to watch.
   Nothing here requires a subscription, a licence or a card.
   DataCamp was reviewed and removed entirely: a free DataCamp account
   unlocks only the first lesson of any course, so no DataCamp course
   can be completed by a fellow at no cost.
   ------------------------------------------------------------------ */

const PROGRAMME = {
  name: "Practical AI Fellowship",
  cohort: "3MTT × Meta · 2026",
  start: "2026-09-01",
  end: "2026-10-31",
  // Replace with real Google Form URLs before launch.
  accessCode: "meta3mtt2026",
  links: {
    register:  "https://forms.gle/REPLACE-registration",
    pre:       "https://forms.gle/REPLACE-pre-assessment",
    check1:    "https://forms.gle/REPLACE-checkpoint-1",
    check2:    "https://forms.gle/REPLACE-checkpoint-2",
    check3:    "https://forms.gle/REPLACE-checkpoint-3",
    capstone:  "https://forms.gle/REPLACE-capstone-submission",
    post:      "https://forms.gle/REPLACE-post-assessment",
    progress:  "https://forms.gle/REPLACE-weekly-progress-log",
    support:   "https://forms.gle/REPLACE-support-request",
    community: "https://chat.whatsapp.com/REPLACE"
  }
};

const TRACKS = {
  A: {
    id: "A", label: "Track A", name: "AI for Business & Decisions", tag: "No coding",
    blurb: "Use data and AI to make better decisions at work or in a business. Statistics, spreadsheets, SQL and marketing analytics, without writing a line of code.",
    who: "Product, marketing, operations, admin, teaching, agriculture, health, trade. Anyone whose work is decisions rather than code.",
    placement: "Baseline under 40%, or any score with no Python experience.",
    capstone: "A decision brief on a real problem, backed by your own data and a clear analysis."
  },
  B: {
    id: "B", label: "Track B", name: "Applied AI with Python", tag: "Most fellows",
    blurb: "Learn to work with data properly. Python from the beginning, then real analysis on messy data you bring yourself.",
    who: "Fellows with some technical grounding who want to build, and fellows already on 3MTT data or software tracks.",
    placement: "Baseline 40% or above, or a stated intent to code.",
    capstone: "A working analysis in a notebook, on your own dataset, with your reasoning written out."
  },
  C: {
    id: "C", label: "Track C", name: "Building with Llama", tag: "Advanced",
    blurb: "Build applications on Meta's open models. Prompting, multimodal Llama, Llama 4, and shipping something people can actually message.",
    who: "Fellows already comfortable in Python who can write a function and read an API response.",
    placement: "Baseline above 70% and a pass on the Python screen.",
    capstone: "A working application built on Llama that another person can use end to end."
  }
};

/* Course catalogue. Every entry is free-access and Meta-authored. */
const COURSES = {
  CR01: { p: "Coursera", t: "Introduction to Data Management", h: 8, lvl: "Beginner",
          url: "https://www.coursera.org/learn/introduction-to-data-management", note: "4 modules" },
  CR02: { p: "Coursera", t: "GenAI in Data Analytics", h: 4, lvl: "Beginner",
          url: "https://www.coursera.org/learn/genai-in-data-analytics", note: "1 module" },
  CR03: { p: "Coursera", t: "Statistics Foundations", h: 10, lvl: "Beginner",
          url: "https://www.coursera.org/learn/statistics-for-marketing", note: "5 modules" },
  CR04: { p: "Coursera", t: "Data Analysis with Spreadsheets and SQL", h: 12, lvl: "Beginner",
          url: "https://www.coursera.org/learn/data-analysis-with-spreadsheets-and-sql", note: "5 modules" },
  CR05: { p: "Coursera", t: "Data Analytics Methods for Marketing", h: 8, lvl: "Beginner",
          url: "https://www.coursera.org/learn/data-analytics-methods-for-marketing", note: "4 modules" },
  CR06: { p: "Coursera", t: "Programming in Python", h: 12, lvl: "Beginner",
          url: "https://www.coursera.org/learn/programming-in-python", note: "Modules 1–3" },
  CR07: { p: "Coursera", t: "Python Data Analytics", h: 10, lvl: "Beginner",
          url: "https://www.coursera.org/learn/python-data-analytics", note: "5 modules" },
  CR08: { p: "Coursera", t: "WhatsApp Business Platform for Developers", h: 10, lvl: "Intermediate",
          url: "https://www.coursera.org/learn/whatsapp-business-platform-for-developers", note: "4 modules" },

  DL01: { p: "DeepLearning.AI", t: "Prompt Engineering with Llama 2 & 3", h: 1, lvl: "Beginner",
          url: "https://www.deeplearning.ai/courses/prompt-engineering-with-llama-2", note: "Taught by Amit Sangani, Meta" },
  DL02: { p: "DeepLearning.AI", t: "Introducing Multimodal Llama 3.2", h: 1, lvl: "Intermediate",
          url: "https://www.deeplearning.ai/courses/introducing-multimodal-llama-3-2", note: "Taught by Amit Sangani, Meta" },
  DL03: { p: "DeepLearning.AI", t: "Building with Llama 4", h: 2, lvl: "Intermediate",
          url: "https://www.deeplearning.ai/courses/building-with-llama-4", note: "Taught by Amit Sangani, Meta" }
};

const WEEKS = [
  { n: 1, from: "2026-09-01", to: "2026-09-06", phase: "core",
    title: "Start, and get measured",
    aim: "Accounts open, baseline recorded, track assigned. Nobody moves to Week 2 without a pre-assessment on record.",
    plans: { core: { tasksFirst: true, courses: ["DL01"], tasks: [
      { kind: "form", label: "Pre-assessment — take this before anything else. It sets your track and records your starting point.", link: "pre" },
      { kind: "form", label: "Register and open your free Coursera and DeepLearning.AI accounts", link: "register" },
      { kind: "form", label: "Join the WhatsApp cohort community for your state", link: "community" },
      { kind: "task", label: "Write one sentence: the task in your work you most want AI to help with. Keep it, it becomes your capstone." }
    ] } } },

  { n: 2, from: "2026-09-07", to: "2026-09-13", phase: "core",
    title: "What generative AI is actually doing",
    aim: "Separate what these systems can do from what they are sold as, and start using them on real work.",
    plans: { core: { courses: ["CR02"], tasks: [
      { kind: "form", label: "Week 2 progress log", link: "progress" },
      { kind: "task", label: "Share one output you produced with AI for real work, and one place it got something wrong." }
    ] } } },

  { n: 3, from: "2026-09-14", to: "2026-09-20", phase: "core",
    title: "Data is the thing underneath",
    aim: "Every AI result is only as good as what fed it. Learn to treat data as an asset with rules attached.",
    plans: { core: { courses: ["CR01"], tasks: [
      { kind: "form", label: "Checkpoint 1 — core knowledge check", link: "check1" },
      { kind: "task", label: "Confirm your track. You may move one level either way before Friday." }
    ] } } },

  { n: 4, from: "2026-09-21", to: "2026-09-27", phase: "split",
    title: "Tracks open",
    aim: "First week on your own path. Expect this to be the sharpest gear change of the programme.",
    plans: {
      A: { courses: ["CR03"], parts: { CR03: ["Modules 1–3", 6] }, tasks: [
        { kind: "form", label: "Week 4 progress log", link: "progress" },
        { kind: "task", label: "Bring one real dataset from your work or community: a register, a price list, a customer log." } ] },
      B: { courses: ["CR06"], tasks: [
        { kind: "form", label: "Week 4 progress log", link: "progress" },
        { kind: "task", label: "Get Google Colab open and run one notebook end to end." } ] },
      C: { courses: ["CR06"], tasks: [
        { kind: "form", label: "Week 4 progress log", link: "progress" },
        { kind: "task", label: "Choose what you will build. Track C works on the same idea from here to the end." } ] } } },

  { n: 5, from: "2026-09-28", to: "2026-10-04", phase: "split",
    title: "Building the working parts",
    aim: "Short week. Thursday 1 October is a public holiday and the load is set accordingly.",
    note: "Independence Day falls on Thursday 1 October.",
    plans: {
      A: { courses: ["CR03"], parts: { CR03: ["Modules 4–5", 4] }, tasks: [{ kind: "form", label: "Week 5 progress log", link: "progress" }] },
      B: { courses: ["CR07"], parts: { CR07: ["Modules 1–3", 6] }, tasks: [{ kind: "form", label: "Week 5 progress log", link: "progress" }] },
      C: { courses: ["DL02", "DL03"], tasks: [{ kind: "form", label: "Week 5 progress log", link: "progress" }] } } },

  { n: 6, from: "2026-10-05", to: "2026-10-11", phase: "split",
    title: "Real, messy data",
    aim: "Everything so far used clean examples. This week it stops being clean.",
    plans: {
      A: { courses: ["CR04"], parts: { CR04: ["Modules 1–3", 7] }, tasks: [{ kind: "form", label: "Checkpoint 2 — track skills check", link: "check2" }] },
      B: { courses: ["CR07"], parts: { CR07: ["Modules 4–5", 4] }, tasks: [{ kind: "form", label: "Checkpoint 2 — track skills check", link: "check2" }] },
      C: { courses: ["CR08"], parts: { CR08: ["Modules 1–2", 5] }, tasks: [{ kind: "form", label: "Checkpoint 2 — track skills check", link: "check2" }] } } },

  { n: 7, from: "2026-10-12", to: "2026-10-18", phase: "split",
    title: "Judgement, not just output",
    aim: "Learn to tell a good result from a convincing one. This is the week that separates users of AI from practitioners.",
    plans: {
      A: { courses: ["CR04"], parts: { CR04: ["Modules 4–5", 5] }, tasks: [{ kind: "form", label: "Capstone proposal — one page", link: "capstone" }] },
      B: { courses: ["CR03"], tasks: [{ kind: "form", label: "Capstone proposal — one page", link: "capstone" }] },
      C: { courses: ["CR08"], parts: { CR08: ["Modules 3–4", 5] }, tasks: [{ kind: "form", label: "Capstone proposal — one page", link: "capstone" }] } } },

  { n: 8, from: "2026-10-19", to: "2026-10-25", phase: "split",
    title: "Build it",
    aim: "Last taught week. Finish what is outstanding and build your capstone. No new material after Wednesday.",
    plans: {
      A: { courses: ["CR05"], tasks: [
        { kind: "form", label: "Checkpoint 3 — readiness check", link: "check3" },
        { kind: "task", label: "Build your capstone: a decision brief backed by your own data." } ] },
      B: { courses: [], tasks: [
        { kind: "form", label: "Checkpoint 3 — readiness check", link: "check3" },
        { kind: "task", label: "Build your capstone: a working analysis in a notebook on your own dataset." } ] },
      C: { courses: [], tasks: [
        { kind: "form", label: "Checkpoint 3 — readiness check", link: "check3" },
        { kind: "task", label: "Build your capstone: an application on Llama that another person can use end to end." } ] } } },

  { n: 9, from: "2026-10-26", to: "2026-10-31", phase: "close",
    title: "Submit, measure, close",
    aim: "Capstones in, impact measured. Everything closes at 23:59 on Saturday 31 October.",
    plans: { close: { courses: [], tasks: [
      { kind: "form", label: "Capstone submission — final", link: "capstone" },
      { kind: "form", label: "Post-assessment — impact measurement", link: "post" },
      { kind: "task", label: "Showcase day: state-level demo sessions, Thursday 29 October." }
    ] } } }
];

/* Completion is evidence-based, not certificate-based, because free access
   to this material does not include certificates on either platform. */
const COMPLETION = [
  { t: "Pre-assessment on record",
    d: "Submitted before Sunday 6 September. Without a baseline there is nothing to measure against." },
  { t: "Weekly progress logs",
    d: "At least seven of nine, each carrying a screenshot of your course progress page." },
  { t: "Two of three checkpoints passed",
    d: "Pass mark 60%. Retakes stay open until the Sunday of the following week." },
  { t: "Capstone submitted",
    d: "One artefact, plus 300 words on the problem, the data, and what you would not trust it with." },
  { t: "Post-assessment on record",
    d: "Submitted by 23:59 on Saturday 31 October. The cohort closes together." }
];

const REMOVED = {
  headline: "Fifty-seven courses were removed after checking what each one actually costs a fellow.",
  groups: [
    { g: "The whole of DataCamp",
      why: "A free DataCamp account unlocks the first lesson of a course and nothing more. No fellow could finish one without paying, so the platform was dropped rather than half-used.",
      items: ["Introduction to AI for Work", "Understanding Machine Learning", "Machine Learning for Business",
              "Supervised Learning with scikit-learn", "Working with Llama 3", "Fine-Tuning with Llama 3",
              "Building Agentic Workflows with LlamaIndex", "and 50 others across ML, MLOps, NLP and time series"] },
    { g: "Free courses from other providers",
      why: "Free, certificate-bearing AI courses do exist elsewhere. This is a Meta programme, so the curriculum stays on Meta's own material.",
      items: [] }
  ]
};
