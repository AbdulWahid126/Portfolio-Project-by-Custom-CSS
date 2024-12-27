'use client'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/assets/programmer.jpg?height=1080&width=1920"
        alt="Abstract background with code snippets"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.heroBackground}
      />
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={styles.gradientText}>John Doe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.a 
          href="#contact" 
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
      <motion.div 
        className={styles.scrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}

