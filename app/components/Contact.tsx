'use client'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'

export default function Contact() {
  const formVariants = {
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
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          className={styles.gradientText}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.form 
          className={styles.contactForm}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </motion.div>
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </motion.div>
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </motion.div>
          <motion.button 
            type="submit" 
            className={styles.submitButton}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

