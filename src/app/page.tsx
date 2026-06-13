"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
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

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>Successfully built and launched a professional, modern, and fully functional landing page. The page effectively highlights Prowriting&apos;s value propositions with a seamless user experience, which helps increase user engagement and product conversion rates.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "KalaDana",
    image: "/kaladana.png",
    shortDesc: "A comprehensive personal finance and wealth management web application designed to help users track expenses, manage budgets, and monitor investment portfolios efficiently.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Recharts"],
    link: "#",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>The challenge was to build a secure, real-time financial tracking application that handles complex data visualization while remaining intuitive for everyday users. It required integrating robust authentication, managing state across multiple financial accounts, and presenting analytics in an easily digestible dashboard.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As a Full-Stack Developer, I was responsible for the end-to-end development of the application. This included designing the database architecture in Supabase, implementing secure authentication, and building a responsive, data-driven user interface with Next.js and Tailwind CSS.</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Authentication:</strong> Secure user registration and login to start tracking personal finances.</li>
            <li><strong>Dashboard Overview:</strong> Monitor balance summaries, monthly expenses, and financial health metrics on the main page.</li>
            <li><strong>Wallet & Accounts:</strong> Manage and add various funding sources including Cash, Bank Accounts, and E-Wallets.</li>
            <li><strong>Transaction Tracking:</strong> Record every income, expense, and transfer between accounts with appropriate categorization.</li>
            <li><strong>Budgeting System:</strong> Set monthly spending limits per category to maintain control over expenses.</li>
            <li><strong>Investment Portfolio:</strong> Track capital growth and market value of investment assets such as Gold, Mutual Funds, and Stocks.</li>
            <li><strong>Data Analytics:</strong> Utilize interactive charts and diagrams to analyze trends and expense distribution over time.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>A high-performance, secure, and user-friendly financial management platform. The application empowers users to take control of their personal finances, offering clear insights into their spending habits and investment growth through a comprehensive and interactive dashboard.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Mellydia POS",
    image: "/mellydia.png",
    shortDesc: "A comprehensive point-of-sale and inventory management system designed for retail operations, enabling efficient sales tracking, purchase management, and automated stock level alerts.",
    tags: ["CodeIgniter 3", "MySQL", "Bootstrap"],
    link: "#",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>The client, CV Tr. Makmur Sentosa, required a robust dashboard to seamlessly conduct daily retail operations. The challenge was to integrate comprehensive inventory control, transaction processing, and dynamic financial reporting into a single intuitive system, while also automating stock level notifications to prevent shortages.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As a Full-Stack Developer, I built the entire system architecture from the ground up using CodeIgniter 3, structured the MySQL database for efficient data handling, and designed a responsive interface utilizing Bootstrap.</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Master Item Management:</strong> Track product details, manage categories, and handle supplier information and purchase orders.</li>
            <li><strong>Transaction Management:</strong> Process sales efficiently with an intuitive POS interface, apply discounts, and manage customer data for personalized service.</li>
            <li><strong>Reporting System:</strong> Generate detailed sales performance, inventory turnover, and financial profitability reports.</li>
            <li><strong>Automated Alerts:</strong> Send notifications to sellers when products hit minimum stock levels to streamline restocking.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>The Mellydia POS system significantly improved retail operations by automating inventory management and streamlining sales processes. It provided the client with valuable insights through comprehensive reporting and enhanced overall customer satisfaction by reducing checkout times.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "BKK SIGMA SMKN 1 BOJONEGORO",
    image: "/bkk-smk.png",
    shortDesc: "A specialized job portal and career center platform designed to bridge the gap between students, alumni, and the industrial sector by facilitating job placements.",
    tags: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    link: "#",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>Bursa Kerja Khusus (BKK) SMKN 1 Bojonegoro needed a dedicated platform to facilitate students and graduates in accessing job opportunities aligned with their skills. The challenge was to create a digital bridge between the school and the industrial sector, establishing a streamlined system to manage job vacancies, track alumni placements, and handle company partnerships efficiently.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As a Full-Stack Developer, I designed and developed the platform from the ground up using Laravel and MySQL for robust data management, while leveraging Tailwind CSS and Alpine.js to create a dynamic, responsive user interface.</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Job Vacancy Management:</strong> Track and manage job vacancies with automated notifications for new listings to keep students and alumni updated.</li>
            <li><strong>Alumni Tracking and Placement:</strong> Maintain a comprehensive database of alumni employment status and track career progress to strengthen industry relationships.</li>
            <li><strong>Student and Company Management:</strong> Manage student profiles with their skills and preferences, alongside company profiles for easier job matching.</li>
            <li><strong>Reporting and Analytics:</strong> Generate detailed reports on employment rates, popular job sectors, and company engagement to gain insights into job market trends.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>The platform has effectively facilitated employment opportunities for students and alumni, contributing to the school&apos;s reputation as a reliable source of skilled workers. It strengthened relationships with industry partners and provided valuable insights into employment trends, aiding in strategic planning for curriculum adjustments.</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Bengkel Hidrolik Sulaiman Jaya",
    image: "/hidrolik.png",
    shortDesc: "A modern landing page and company profile for Bengkel Hidrolik Sulaiman Jaya, featuring services, portfolio, client testimonials, and direct WhatsApp integration.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://bengkel-hidrolik-sulaiman.vercel.app/",
    fullDesc: (
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>The Challenge:</strong>
          <p style={{marginTop: '8px'}}>Building a professional digital presence for a mechanical/industrial service business, which is typically conventional. The challenge was to design a sleek and modern industrial-themed user interface (UI), ensure service information is easy to understand, and make the booking/consultation process seamless for potential clients, without compromising page loading speed.</p>
        </div>
        
        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>My Role:</strong>
          <p style={{marginTop: '8px'}}>As Front-End Developer / Web Developer, I was fully responsible for translating business requirements into a functional, responsive web interface across various devices, and integrating dynamic animations for a better user experience (UX).</p>
        </div>

        <div>
          <strong style={{color: '#000', fontSize: '1.1rem'}}>Key Features:</strong>
          <ul style={{paddingLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <li><strong>Responsive & Mobile-First Design:</strong> Seamlessly adapts to various screen sizes.</li>
            <li><strong>Theme Toggle:</strong> Dark/Light Mode with a floating navbar.</li>
            <li><strong>Dynamic Animations:</strong> Smooth scrolling and animations using Framer Motion.</li>
            <li><strong>Interactive Gallery:</strong> Portfolio gallery showcasing past works.</li>
            <li><strong>Client Trust:</strong> FAQ Accordion & Client Testimonials.</li>
            <li><strong>Direct Integration:</strong> WhatsApp Call-to-Action for instant consultation.</li>
          </ul>
        </div>

        <div style={{background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginTop: '8px'}}>
          <strong style={{color: '#8c6023', fontSize: '1.1rem'}}>The Outcome:</strong>
          <p style={{marginTop: '8px', color: '#333'}}>Successfully launched a high-performance, modern, and professional landing page. The website enhanced the online credibility of Bengkel Hidrolik Sulaiman Jaya, made it easier for clients to find service information, and increased potential customer conversions through a direct and simple WhatsApp communication flow.</p>
        </div>
      </div>
    )
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    if (selectedProject || isCreditsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isCreditsOpen]);

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
          <button onClick={toggleTheme} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 8px'}} aria-label="Toggle Dark Mode">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a href="mailto:triard78@gmail.com">Let&apos;s Connect ↗</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="hero-pill">
          Hello 👋, Let&apos;s Build Something Extraordinary
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="hero-headline">
          Hi, I&apos;m Ardi<br/>
          your technical partner <span className="grey">for</span><br/>
          <span className="grey">building standout</span><br/>
          <span className="grey">web solutions.</span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="hero-subtitle-container">
          A <strong>Freelance Web Developer</strong> crafting high-performance websites and seamless digital experiences.
        </motion.div>

        <motion.a variants={fadeInUp} href="mailto:triard78@gmail.com" className="btn-black">
          Let&apos;s Connect
        </motion.a>

        {/* Floating Avatar (Bottom Left) */}
        <motion.div 
          variants={fadeInUp} 
          className="floating-avatar"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.png" alt="Tri Ardiansyah" style={{color: 'transparent'}}/>
        </motion.div>

        {/* Vertical Socials (Bottom Right) */}
        <motion.div variants={fadeInUp} className="vertical-socials">
          <a href="https://www.linkedin.com/in/tri-ardiansyah-0b398817a/" target="_blank" rel="noopener noreferrer" className="social-circle" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/triard13" target="_blank" rel="noopener noreferrer" className="social-circle" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.instagram.com/tria.ui/" target="_blank" rel="noopener noreferrer" className="social-circle" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </motion.div>
      </motion.section>

      {/* Tech Stack Marquee */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {/* Duplicate items for infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="tech-item">✦ Laravel</div>
              <div className="tech-item">✦ Next.js</div>
              <div className="tech-item">✦ React.js</div>
              <div className="tech-item">✦ Figma</div>
              <div className="tech-item">✦ Tailwind CSS</div>
              <div className="tech-item">✦ Express.js</div>
              <div className="tech-item">✦ SQL</div>
              <div className="tech-item">✦ NoSQL</div>
              <div className="tech-item">✦ CodeIgniter</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <motion.div 
        id="about" 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        style={{marginBottom: '100px', display: 'flex', flexDirection: 'column', gap: '48px'}}
      >
        <motion.h2 variants={fadeInUp} style={{fontSize: '4.5rem', margin: 0, lineHeight: 0.75, fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-primary)', paddingLeft: '4px'}}>
          about me<span style={{color: 'var(--accent-text)'}}>.</span>
        </motion.h2>
          
        <motion.div variants={fadeInUp} className="about-wrapper">
          <h3 className="about-headline">
            <span style={{color: 'var(--text-primary)'}}>A web developer who </span>
            <span style={{color: 'var(--text-tertiary)'}}>blends <br className="hidden md:block" /> logic with creativity.</span>
          </h3>
          
          <p className="about-desc">
            I&apos;m Ardi, a freelance web developer who believes that meaningful digital experiences start with understanding the user. I help businesses and startups turn complex problems into intuitive, scalable web applications.
          </p>

          {/* Skill Tags */}
          <div className="skill-tags-wrapper">
            {['Frontend Development', 'Backend Architecture', 'UI/UX Implementation', 'REST APIs', 'Slicing', 'Landing Pages'].map(tag => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Rest of the Portfolio (Bento Grid) */}
      <div className="bento-grid">
        
        {/* Projects Section */}
        <motion.div 
          id="projects" className="col-span-4" 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{marginTop: '0', display: 'flex', flexDirection: 'column', gap: '48px'}}
        >
          <motion.h2 variants={fadeInUp} style={{fontSize: '4.5rem', margin: 0, lineHeight: 0.75, fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-primary)', paddingLeft: '4px'}}>
            projects<span style={{color: 'var(--accent-text)'}}>.</span>
          </motion.h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          
          {/* Projects mapped from data array */}
          {projectsData.map((project) => (
            <motion.div 
              variants={fadeInUp}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{position: 'relative', padding: '32px', borderRadius: '16px', background: '#161616', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid #2a2a2a'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#10b981'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
            >
              <div style={{position: 'absolute', bottom: '-35px', right: '-15px', color: 'rgba(255,255,255,0.08)', fontSize: '12rem', fontWeight: 800, lineHeight: 1, pointerEvents: 'none', zIndex: 0}}>{project.id}</div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', zIndex: 1}}>
                <h3 style={{fontSize: '1.2rem', fontWeight: 500, color: '#ffffff', maxWidth: '80%'}}>{project.title}</h3>
                <span style={{fontSize: '1.4rem', color: '#10b981', fontWeight: 500}}>↗</span>
              </div>
              <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6, marginBottom: '40px', flexGrow: 1, zIndex: 1, maxWidth: '90%'}}>
                {project.shortDesc}
              </p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', zIndex: 1}}>
                {project.tags.map(tag => (
                  <span key={tag} style={{padding: '6px 14px', background: 'rgba(255,255,255,0.05)', color: '#e5e5e5', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)'}}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div 
          id="services" className="col-span-4" 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          style={{marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
          <motion.h2 variants={fadeInUp} style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-primary)', paddingLeft: '4px'}}>
            what I do<span style={{color: 'var(--accent-text)'}}>.</span>
          </motion.h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            {/* Service 1 */}
            <motion.div 
              variants={fadeInUp}
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(16, 185, 129, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Front-End Development</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Develop responsive and engaging user interfaces from design to implementation, ensuring exceptional user experience through effective UI/UX design.
                </p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              variants={fadeInUp}
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(16, 185, 129, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Project Management</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Plan, organize, and manage web development projects from start to finish. Collaborate with clients and teams to ensure projects are completed on schedule.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              variants={fadeInUp}
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(16, 185, 129, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Back-End Development</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Create and manage servers, databases, and application logic, and provide APIs and integration with third-party services.
                </p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              variants={fadeInUp}
              style={{padding: '32px', borderRadius: '16px', background: '#161616', border: '1px solid #2a2a2a', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default'}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(16, 185, 129, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px'}}>Maintenance & Support</h3>
                <p style={{fontSize: '0.9rem', color: '#a3a3a3', lineHeight: 1.6}}>
                  Monitor website performance and perform regular maintenance to ensure security and speed. Provide technical support according to client needs.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Experience Timeline Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        style={{marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '24px'}}
      >
        <motion.h2 variants={fadeInUp} style={{fontSize: '3.5rem', margin: 0, lineHeight: 0.8, fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-primary)', paddingLeft: '4px'}}>
          experience<span style={{color: 'var(--accent-text)'}}>.</span>
        </motion.h2>
        
        <div className="timeline-container">
          {/* Timeline Item 1 */}
          <motion.div variants={fadeInUp} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Freelance Web Developer</h3>
              <div className="timeline-meta">Self-Employed · Remote | Aug 2021 - Present</div>
              <p className="timeline-desc">
                Built and developed custom web applications for various clients. Experienced in using Laravel, PHP, and modern front-end technologies to deliver scalable and functional digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div variants={fadeInUp} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Developer Intern</h3>
              <div className="timeline-meta">PT. Ekosjaya Abadi Lestari · Sidoarjo | Mar 2021 - Apr 2021</div>
              <p className="timeline-desc">
                Developed a warehouse inventory information system using the CodeIgniter 3 framework to optimize tracking and stock management.
              </p>
            </div>
          </motion.div>
          
          {/* Timeline Item 3 */}
          <motion.div variants={fadeInUp} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Developer Intern</h3>
              <div className="timeline-meta">CV. TR Makmur Sentosa · Sidoarjo | Jan 2021 - Feb 2021</div>
              <p className="timeline-desc">
                Actively participated in web development projects during the internship. Assisted the engineering team in building, testing, and maintaining website features.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="contact-section"
      >
        <motion.div variants={fadeInUp} className="contact-content">
          <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1}}>
            Have an idea?<br/>Let&apos;s build it together.
          </h2>
          <p style={{fontSize: '1.1rem', color: '#a3a3a3', maxWidth: '500px', margin: '0 auto'}}>
            I&apos;m currently available for new projects and open to exciting freelance opportunities. Feel free to reach out if you want to collaborate!
          </p>
          <a href="mailto:triard78@gmail.com" className="btn-gold">
            Start a Project ↗
          </a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Tri Ardiansyah. All rights reserved.
        </div>
        <div className="footer-links">
          <button onClick={() => setIsCreditsOpen(true)} style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline'}}>Design Credits</button>
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
              <h2 style={{fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1}}>{selectedProject.title}</h2>
            </div>
            
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px'}}>
              {selectedProject.tags.map(tag => (
                <span key={tag} style={{padding: '6px 14px', background: 'var(--bg-tertiary)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500}}>{tag}</span>
              ))}
            </div>

            {selectedProject.image ? (
              <div style={{marginBottom: '32px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)'}}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{width: '100%', display: 'block'}} />
              </div>
            ) : (
              <div style={{background: 'var(--bg-secondary)', padding: '32px', borderRadius: '16px', marginBottom: '32px', border: '1px dashed var(--border-color)', textAlign: 'center'}}>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>[ Placeholder for High-Resolution Project Screenshot ]</p>
              </div>
            )}

            <h3 style={{fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px'}}>About the Project</h3>
            <div style={{fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px'}}>
              {selectedProject.fullDesc}
            </div>

            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-black" style={{marginTop: 0}}>
              Visit Live Site ↗
            </a>
          </div>
        </div>
      )}

      {/* Credits Modal */}
      {isCreditsOpen && (
        <div className="modal-backdrop" onClick={() => setIsCreditsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{maxWidth: '600px', padding: '40px'}}>
            <button className="modal-close" onClick={() => setIsCreditsOpen(false)}>✕</button>
            
            <h2 style={{fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px'}}>Design Inspiration</h2>
            
            <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px'}}>
              This portfolio design was heavily inspired by the amazing work of these talented designers on Dribbble:
            </p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <a href="https://dribbble.com/shots/26617911-Dewangga-Portfolio-Website-Portfolio" target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: 'column', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', transition: 'all 0.2s ease'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <strong style={{color: 'var(--text-primary)', fontSize: '1.1rem'}}>Dewangga - Portfolio Website</strong>
                <span style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px'}}>by Purwa Adi Wicaksana</span>
              </a>
              
              <a href="https://dribbble.com/shots/22761465-Personal-Portofolio-Website" target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: 'column', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', transition: 'all 0.2s ease'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <strong style={{color: 'var(--text-primary)', fontSize: '1.1rem'}}>Personal Portfolio Website</strong>
                <span style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px'}}>by Muhammad Khozinul Asror</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
