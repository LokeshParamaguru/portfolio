import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <div className={styles.profileImageContainer}>
            <Image
              src="/images/profile/developer-pic-1.png"
              alt="Developer"
              width={500}
              height={500}
              className={styles.profileImage}
              priority
            />
            <div className={styles.circularTextContainer}>
              <Image
                src="/images/circular-text.png"
                alt="Software Developer"
                width={280}
                height={280}
                className={styles.circularText}
              />
              <button className={styles.hireMeButton}>Hire Me</button>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <h1 className={styles.mainHeading}>
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p className={styles.description}>
            Full Stack Developer with 4+ years of experience in Django, React, and AWS. Expertise in building scalable applications, optimizing performance, and integrating APIs for industrial and healthcare solutions. Explore my latest projects showcasing my expertise in full-stack development.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/Lokesh_Resume_2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
              Resume
              <Image src="/images/svgs/external-link.svg" alt="External link" width={20} height={20} />
            </a>
            <a href="tel:+918072876011" className={styles.contactButton}>
              Contact
            </a>
          </div>
          <div className={styles.lightbulb}>
            <Image
              src="/images/svgs/miscellaneous_icons_1.svg"
              alt="Lightbulb"
              width={100}
              height={100}
              className={styles.lightbulbIcon}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
