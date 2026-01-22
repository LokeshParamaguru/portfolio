import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const navbar = document.querySelector(`.${styles.navbar}`)
      const navbarHeight = navbar ? navbar.offsetHeight : 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClickWithClose = (e, targetId) => {
    handleNavClick(e, targetId)
    setMobileMenuOpen(false)
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>LP</div>
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        
        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
          <a href="#home" onClick={(e) => handleNavClickWithClose(e, 'home')} className={styles.navLink}>Home</a>
          <a href="#about" onClick={(e) => handleNavClickWithClose(e, 'about')} className={styles.navLink}>About</a>
          <a href="#projects" onClick={(e) => handleNavClickWithClose(e, 'projects')} className={styles.navLink}>Projects</a>
          <a href="#technologies" onClick={(e) => handleNavClickWithClose(e, 'technologies')} className={styles.navLink}>Technologies</a>
        </div>
        
        <div className={`${styles.navRight} ${mobileMenuOpen ? styles.navRightOpen : ''}`}>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/in/lokesh0703" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <Image src="/images/svgs/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="mailto:lokeshshc16@gmail.com" className={styles.icon}>
              <Image src="/images/svgs/gmail.svg" alt="Gmail" width={24} height={24} />
            </a>
            <a href="https://github.com/LOKESHLOKI07/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <Image src="/images/svgs/logo-github.svg" alt="GitHub" width={24} height={24} />
            </a>
            {mounted && (
              <button onClick={toggleTheme} className={styles.themeToggle}>
                {theme === 'light' ? (
                  <Image src="/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg" alt="Dark mode" width={24} height={24} />
                ) : (
                  <Image src="/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg" alt="Light mode" width={24} height={24} />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
