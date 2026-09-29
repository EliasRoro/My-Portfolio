/* Elias Roro — portfolio data */

const hero = {
  name: "Elias Roro",
  firstName: "Elias",
  lastName: "Roro",
  roles: ["Software Engineer", "Data Engineer", "Software Quality Engineer"],
  tagline:
    "I build reliable software — and prove it works. From automated quality frameworks to data pipelines that banks trust.",
  email: "eliassaychelem@gmail.com",
  phone: "(226) 600-6986",
  location: "Ontario, Canada",
  resumeLink: "/Elias-Roro-Resume.pdf",
  photo: require("./assets/images/profile.jpg")
};

const socials = [
  {name: "GitHub", url: "https://github.com/EliasRoro"},
  {name: "LinkedIn", url: "https://www.linkedin.com/in/elias-roro/"},
  {name: "Email", url: "mailto:eliassaychelem@gmail.com"}
];

const stats = [
  {value: "5+", label: "Years of Experience"},
  {value: "04", label: "Professional Roles"},
  {value: "03", label: "Featured Builds"}
];

const about = {
  statement:
    "A results-driven engineer working across quality, data, and full-stack development — validating enterprise data pipelines, building automated test frameworks, and shipping web and mobile applications.",
  paragraphs: [
    "For the past several years I've worked where software has to be right: financial data pipelines at TD Bank, enterprise IT systems at Viessmann Manufacturing, and startup web products. My specialty is the intersection most teams neglect — engineering quality into the build, not inspecting it in afterwards.",
    "Today I focus on test automation, data validation, and full-stack development — and I'm building Love-Care-Support, a PSW marketplace with an AI scheduling platform, as my own venture."
  ],
  facts: [
    {label: "Based in", value: "Ontario, Canada"},
    {label: "Focus", value: "QA Automation · Data Engineering"},
    {label: "Open to", value: "Senior engineering roles"}
  ]
};

const expertise = [
  {
    title: "Quality Engineering",
    desc: "Automated test frameworks and API validation for enterprise systems.",
    skills: ["Selenium", "Cucumber", "RestAssured", "PyTest", "Postman", "JMeter"]
  },
  {
    title: "Data Engineering",
    desc: "Validation of complex ETL / ELT pipelines across enterprise databases.",
    skills: ["SQL", "Oracle", "SQL Server", "PostgreSQL", "ETL Validation", "Data Pipelines"]
  },
  {
    title: "Software Development",
    desc: "Full-stack web and mobile applications, from concept to deployment.",
    skills: ["Java", "Python", "JavaScript", "React", "ASP.NET", "PHP"]
  },
  {
    title: "Delivery & Platforms",
    desc: "CI/CD, Agile delivery, and enterprise platform administration.",
    skills: ["Jenkins", "CI/CD", "Jira", "Agile", "Git", "SAP ERP"]
  }
];

const experience = [
  {
    role: "Senior Data Quality & Software Quality Engineer",
    company: "TD Bank",
    date: "November 2023 – September 2026",
    desc: "Led quality assurance and test validation for high-scale enterprise data pipelines and financial compliance systems in Toronto, ON.",
    bullets: [
      "Designed and maintained automated test suites with Java, Selenium, Cucumber and RestAssured for REST APIs and data integrity",
      "Wrote complex SQL validation scripts across Oracle and MS SQL Server for ETL / ELT ingestion layers",
      "Partnered with Agile teams to refine user stories and acceptance criteria",
      "Managed end-to-end defect tracking in Jira, reducing production defect leakage"
    ],
    featured: true
  },
  {
    role: "IT Coordinator & Web Developer",
    company: "Viessmann Manufacturing",
    date: "January 2022 – November 2023",
    desc: "Developed corporate web applications and administered enterprise IT systems supporting 100+ users in Waterloo, ON.",
    bullets: [
      "Built and optimized internal web apps and portals with HTML5, CSS3, JavaScript and PHP",
      "Ran functional, performance and cross-browser quality testing",
      "Administered SAP ERP, Google Workspace and network infrastructure"
    ]
  },
  {
    role: "Web Developer (Internship)",
    company: "Create International Tech",
    date: "June 2019 – August 2020",
    desc: "Built responsive web interfaces for startup applications in Kitchener, ON.",
    bullets: [
      "Developed features with HTML, CSS, JavaScript and PHP",
      "Performed front-end unit testing and usability evaluations"
    ]
  },
  {
    role: "Volunteer Web Developer",
    company: "Link Picnic Festival Org",
    date: "June 2019 – January 2020",
    desc: "Designed and maintained the official web portal for the non-profit in Waterloo, ON.",
    bullets: ["Event registration system", "Responsive and accessible design"]
  }
];

const projects = [
  {
    name: "Love-Care-Support",
    desc: "Uber-style marketplace connecting families with personal support workers, with an AI scheduling and matching platform.",
    tech: ["React", "Supabase", "JavaScript"],
    url: "https://github.com/EliasRoro/Love-care-booking-AI"
  },
  {
    name: "Space Shooter Game",
    desc: "Windows space shooter built in C — a game programming project covering game loops, collision and rendering.",
    tech: ["C", "Game Programming", "Windows"],
    url: "https://github.com/EliasRoro/Game-Programming-windows-C-Space-Shoot-Game"
  },
  {
    name: "Android Music App",
    desc: "Android music app built with HTML, CSS and JavaScript — a mobile web app packaged for Android.",
    tech: ["JavaScript", "HTML/CSS", "Mobile"],
    url: "https://github.com/EliasRoro/EliasRoro.github.io-AndroidMusicAPP"
  }
];

const education = [
  {
    school: "Conestoga College",
    program: "Advanced Diploma, Computer Programmer / Analyst",
    date: "September 2017 – December 2020",
    place: "Kitchener, Ontario, Canada"
  },
  {
    school: "Obsidi Academy",
    program: "Advanced Software Engineering & Data Automation",
    date: "August 2023 – November 2023",
    place: "Tech bootcamp · Software engineering and data automation"
  },
  {
    school: "Addis Ababa University",
    program: "Diploma in Mechanical Engineering",
    date: "Addis Ababa, Ethiopia",
    place: ""
  }
];

const marqueeItems = [
  "Quality Engineering",
  "Data Engineering",
  "Test Automation",
  "Full-Stack Development",
  "SQL & ETL Validation",
  "CI / CD"
];

export {hero, socials, stats, about, expertise, experience, projects, education, marqueeItems};
