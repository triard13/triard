"use client";

import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  image?: string;
  shortDesc: string;
  tags: string[];
  link: string;
  fullDesc: React.ReactNode | string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Toko Emas Majusari",
    image: "/majusari.png",
    shortDesc: "As a Full-Stack Developer, I built a comprehensive system featuring a landing page, inventory management, and a streamlined sales processing workflow.",
    tags: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL"],
    link: "https://www.tokoemasmajusarimalang.com/",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>Toko Emas Majusari needed to modernize their business operations. Relying on manual processes for inventory tracking and sales often led to inefficiencies and made it difficult to scale. They required a unified digital solution to showcase their products online and seamlessly manage store operations.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As the sole Full-Stack Developer, I was responsible for the end-to-end delivery of the platform. This included designing the database architecture, building the backend APIs with Laravel, and crafting a responsive, intuitive user interface using Alpine.js and Tailwind CSS.</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Landing Page:</strong> A professional and responsive landing page to showcase the store&apos;s profile and latest jewelry collections to potential customers.</li>
            <li><strong>Inventory Management:</strong> Track incoming goods, supplier info, and automated low-stock notifications.</li>
            <li><strong>Sales Management:</strong> Facilitate transactions via an intuitive POS interface and generate sales analytics.</li>
            <li><strong>Customer Management:</strong> Maintain a comprehensive database for personalized service and targeted promotions.</li>
            <li><strong>Reporting & Analytics:</strong> Detailed reports on sales performance and inventory status to support strategic planning.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(219, 165, 92, 0.1)', borderLeft: '4px solid #dba55c', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>The system successfully streamlined the store&apos;s operations, improving efficiency and customer satisfaction. It provided valuable insights into sales trends, enabling better decision-making and strategic planning.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Prowriting",
    image: "/prowriting.png",
    shortDesc: "An interactive and responsive landing page for Prowriting, an AI-powered content design and UX writing tool, featuring dynamic animations and a modern glassmorphism aesthetic.",
    tags: ["HTML5", "Tailwind CSS", "Vanilla JS"],
    link: "https://slicing-project-1.vercel.app/",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>The main challenge of this project was to build a visually appealing, highly responsive, and interactive landing page that effectively communicates the value of an AI UX writing product. This involved translating complex UI designs (like dynamic animations and carousel features) into clean, structured code while maintaining fast loading speeds across various screen sizes and browsers.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As Frontend Developer / UI Developer, I was fully responsible for translating UI/UX designs into a functional and interactive web page using HTML, Tailwind CSS, and JavaScript.</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Responsive & Mobile-First Design:</strong> Seamlessly adapts to various devices (Mobile, Tablet, Desktop).</li>
            <li><strong>Interactive UI/UX:</strong> Dynamic interface components such as hover effects, smooth transitions, glow animations, and click interactions (e.g., brand style selector).</li>
            <li><strong>Modern Aesthetic:</strong> Features a modern glassmorphism design style using Tailwind CSS to deliver a premium visual experience.</li>
            <li><strong>Lightweight & Fast:</strong> Optimized without heavy JavaScript frameworks, ensuring lightning-fast page loads.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(219, 165, 92, 0.1)', borderLeft: '4px solid #dba55c', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>Successfully built and launched a professional, modern, and fully functional landing page. The page effectively highlights Prowriting&apos;s value propositions with a seamless user experience, which helps increase user engagement and product conversion rates.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Flight Planning System",
    shortDesc: "I contributed to the development of a Flight Planning System, which involved creating tools for efficient flight route planning and management. My role included optimizing database queries, ensuring system reliability, and implementing.",
    tags: ["React", "Python", "Git", "TypeScript"],
    fullDesc: "Detailed case study for Flight Planning System. This will showcase the route planning algorithms, query optimizations, and user interface designed for aviation professionals.",
    link: "#"
  },
  {
    id: 4,
    title: "Mallydia POS",
    shortDesc: "Comprehensive POS system for retail management, featuring real-time inventory tracking, sales analytics, and dynamic reporting.",
    tags: ["React", "Node.js", "Tailwind"],
    fullDesc: "Detailed case study for Mallydia POS. Screenshots of the point-of-sale interface, inventory tracking dashboard, and dynamic reporting modules can be placed here.",
    link: "#"
  },
  {
    id: 5,
    title: "Inventory Barang",
    shortDesc: "Efficient goods inventory and tracking system built to streamline warehouse operations and monitor stock levels automatically.",
    tags: ["Laravel", "Vue.js", "MySQL"],
    fullDesc: "Detailed case study for Inventory Barang. This modal will display the warehouse operations dashboard, stock level monitoring alerts, and tracking workflows.",
    link: "#"
  },
  {
    id: 6,
    title: "Sistem Informasi Surat",
    shortDesc: "Digital mail management information system for Polinema to securely handle incoming and outgoing official correspondence.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    fullDesc: "Detailed case study for Sistem Informasi Surat. Explaining the secure handling of official correspondence, role-based access control, and digital archiving system.",
    link: "#"
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <main>
      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="nav-logo">A</div>
        <div className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
        </div>
        <div className="nav-cta">
          <a href="mailto:triard78@gmail.com">Let&apos;s Connect ↗</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pill">
          Hello 👋, Let&apos;s Build Something Extraordinary
        </div>
        
        <h1 className="hero-headline">
          Hi, I&apos;m Ardi<br/>
          your technical partner <span className="grey">for</span><br/>
          <span className="grey">building standout</span><br/>
          <span className="grey">web solutions.</span>
        </h1>

        <div className="hero-subtitle-container">
          A <strong>Freelance Web Developer</strong> crafting high-performance websites and seamless digital experiences.
        </div>

        <a href="mailto:triard78@gmail.com" className="btn-black">
          Let&apos;s Connect
        </a>

        {/* Floating Avatar (Bottom Left) */}
        <div className="floating-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.png" alt="Tri Ardiansyah" style={{color: 'transparent'}}/>
        </div>

        {/* Vertical Socials (Bottom Right) */}
        <div className="vertical-socials">
          <a href="https://www.linkedin.com/in/tri-ardiansyah-0b398817a/" target="_blank" rel="noopener noreferrer" className="social-circle" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/triard13" target="_blank" rel="noopener noreferrer" className="social-circle" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.instagram.com/tria.ui/" target="_blank" rel="noopener noreferrer" className="social-circle" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {/* Duplicate items for infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> Next.js</div>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg> React</div>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> TypeScript</div>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Tailwind CSS</div>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Node.js</div>
              <div className="tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Laravel</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" style={{marginBottom: '100px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <h2 style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: '#000', paddingLeft: '4px'}}>
          about me<span style={{color: '#dba55c'}}>.</span>
        </h2>
        <div style={{background: '#f9fafb', padding: '48px', borderRadius: '24px', border: '1px solid #e5e7eb', fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.8}}>
          <p style={{marginBottom: '24px'}}>
            Hello! I&apos;m Ardi, a passionate <strong>Freelance Web Developer</strong> dedicated to building high-performance, visually stunning digital experiences. With a strong foundation in modern web technologies, I bridge the gap between design and engineering to create applications that are not only beautiful but also highly functional.
          </p>
          <p>
            My approach focuses on clean code, seamless user interactions, and robust architecture. Whether it&apos;s a complex web app, a responsive landing page, or a complete backend system, I enjoy solving difficult problems and bringing creative ideas to life. I&apos;m constantly exploring new tools and frameworks to stay at the forefront of modern web development.
          </p>
        </div>
      </div>

      {/* Rest of the Portfolio (Bento Grid) */}
      <div className="bento-grid">
        
        {/* Projects Section */}
        <div id="projects" className="col-span-4" style={{marginTop: '0', display: 'flex', flexDirection: 'column', gap: '48px'}}>
          <h2 style={{fontSize: '4.5rem', margin: 0, lineHeight: 0.75, fontWeight: 300, letterSpacing: '-0.02em', color: '#000', paddingLeft: '4px'}}>
            projects<span style={{color: '#dba55c'}}>.</span>
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          
          {/* Projects mapped from data array */}
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{position: 'relative', padding: '32px', borderRadius: '16px', background: '#161616', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid #2a2a2a'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#dba55c'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
            >
              <div style={{position: 'absolute', bottom: '-35px', right: '-15px', color: 'rgba(255,255,255,0.08)', fontSize: '12rem', fontWeight: 800, lineHeight: 1, pointerEvents: 'none', zIndex: 0}}>{project.id}</div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', zIndex: 1}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 500, color: '#ffffff', maxWidth: '80%'}}>{project.title}</h3>
                <span style={{fontSize: '1.4rem', color: '#dba55c', fontWeight: 500}}>↗</span>
              </div>
              <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6, marginBottom: '40px', flexGrow: 1, zIndex: 1, maxWidth: '90%'}}>
                {project.shortDesc}
              </p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', zIndex: 1}}>
                {project.tags.map(tag => (
                  <span key={tag} style={{padding: '6px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.75rem', color: '#e5e5e5', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)'}}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

        </div>
        </div>

        {/* What I Do Section */}
        <div id="services" className="col-span-4" style={{marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
          <h2 style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: '#000', paddingLeft: '4px'}}>
            what I do<span style={{color: '#dba55c'}}>.</span>
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            {/* Service 1 */}
            <div 
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#dba55c'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(219, 165, 92, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(219, 165, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dba55c'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Front-End Development</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Develop responsive and engaging user interfaces from design to implementation, ensuring exceptional user experience through effective UI/UX design.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div 
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#dba55c'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(219, 165, 92, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(219, 165, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dba55c'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Project Management</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Plan, organize, and manage web development projects from start to finish. Collaborate with clients and teams to ensure projects are completed on schedule.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div 
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#dba55c'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(219, 165, 92, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(219, 165, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dba55c'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Back-End Development</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Create and manage servers, databases, and application logic, and provide APIs and integration with third-party services.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div 
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#dba55c'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(219, 165, 92, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(219, 165, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dba55c'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Maintenance & Support</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Monitor website performance and perform regular maintenance to ensure security and speed. Provide technical support according to client needs.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Experience Timeline Section */}
      <div style={{marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <h2 style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: '#000', paddingLeft: '4px'}}>
          experience<span style={{color: '#dba55c'}}>.</span>
        </h2>
        
        <div className="timeline-container">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Freelance Web Developer</h3>
              <div className="timeline-meta">Self-Employed · Remote | Aug 2021 - Present</div>
              <p className="timeline-desc">
                Built and developed custom web applications for various clients. Experienced in using Laravel, PHP, and modern front-end technologies to deliver scalable and functional digital solutions.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Developer Intern</h3>
              <div className="timeline-meta">PT. Ekosjaya Abadi Lestari · Sidoarjo | Mar 2021 - Apr 2021</div>
              <p className="timeline-desc">
                Developed a warehouse inventory information system using the CodeIgniter 3 framework to optimize tracking and stock management.
              </p>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Developer Intern</h3>
              <div className="timeline-meta">CV. TR Makmur Sentosa · Sidoarjo | Jan 2021 - Feb 2021</div>
              <p className="timeline-desc">
                Actively participated in web development projects during the internship. Assisted the engineering team in building, testing, and maintaining website features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-content">
          <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1}}>
            Have an idea?<br/>Let&apos;s build it together.
          </h2>
          <p style={{fontSize: '1.1rem', color: '#a3a3a3', maxWidth: '500px', margin: '0 auto'}}>
            I&apos;m currently available for new projects and open to exciting freelance opportunities. Feel free to reach out if you want to collaborate!
          </p>
          <a href="mailto:triard78@gmail.com" className="btn-gold">
            Start a Project ↗
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Tri Ardiansyah. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="https://github.com/triard13" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tri-ardiansyah-0b398817a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/tria.ui/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
              <h2 style={{fontSize: '2.5rem', fontWeight: 600, color: '#000', lineHeight: 1}}>{selectedProject.title}</h2>
            </div>
            
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px'}}>
              {selectedProject.tags.map(tag => (
                <span key={tag} style={{padding: '6px 14px', background: '#f3f4f6', borderRadius: '100px', fontSize: '0.85rem', color: '#333', fontWeight: 500}}>{tag}</span>
              ))}
            </div>

            {selectedProject.image ? (
              <div style={{marginBottom: '32px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb'}}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{width: '100%', display: 'block'}} />
              </div>
            ) : (
              <div style={{background: '#f8f9fa', padding: '32px', borderRadius: '16px', marginBottom: '32px', border: '1px dashed #cbd5e1', textAlign: 'center'}}>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>[ Placeholder for High-Resolution Project Screenshot ]</p>
              </div>
            )}

            <h3 style={{fontSize: '1.5rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>About the Project</h3>
            <div style={{fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '32px'}}>
              {selectedProject.fullDesc}
            </div>

            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-black" style={{marginTop: 0}}>
              Visit Live Site ↗
            </a>
          </div>
        </div>
      )}

    </main>
  );
}
