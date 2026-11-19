import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const projects = [
  {
    number: "01",
    name: "House of the Dragons",
    type: "Game Development",
    description: "A game development project that demonstrates programming logic and interactive application concepts.",
    href: "https://github.com/PTE050305/Flying-bee",
    tags: ["Java", "Game Development"],
    image: "/house-of-dragons.jpg",
  },
  {
    number: "02",
    name: "Online Barbershop Booking System",
    type: "Web Application",
    description: "A job order monitoring system developed to organize and manage job order records and processes.",
    href: "https://github.com/PTE050305/Job_order_management",
    tags: ["PHP", "MySQL"],
    image: "/barbershop-booking.jpg",
  },
  {
    number: "03",
    name: "MenuMastermind",
    type: "Figma-Based Mobile Delivery App",
    description: "A Figma-based mobile delivery app concept for browsing restaurants, discovering cuisines, and ordering food.",
    href: "",
    tags: ["Figma", "UI/UX Design", "Mobile App"],
    image: "/menumastermind.png",
  },
  {
    number: "04",
    name: "Eris Cafe",
    type: "Web Application",
    description: "A cafe-focused digital project designed to support a better customer experience.",
    href: "",
    tags: ["Web Development"],
    image: "/eris-cafe.jpeg",
  },
  {
    number: "05",
    name: "MediQueue",
    type: "Mobile Application",
    description: "A queue management application concept designed to support more organized health-center services.",
    href: "https://github.com/PTE050305/MediQueue",
    tags: ["Mobile Development", "Firebase"],
    image: "/mediqueue.png",
  },
  {
    number: "06",
    name: "AJR- Inventory Management System",
    type: "Inventory Management System",
    description: "An inventory management project designed to organize product records, stock levels, and daily inventory operations.",
    href: "",
    tags: ["System Development"],
    image: "/ajr-ims.jpg",
  },
];

const journey = [
  {
    year: "FIRST YEAR",
    title: "IT Fundamentals & Foundations",
    points: [
      "Established foundational knowledge in Information Technology, C Programming, and Human-Computer Interaction, particularly UI/UX principles.",
      "Learned web development fundamentals using HTML, CSS, and JavaScript.",
      "Developed a food delivery application for browsing food items, placing orders, and managing deliveries.",
    ],
  },
  {
    year: "SECOND YEAR",
    title: "Object-Oriented Programming & System Development",
    points: [
      "Studied Java, Object-Oriented Programming principles, and data structures.",
      "Developed Java applications and a Java-based game.",
      "Gained foundational knowledge in MySQL and database management.",
      "Explored PHP and developed a Job Order Monitoring System.",
      "Was introduced to computer networking fundamentals and network configuration.",
    ],
  },
  {
    year: "THIRD YEAR",
    title: "Full-Stack Development & Project Documentation",
    points: [
      "Completed advanced networking coursework, including Networking 2.",
      "Served as Lead Project Documenter for a Barber Shop Management System.",
      "Gained experience in Laravel and modern web application development.",
      "Handled documentation, coordination, and project management for a Laravel-based Multi-Tenancy project.",
      "Started working on the documentation and development requirements of the OncoCare capstone project.",
    ],
  },
  {
    year: "FOURTH YEAR",
    title: "Technical Writing & Capstone Development",
    points: [
      "Led the preparation and organization of technical documentation for Pig AI Watch, a computer vision-based farrowing monitoring system with real-time alerts and video feedback.",
      "Continued developing skills in technical writing, software documentation, project coordination, and research-based software development.",
      "Strengthened understanding of software development processes, quality considerations, and project documentation standards.",
    ],
  },
];

const interests = [
  ["Technical Writing & Documentation", "Preparing, organizing, and maintaining technical documents, system manuals, project reports, and software development documentation."],
  ["Software Quality Assurance", "Software testing, identifying and documenting defects, verifying system functionality, and assessing software quality."],
  ["Technical Project Management", "Coordinating project activities, organizing documentation, tracking development progress, and supporting timely project delivery."],
  ["UI/UX Design", "Designing user interfaces and experiences, creating wireframes and prototypes, and developing intuitive, functional layouts."],
  ["Product Management", "Understanding user requirements, product planning, feature development, and aligning technical solutions with user needs."],
];

const leadership = [
  {
    date: "2024–2025",
    role: "Property Custodian",
    points: [
      "Managed and monitored the inventory of student organization properties, equipment, and other assets.",
      "Maintained records of borrowed, returned, and available organizational materials.",
      "Assisted with the proper storage, distribution, and safekeeping of organization properties.",
    ],
  },
  {
    date: "2025–2026",
    role: "Associate Auditor",
    points: [
      "Assisted in reviewing and monitoring the financial transactions and records of the student organization.",
      "Supported verification of financial documents, reports, and liquidation records.",
      "Collaborated with the auditing team to promote transparency, accuracy, and accountability.",
    ],
  },
  {
    date: "2026–2027",
    role: "Finance Officer",
    points: [
      "Oversees the financial management and budgeting of the student organization.",
      "Monitors financial transactions, collections, disbursements, and fund allocations.",
      "Maintains financial records and prepares reports to support transparency and accountability.",
    ],
  },
];

