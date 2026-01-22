import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import aboutStyles from '@/styles/About.module.css'
import projectsStyles from '@/styles/Projects.module.css'
import articlesStyles from '@/styles/Articles.module.css'

export default function Home() {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Getmax Healthcare Pvt Ltd',
      period: 'January 2024 - Now',
      location: 'Chennai, Tamil Nadu',
      description: 'Developing and maintaining applications using Django, React, and Frappe for ERP solutions. Working with ERP systems using Frappe, customizing modules to meet business needs.'
    },
    {
      title: 'Software Developer',
      company: 'Teckost IT Services Pvt Ltd',
      period: 'August 2023 - January 2024',
      location: 'Chennai, Tamil Nadu',
      description: 'Developed and optimized Django applications with Python, MySQL, REST APIs, HTML, CSS, and JavaScript. Managed AWS deployments to ensure scalability and high availability.'
    },
    {
      title: 'Python Developer',
      company: 'Futurenet Technologies',
      period: 'September 2022 - July 2023',
      location: 'Chennai, Tamil Nadu',
      description: 'Designed and developed full-stack applications using Django and JavaScript frameworks. Integrated and optimized SQL databases, ensuring efficient data management.'
    },
    {
      title: 'Programmer Trainee',
      company: 'Hawkshaw Developers',
      period: 'November 2021 - August 2022',
      location: 'Chennai, Tamil Nadu',
      description: 'Built and maintained dynamic web applications. Assisted in cloud deployment and database management for high-performance applications.'
    }
  ]

  const education = [
    {
      degree: 'BE EEE',
      school: 'Anna University',
      period: '2016-2020',
      description: 'Bachelor of Engineering in Electrical and Electronics Engineering.'
    }
  ]

  const projects = [
    {
      title: 'Industrial Asset Data Acquisition & Integration',
      description: 'Developed a React-Django system for real-time data acquisition from industrial assets, including energy meters, sensors, and IoT devices. Users provide IP and Port, allowing dynamic connections via Python-based connectors. Supports MQTT, OPC UA, and Modbus for seamless integration.',
      image: '/images/projects/crypto-screener-cover-image.jpg',
      link: '#'
    },
    {
      title: 'Company Registration and Landing Page Management',
      description: 'Developed a web-based system for company registration and landing page management. The platform allows businesses to register, submit branding details, and get a dedicated landing page upon admin approval.',
      image: '/images/projects/portfolio-cover-image.jpg',
      link: '#'
    },
    {
      title: 'Automated Report Generation and Data Visualization for OTRS',
      description: 'Built a Django-based web application to automate report generation for OTRS, improving efficiency through an interactive dashboard and data visualization. Reduced manual effort by 90%, enabling managers to focus on decision-making.',
      image: '/images/projects/nft-collection-website-cover-image.jpg',
      link: '#'
    },
    {
      title: 'Customer EPO Analysis and Visualization',
      description: 'Enhanced data analytics platform to analyze customer EPO data, detect anomalies, and visualize trends. Implemented interactive dashboards for real-time monitoring using Dash & Plotly.',
      image: '/images/projects/agency-website-cover-image.jpg',
      link: '#'
    }
  ]

  const articles = [
    {
      title: 'Build A Custom Pagination Component In Reactjs From Scratch',
      description: 'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
      readTime: '9 min read',
      image: '/images/articles/pagination component in reactjs.jpg',
      link: '#'
    },
    {
      title: 'Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens',
      description: 'Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.',
      readTime: '10 min read',
      image: '/images/articles/create loading screen in react js.jpg',
      link: '#'
    },
    {
      title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
      description: 'Learn how to build a reusable custom hook for form validation in ReactJS. Handle inputs and errors efficiently with this comprehensive guide.',
      readTime: '8 min read',
      image: '/images/articles/form validation in reactjs using custom react hook.png',
      link: '#'
    },
    {
      title: 'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
      description: 'Master the art of smooth scrolling in ReactJS. Learn step-by-step techniques to create seamless scrolling experiences in your React applications.',
      readTime: '7 min read',
      image: '/images/articles/smooth scrolling in reactjs.png',
      link: '#'
    },
    {
      title: 'Creating An Efficient Modal Component In React Using Hooks And Portals',
      description: 'Learn how to create an efficient modal component in React using hooks and portals. Build reusable modals with proper accessibility and performance.',
      readTime: '9 min read',
      image: '/images/articles/create modal component in react using react portals.png',
      link: '#'
    },
    {
      title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
      description: 'Create a beautiful and functional todo list app using React, Redux for state management, and Framer Motion for smooth animations.',
      readTime: '12 min read',
      image: '/images/articles/todo list app built using react redux and framer motion.png',
      link: '#'
    },
    {
      title: 'Redux Simplified: A Beginner\'s Guide For Web Developers',
      description: 'A comprehensive beginner\'s guide to Redux. Learn the fundamentals of state management with Redux in a simple and easy-to-understand way.',
      readTime: '11 min read',
      image: '/images/articles/What is Redux with easy explanation.png',
      link: '#'
    },
    {
      title: 'What Is Higher Order Component (Hoc) In React?',
      description: 'Understand Higher Order Components (HOC) in React. Learn how to use HOCs to enhance component functionality and reuse code effectively.',
      readTime: '6 min read',
      image: '/images/articles/What is higher order component in React.jpg',
      link: '#'
    }
  ]

  return (
    <>
      <Head>
        <title>Portfolio - Lokesh P</title>
        <meta name="description" content="Full Stack Developer portfolio showcasing projects and expertise in Django, React, and AWS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className={aboutStyles.about}>
        <div className={aboutStyles.container}>
          <h1 className={aboutStyles.heading}>Passion Fuels Purpose!</h1>
          
          <div className={aboutStyles.introSection}>
            <div className={aboutStyles.introText}>
              <p className={aboutStyles.introParagraph}>
                Full Stack Developer with 3+ years of experience in Django, React, and AWS. Expertise in building scalable applications, optimizing performance, and integrating APIs for industrial and healthcare solutions. Passionate about writing clean, efficient code and collaborating with cross-functional teams to drive innovation.
              </p>
              <p className={aboutStyles.introParagraph}>
                I believe that development is about more than just writing code – it's about solving problems and 
                creating efficient, scalable solutions for users.
              </p>
              <p className={aboutStyles.introParagraph}>
                Whether I'm working on a web application, ERP system, or 
                other digital product, I bring my commitment to code excellence and performance optimization to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className={aboutStyles.profileImageWrapper}>
              <Image
                src="/images/profile/developer-pic-2.png"
                alt="Developer"
                width={400}
                height={400}
                className={aboutStyles.profileImage}
                priority
              />
            </div>
          </div>

          <section className={aboutStyles.section}>
            <h2 className={aboutStyles.sectionTitle}>Experience</h2>
            <div className={aboutStyles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={aboutStyles.timelineItem}>
                  <div className={aboutStyles.timelineContent}>
                    <h3 className={aboutStyles.jobTitle}>{exp.title} @{exp.company}</h3>
                    <p className={aboutStyles.jobPeriod}>{exp.period} | {exp.location}</p>
                    <p className={aboutStyles.jobDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={aboutStyles.section}>
            <h2 className={aboutStyles.sectionTitle}>Education</h2>
            <div className={aboutStyles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={aboutStyles.timelineItem}>
                  <div className={aboutStyles.timelineContent}>
                    <h3 className={aboutStyles.jobTitle}>{edu.degree}</h3>
                    <p className={aboutStyles.jobPeriod}>{edu.period} | {edu.school}</p>
                    <p className={aboutStyles.jobDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={projectsStyles.projects}>
        <div className={projectsStyles.container}>
          <h1 className={projectsStyles.heading}>Imagination Trumps Knowledge!</h1>
          
          <div className={projectsStyles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={projectsStyles.projectCard}>
                <div className={projectsStyles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={projectsStyles.projectImage}
                  />
                </div>
                <div className={projectsStyles.projectInfo}>
                  <h3 className={projectsStyles.projectTitle}>{project.title}</h3>
                  <p className={projectsStyles.projectDescription}>{project.description}</p>
                  <Link href={project.link} className={projectsStyles.projectLink}>
                    View Project
                    <Image src="/images/svgs/external-link.svg" alt="External link" width={20} height={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className={articlesStyles.articles}>
        <div className={articlesStyles.container}>
          <h1 className={articlesStyles.heading}>Words Can Change The World!</h1>
          
          <div className={articlesStyles.articlesGrid}>
            {articles.map((article, index) => (
              <Link key={index} href={article.link} className={articlesStyles.articleCard}>
                <div className={articlesStyles.imageContainer}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className={articlesStyles.articleImage}
                  />
                </div>
                <div className={articlesStyles.articleInfo}>
                  <h3 className={articlesStyles.articleTitle}>{article.title}</h3>
                  <p className={articlesStyles.articleDescription}>{article.description}</p>
                  <div className={articlesStyles.articleMeta}>
                    <span className={articlesStyles.readTime}>{article.readTime}</span>
                    <Image src="/images/svgs/external-link.svg" alt="External link" width={16} height={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
