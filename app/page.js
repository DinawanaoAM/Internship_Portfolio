"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "MenuMastermind",
    type: "POS & Menu Management",
    description: "A menu and order management application designed to make restaurant operations more organized.",
    tags: ["Web Application", "POS"],
    image: "/menumastermind.png",
  },
  {
    number: "02",
    name: "MediQueue",
    type: "Mobile Application",
    description: "A queue management application concept designed to support more organized health-center services.",
    tags: ["Mobile Development", "Firebase"],
    image: "/mediqueue.png",
  },
  {
    number: "03",
    name: "Eris Cafe",
    type: "Cafe Management Dashboard",
    description: "A management dashboard for monitoring cafe operations, sales, and business records.",
    tags: ["Dashboard", "Web Application"],
    image: "/eris-cafe.jpeg",
  },
  {
    number: "04",
    name: "Other Academic Projects",
    type: "Academic Work",
    description: "Additional software projects completed throughout my Information Technology studies.",
    tags: ["Software Development"],
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

const certificates = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png",
  },
  {
    title: "TOPCIT Level 2",
    issuer: "TOPCIT · 2026",
    image: "/Certificates/TOPCIT_2026.png",
  },
  {
    title: "Mapúa Certificate",
    issuer: "Mapúa University",
    image: "/Certificates/Mapua.png",
  },
  {
    title: "UiTM Certificate",
    issuer: "Universiti Teknologi MARA",
    image: "/Certificates/UiTM.png",
  },
  {
    title: "Wadhwani Foundation Certificate",
    issuer: "Wadhwani Foundation",
    image: "/Certificates/Wadhwani Foundation Cert.png",
  },
  {
    title: "Wadhwani Foundation Certificate",
    issuer: "Wadhwani Foundation",
    image: "/Certificates/wadhwani foundation.png",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
            <a href="#certificates">Certificates</a>
            <a href="#contact" className="nav-contact">Contact <span>↗</span></a>
            <button className="theme-toggle" type="button" aria-label="Toggle color theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? "Night" : "Day"}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <h1>Angelie Marie<br /><em>B. Dinawanao</em></h1>
          <p className="hero-kicker">BUKIDNON STATE UNIVERSITY</p>
          <p className="hero-lead">Ensuring product quality through structured project delivery.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="/Angelie-Dinawanao-Resume.pdf" download>Request Resume <span>↓</span></a>
            <a className="button button-light" href="#contact">Get in Touch <span>↗</span></a>
          </div>
          <div className="hero-meta">
            <span>BASED IN BUKIDNON, PHILIPPINES</span>
            <span>BS INFORMATION TECHNOLOGY</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Profile image placeholder">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <Image className="profile-photo" src="/profile-new.jpg" alt="Angelie Marie Dinawanao" fill priority sizes="(max-width: 800px) 70vw, 28vw" />
            </div>
            <div className="portrait-index">PORTFOLIO / 2026</div>
          </div>
          <div className="hero-stamp">CURIOUS<br />BY NATURE<span>✳</span></div>
          <div className="vertical-note">DOCUMENT · TEST · IMPROVE</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>DOCUMENTATION <span>✳</span> QUALITY ASSURANCE <span>✳</span> PROJECT COORDINATION <span>✳</span> USER-CENTERED SOLUTIONS <span>✳</span> DOCUMENTATION <span>✳</span></div>
      </div>

      <section className="section container about-section" id="about">
        <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Technology with<br /><em>purpose.</em></>} />
        <div className="about-content">
          <p className="about-intro">I’m Angelie Marie B. Dinawanao, a Bachelor of Science in Information Technology student at Bukidnon State University.</p>
          <div className="about-detail">
            <p>Throughout my academic journey, I have gained hands-on experience in developing various IT solutions, ranging from console-based applications and games to web and mobile systems. These experiences have strengthened my technical skills, problem-solving abilities, and understanding of software development.</p>
            <p>Beyond technology, I have dedicated three years to student leadership within a student body organization, serving in roles including Technical Officer, Student Representative, and Public Relations Officer. These responsibilities helped me develop communication, collaboration, organizational, and leadership skills.</p>
            <p>I am particularly interested in Technical Writing and Documentation, Software Quality Assurance, Technical Project Management, and Product Management. I aspire to bridge the gap between technology, people, and processes by contributing to reliable, meaningful, and user-centered digital solutions.</p>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>04</strong><span>YEARS OF IT STUDIES</span></div>
          <div><strong>03</strong><span>YEARS IN STUDENT LEADERSHIP</span></div>
          <div><strong>05+</strong><span>ACADEMIC PROJECTS</span></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="02 / AREAS OF INTEREST" title={<>Where I bring<br /><em>value.</em></>} description="Areas I am interested in pursuing and continuously developing through practical experience." />
          <div className="interest-grid">
            {interests.map(([title, description], index) => (
              <article className="interest-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
          <div className="stack-block">
            <div><span className="eyebrow">TOOLS & TECHNOLOGIES</span><h3>My working toolkit</h3></div>
            <div className="stack-list">
              {["HTML", "CSS", "JavaScript", "C", "Java", "PHP", "Laravel", "MySQL", "GitHub", "Figma", "Microsoft Office"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section container journey-section" id="journey">
        <SectionHeading eyebrow="03 / LEARNING IN PROGRESS" title={<>My development<br /><em>journey.</em></>} description="A look at how my coursework, projects, and responsibilities have shaped my growth as an IT student." />
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
            <span className="eyebrow">LEADERSHIP EXPERIENCE</span>
            <h3>Learning to lead<br />and work together.</h3>
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
          <span className="section-label">04 - Projects</span>
          <div className="featured-projects">
            {projects.filter((project) => project.image).map((project) => (
              <article className="featured-project" key={project.name}>
                <div className={`featured-project-images${project.name === "MenuMastermind" || project.name === "MediQueue" ? " white-preview-frame" : ""}`}>
                  <Image
                    className={`featured-project-image${project.name === "MediQueue" ? " mediqueue-preview" : ""}${project.name === "MenuMastermind" ? " menumastermind-preview" : ""}`}
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={1484}
                    height={768}
                  />
                </div>
                <div className="featured-project-info">
                  <span className="project-number">{project.number}</span>
                  <h3>{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="container">
          <span className="section-label">05 - Achievements</span>
          <div className="achievement-grid">
            <article className="achievement-card"><span className="card-number">01</span><h3>Dean&apos;s Lister</h3><p>Recognized for academic excellence through consistent achievement on the Dean&apos;s List.</p></article>
            <article className="achievement-card"><span className="card-number">02</span><h3>College Honor</h3><p>Received college-level recognition for strong academic performance and commitment to learning.</p></article>
            <article className="achievement-card"><span className="card-number">03</span><h3>Departmental Honor</h3><p>Recognized by the department for achievement and dedication to Information Technology studies.</p></article>
            <article className="achievement-card"><span className="card-number">04</span><h3>TOPCIT Level 2</h3><p>Achieved TOPCIT Level 2 certification in 2026.</p></article>
          </div>
        </div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="container">
          <SectionHeading
            eyebrow="06 / CREDENTIALS"
            title={<>Proof of<br /><em>progress.</em></>}
            description="Certificates and credentials earned through coursework, skills development, and professional learning."
          />
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <a
                className="certificate-card"
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                key={`${certificate.title}-${certificate.image}`}
              >
                <div className="certificate-image-wrap">
                  <Image
                    className="certificate-image"
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    width={1200}
                    height={850}
                  />
                  <span className="certificate-view">VIEW ↗</span>
                </div>
                <div className="certificate-details">
                  <h3>{certificate.title}</h3>
                  <span>{certificate.issuer}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div>
            <span className="section-label">07 - Contact</span>
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
        <div className="container footer-inner"><a className="brand" href="#home">AD<span>.</span></a><span>DESIGNED & BUILT WITH CARE · 2026</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
