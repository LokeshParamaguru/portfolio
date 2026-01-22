import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
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

  return (
    <>
      <Head>
        <title>Projects - Portfolio</title>
        <meta name="description" content="Projects page - Showcasing my latest web development projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.projects}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Imagination Trumps Knowledge!</h1>
          
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <Link href={project.link} className={styles.projectLink}>
                    View Project
                    <Image src="/images/svgs/external-link.svg" alt="External link" width={20} height={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
