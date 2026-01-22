import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import styles from '@/styles/About.module.css'

export default function About() {
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

  return (
    <>
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="About page - Full Stack Developer with expertise in Django, React, and AWS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Passion Fuels Purpose!</h1>
          
          <div className={styles.introSection}>
            <div className={styles.introText}>
              <p className={styles.introParagraph}>
                Full Stack Developer with 4+ years of experience in Django, React, and AWS. Expertise in building scalable applications, optimizing performance, and integrating APIs for industrial and healthcare solutions. Passionate about writing clean, efficient code and collaborating with cross-functional teams to drive innovation.
              </p>
              <p className={styles.introParagraph}>
                I believe that development is about more than just writing code – it&apos;s about solving problems and 
                creating efficient, scalable solutions for users.
              </p>
              <p className={styles.introParagraph}>
                Whether I&apos;m working on a web application, ERP system, or 
                other digital product, I bring my commitment to code excellence and performance optimization to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/images/profile/developer-pic-2.png"
                alt="Developer"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.jobTitle}>{exp.title} @{exp.company}</h3>
                    <p className={styles.jobPeriod}>{exp.period} | {exp.location}</p>
                    <p className={styles.jobDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.jobTitle}>{edu.degree}</h3>
                    <p className={styles.jobPeriod}>{edu.period} | {edu.school}</p>
                    <p className={styles.jobDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
