'use client'
import styles from './About.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Server, Globe } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className={styles.about}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className={styles.gradientText}>About Me</motion.h2>
        <div className={styles.content}>
          <motion.div className={styles.imageContainer} variants={itemVariants}>
            <Image
              src="/assets/about.jpg?height=300&width=300"
              alt="John Doe"
              width={300}
              height={300}
              className={styles.profileImage}
            />
          </motion.div>
          <div className={styles.textContent}>
            <motion.p variants={itemVariants}>
              Hello! I am John Doe, a passionate Full Stack Developer with over 5 years of experience in creating web applications. 
              I specialize in JavaScript technologies, particularly React for front-end and Node.js for back-end development.
            </motion.p>
            <motion.p variants={itemVariants}>
              My journey in tech started with a Computer Science degree, and since then, I ve been constantly learning and adapting to new technologies. 
              I am particularly interested in creating user-friendly, scalable applications that solve real-world problems.
            </motion.p>
            <motion.p variants={itemVariants}>
              When I am not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
            </motion.p>
          </div>
        </div>
        <motion.div className={styles.skills} variants={itemVariants}>
          <div className={styles.skill}>
            <Code size={32} />
            <h3>Front-end</h3>
            <p>React, Vue, Angular</p>
          </div>
          <div className={styles.skill}>
            <Server size={32} />
            <h3>Back-end</h3>
            <p>Node.js, Python, Java</p>
          </div>
          <div className={styles.skill}>
            <Globe size={32} />
            <h3>Full Stack</h3>
            <p>MERN, MEAN, JAMstack</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

