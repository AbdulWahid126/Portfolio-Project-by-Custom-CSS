'use client'
import { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>My Portfolio</Link>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#experience" onClick={toggleMenu}>Experience</Link></li>
          <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

