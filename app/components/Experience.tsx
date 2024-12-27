'use client'
import styles from './Experience.module.css'
import { motion } from 'framer-motion'
import { Briefcase, Code, Laptop } from 'lucide-react'

export default function Experience() {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.gradientText}>Experience</h2>
      <motion.div 
        className={styles.timeline}
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.timelineItem} variants={itemVariants}>
          <div className={styles.timelineIcon}>
            <Briefcase size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3>Senior Developer</h3>
            <p>Tech Corp</p>
            <p>2020 - Present</p>
            <p>Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.</p>
          </div>
        </motion.div>
        <motion.div className={styles.timelineItem} variants={itemVariants}>
          <div className={styles.timelineIcon}>
            <Code size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3>Full Stack Developer</h3>
            <p>Web Solutions Inc.</p>
            <p>2017 - 2020</p>
            <p>Developed and maintained various web applications using React, Node.js, and PostgreSQL.</p>
          </div>
        </motion.div>
        <motion.div className={styles.timelineItem} variants={itemVariants}>
          <div className={styles.timelineIcon}>
            <Laptop size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3>Junior Developer</h3>
            <p>StartUp Co.</p>
            <p>2015 - 2017</p>
            <p>Assisted in the development of the company's main product, focusing on front-end technologies.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