function SectionHeading({ label }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home">AD<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Focus</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <h1>Angelie Marie<br />B. Dinawanao</h1>
          <p className="hero-kicker">BUKIDNON STATE UNIVERSITY</p>
          <div className="hero-actions">
            <a className="button button-dark" href="/Angelie-Dinawanao-Resume.pdf" download>Request Resume <span>↓</span></a>
            <a className="button button-light" href="#contact">Get in Touch <span>↗</span></a>
          </div>
          <div className="hero-meta">
            <span>BASED IN BUKIDNON, PHILIPPINES</span>
            <span>BS INFORMATION TECHNOLOGY</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Profile image">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <Image className="profile-photo" src="/profile-new.jpg" alt="Angelie Marie B. Dinawanao" fill priority />
            </div>
            <div className="portrait-index">PORTFOLIO / 2026</div>
          </div>
        </div>
      </section>

      <section className="section container about-section" id="about">
        <SectionHeading label="01 — About me" />
        <div className="about-content">
          <p className="about-summary">As an Information Technology student, I have gained hands-on experience in developing applications, games, websites, and mobile systems, strengthening my technical and problem-solving skills. With three years of student leadership experience, I have also developed strong communication, teamwork, organizational, and adaptability skills. My interests include Technical Writing and Documentation, Software Quality Assurance, UI/UX Design, Technical Project Management, and Product Management. I aim to combine my technical knowledge, creativity, and leadership experience to develop reliable, user-centered digital solutions while continuously learning and growing in the IT field.</p>
        </div>
        <div className="stats-row">
          <div><strong>04</strong><span>YEARS OF IT STUDIES</span></div>
          <div><strong>03</strong><span>YEARS IN STUDENT LEADERSHIP</span></div>
          <div><strong>05+</strong><span>ACADEMIC PROJECTS</span></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading label="02 — Areas of interest" />
          <div className="interest-grid">
            {interests.map(([title, description], index) => (
              <article className="interest-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
          <div className="stack-block">
            <div className="stack-list">
              {["HTML", "CSS", "JavaScript", "C", "Java", "PHP", "Laravel", "MySQL", "GitHub", "Figma", "Microsoft Office"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section container journey-section" id="journey">
        <SectionHeading label="03 — Learning journey" />
        <div className="timeline">
          {journey.map((item, index) => (
            <article className="timeline-item" key={item.year}>
              <div className="timeline-side"><span>{item.year}</span><b>0{index + 1}</b></div>
              <div className="timeline-main">
                <h3>{item.title}</h3>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <div className="leadership">
          <div className="leadership-heading">
            <h3>Leadership</h3>
            <p>Three years of involvement in the College of Technologies Student Body Organization (COT-SBO), Bukidnon State University.</p>
          </div>
          <div className="leadership-list">
            {leadership.map((item) => (
              <article className="leadership-item" key={item.role}>
                <div><span>{item.date}</span><h4>{item.role}</h4></div>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading label="04 - Projects" />
          <div className="featured-projects">
            {projects.filter((project) => project.image || project.images).map((project) => (
              <div className="featured-project" key={project.name}>
                <div className={`featured-project-images${project.images ? " multiple" : ""}${project.name === "MenuMastermind" || project.name === "MediQueue" ? " white-preview-frame" : ""}`}>
                  {(project.images || [project.image]).map((image, index) => (
                    <Image className={`featured-project-image${project.name === "MediQueue" ? " mobile-preview mediqueue-preview" : ""}${project.name === "MenuMastermind" ? " menumastermind-preview" : ""}`} src={image} alt={`${project.name} preview ${index + 1}`} width={1484} height={768} key={image} />
                  ))}
                </div>
                <div className="featured-project-info">
                  <span className="project-number">{project.number}</span>
                  <h3>{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="project-list">
            {projects.filter((project) => !project.image && !project.images).map((project) => (
              <div key={project.name}>
                <div className="project-row">
                  <span className="project-number">{project.number}</span>
                  <div className="project-info"><h3>{project.name}</h3><span>{project.type}</span><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="container">
          <SectionHeading label="05 — Achievements" />
          <div className="achievement-grid">
            <article className="achievement-card"><span className="card-number">01</span><h3>Dean&apos;s Lister</h3><p>Recognized for academic excellence through consistent achievement on the Dean&apos;s List.</p></article>
            <article className="achievement-card"><span className="card-number">02</span><h3>College Honor</h3><p>Received college-level recognition for strong academic performance and commitment to learning.</p></article>
            <article className="achievement-card"><span className="card-number">03</span><h3>Departmental Honor</h3><p>Recognized by the department for achievement and dedication to Information Technology studies.</p></article>
            <article className="achievement-card"><span className="card-number">04</span><h3>TOPCIT Level 2</h3><p>Achieved TOPCIT Level 2 certification in 2026.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div>
            <span className="section-label">06 — Contact</span>
            <p className="contact-intro">I would be glad to connect, learn about your team, and explore how I can contribute as an intern.</p>
            <div className="contact-links">
              <a className="email-link" href="mailto:23011028@student.buksu.edu.ph">23011028@student.buksu.edu.ph <span>↗</span></a>
              <a href="https://github.com/DinawanaoAM" target="_blank" rel="noreferrer">github.com/DinawanaoAM ↗</a>
              <a href="https://www.linkedin.com/in/angelie-dinawanao-5299373b3/" target="_blank" rel="noreferrer">linkedin.com/in/angelie-dinawanao-5299373b3 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner"><a className="brand" href="#home">AD<span>.</span></a><span>ANGELIE MARIE DINAWANAO · 2026</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
