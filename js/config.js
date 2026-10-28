/* =====================================================================
   EDIT THIS BLOCK ONLY. Everything on the page is built from it.
   Replace every "YOUR-..." value and the sample projects.
   TIP: to make any text bold, wrap it in <b>...</b> or <strong>...</strong>.
   Inside quotes that is fine as is, e.g. "I build <b>secure</b> systems".
   ===================================================================== */
const CONFIG = {
  name: "Msizi Mkhize",
  location: "Durban, KZN",
  role: "你好世界。",
  lede: "I'm Msizi Mkhize. I build secure, data-driven systems from the ground up, combining the structural discipline of an engineering background with advanced computational logic. 欢迎！",

  // PHOTO: save your round 389x389 picture as assets/images/profile.png (or change the path).
  // If the file is missing, or this is set to "", the photo is simply hidden.
  photo: "assets/images/profile.png",

  links: {
    github:   "https://github.com/msizimkhize",
    linkedin: "https://www.linkedin.com/in/msizimkhize",
    email:    "msizimkhize.rsa@gmail.com"
  },

  about: [
    "I am an analytical problem-solver specialised in the intersection of <b>mathematics</b>, <b>computer science</b>, and <b>data security</b>. By combining the structural discipline of an engineering background with advanced computational logic, I build solutions that prioritise both efficiency and system integrity.", 
	"I thrive on deconstructing complex technical challenges to build secure, data-driven frameworks from the ground up. I am currently looking to apply my skills in <b>security analytics</b> and <b>data engineering</b> to help organisations protect and optimise their digital assets."
  ],

  // SAMPLE PROJECTS: replace with your real work. Delete links you don't have.
  // SAMPLE WORK EXPERIENCE: replace with your real roles (internships, part-time, tutoring, volunteering all count).
  // Keep each point to one result: what you did and what changed because of it.
  experience: [
    { role: "Volunteering Virtual Operations Mentor and Community Lead ", org: "Focus on the Family Africa", dates: "Jun 2024 – Present",
      points: [
        "Streamlined and managed data architecture for a community cohort of 900+ individuals.",
        "Designed and tracked key participation indicators to systematically assess cohort involvement.",
        "Utilised digital software solutions to continuously monitor, log, and analyse ongoing engagement."
      ],
      tags: ["Python","SQL","Airflow","Git"] },
    { role: "Mathematics Teaching Assistant", org: "Department of Basic Education", dates: "Apr 2023 – Aug 2023",
      points: [
        "Developed structured, milestone-driven lesson plans and educational materials tailored for diverse student bodies.",
        "Simplified and communicated complex mathematical concepts and relational logic to ensure accessible, effective learning.",
        "Designed frameworks to systematically monitor, analyse, and evaluate cohort progression against key learning milestones."
      ],
      tags: ["SIEM","Log analysis","Splunk","Incident response"] },
    { role: "Data Capturer and Quality Assurance", org: "Statistics South Africa", dates: "Mar 2022 – Apr 2022",
      points: [
        "Processed and queried large-scale national datasets with high precision to maintain data integrity across digital databases.",
        "Performed regular quality checks to systematically identify and eliminate discrepancies, ensuring accuracy across complex data environments."
      ],
      tags: ["Teaching","Communication","Python"] },
    { role: "Student Representative ", org: "University of Pretoria", dates: "Jan 2016 – Dec 2016",
      points: [
        "Served as the main point of contact for 100+ students, managing communications and gathering feedback.",
        "Synthesised complex student concerns and key data into actionable strategic reports for executive board meetings.",
        "Negotiated directly with department heads to secure structural adjustments to academic curricula based on student feedback."
      ],
      tags: ["R","Python","Statistics","Research"] }
  ],

  // PROJECTS: shown 3 per page on large screens (2 on tablets, 1 on phones). Add a new { ... } line and dots update automatically.
  // icon: any Font Awesome class, e.g. "fas fa-cloud-sun" (browse icons at https://fontawesome.com/icons, free ones only).
  // link: the project icon and title both link here (opens in a new tab). Replace the YOUR-USERNAME placeholders with your real URLs.
  projects: [
    { icon: "fa fa-code", name: "Synapse Tic-Tac-Toe",
      text: "A browser-based Tic-Tac-Toe web application powered by Brain.js, featuring a neural network trained across three distinct difficulty levels.",
      link: "https://github.com/msizimkhize/Tic-Tac-Toe-Neural-Network" },
    { icon: "fas fa-database", name: "Agritech Analysis",
      text: "Built a relational MySQL database <br>and interactive Power BI dashboards <br>to model, analyse, and visualise 2022 vegetable pricing trends and market fluctuations.",
      link: "https://github.com/YOUR-USERNAME/etl-pipeline" },
    { icon: "fa fa-code", name: "Archives Manager",
      text: "Developed a C++ Qt desktop application to systematically categorise, date, label, and filter temporal journal entries and <br>archived records.",
      link: "https://github.com/msizimkhize/Journal-Archives-and-Records-Manager" },
    { icon: "fas fa-database", name: "Crime Data Pipeline",
      text: "Constructed an ETL pipeline using Python, Pandas, and R to process multi-year national crime statistics <br>and perform statistical modeling on regional and temporal trends.",
      link: "https://github.com/msizimkhize/South-African-Crime-Statistics-Comparative-Analysis-Project" },
    { icon: "fas fa-database", name: "Global Food Index",
      text: "Built an R data pipeline to ingest, wrangle, and model global staple food prices, evaluating longitudinal inflation trends and purchasing power parity metrics across international markets.",
      link: "https://github.com/YOUR-USERNAME/traffic-visualiser" }
  ],

  // SKILLS: type is "code" (languages), "tech" (frameworks/platforms) or "method" (ways of working). level is shown under the name.
  skills: [
    { name: "Java", level: "Intermediate", type: "code" },
    { name: "Python", level: "Intermediate", type: "code" },
    { name: "C++", level: "Intermediate", type: "code" },
    { name: "C", level: "Basic", type: "code" },
    { name: "JavaScript", level: "Basic", type: "code" },
    { name: "R", level: "Intermediate", type: "code" },
    { name: "MATLAB", level: "Basic", type: "code" },
    { name: "Android Studio", level: "Intermediate", type: "tech" },
    { name: "Qt Creator", level: "Intermediate", type: "tech" },
    { name: "RESTful Web Services", level: "Intermediate", type: "tech" },
    { name: "MySQL", level: "Intermediate", type: "tech" },
    { name: "Agile/Scrum", level: "Intermediate", type: "method" },
    { name: "High-Fidelity Prototyping", level: "Intermediate", type: "method" },
    { name: "Usability Testing", level: "Intermediate", type: "method" },
    { name: "Heuristic Evaluation", level: "Intermediate", type: "method" }
  ]
};
