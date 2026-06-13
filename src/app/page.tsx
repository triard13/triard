"use client";

import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "Toko Emas Majusari",
    shortDesc: "As a Full-Stack Developer, I built a comprehensive system featuring a landing page, inventory management, and a streamlined sales processing workflow.",
    tags: ["Laravel", "TailwindCSS", "JS", "MySQL"],
    fullDesc: "Detailed case study for Toko Emas Majusari. This section will contain extended descriptions, screenshots, and problem-solving methodologies used during the development of the landing page, inventory, and sales system.",
    link: "#"
  },
  {
    id: 2,
    title: "Aircraft Communications Addressing",
    shortDesc: "In this project, I developed a web-based communication gateway between ground stations and pilots, enabling efficient data exchange and real-time communication and symbiosis.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    fullDesc: "Detailed case study for Aircraft Communications Addressing. Here we can add screenshots of the ground station interface and technical details about the real-time data exchange implementation.",
    link: "#"
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

  return (
    <main>
      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="nav-logo">A</div>
        <div className="nav-links">
          <a href="#">About Me</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
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

      {/* Rest of the Portfolio (Bento Grid) */}
      <div className="bento-grid">
        
        {/* Projects Section */}
        <div className="col-span-4" style={{marginTop: '0', display: 'flex', flexDirection: 'column', gap: '48px'}}>
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
        <div className="col-span-4" style={{marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
          <h2 style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: '#000', paddingLeft: '4px'}}>
            what I do<span style={{color: '#dba55c'}}>.</span>
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            {/* Service 1 */}
            <div style={{padding: '32px', borderRadius: '8px', background: '#e8e8e8'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>Front-End Development</h3>
              <p style={{fontSize: '0.9rem', color: '#333', lineHeight: 1.6}}>
                Develop responsive and engaging user interfaces from design to implementation, ensuring exceptional user experience through effective UI/UX design implementation.
              </p>
            </div>

            {/* Service 2 */}
            <div style={{padding: '32px', borderRadius: '8px', background: '#e8e8e8'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>Project Management</h3>
              <p style={{fontSize: '0.9rem', color: '#333', lineHeight: 1.6}}>
                Plan, organize, and manage web development projects from start to finish. Collaborate with clients and teams to ensure projects are completed on schedule.
              </p>
            </div>

            {/* Service 3 */}
            <div style={{padding: '32px', borderRadius: '8px', background: '#e8e8e8'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>Back-End Development</h3>
              <p style={{fontSize: '0.9rem', color: '#333', lineHeight: 1.6}}>
                Create and manage servers, databases, and application logic, and provide APIs and integration with third-party services.
              </p>
            </div>

            {/* Service 4 */}
            <div style={{padding: '32px', borderRadius: '8px', background: '#e8e8e8'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>Maintenance and Support</h3>
              <p style={{fontSize: '0.9rem', color: '#333', lineHeight: 1.6}}>
                Monitor website performance and perform regular maintenance to ensure security and speed. Provide technical support according to client needs.
              </p>
            </div>
          </div>
        </div>

      </div>

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

            <div style={{background: '#f8f9fa', padding: '32px', borderRadius: '16px', marginBottom: '32px', border: '1px dashed #cbd5e1', textAlign: 'center'}}>
              <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>[ Placeholder for High-Resolution Project Screenshot ]</p>
            </div>

            <h3 style={{fontSize: '1.5rem', fontWeight: 600, color: '#000', marginBottom: '16px'}}>About the Project</h3>
            <p style={{fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px'}}>
              {selectedProject.fullDesc}
            </p>

            <a href={selectedProject.link} className="btn-black" style={{marginTop: 0}} onClick={(e) => e.preventDefault()}>
              Visit Live Site ↗
            </a>
          </div>
        </div>
      )}

    </main>
  );
}
