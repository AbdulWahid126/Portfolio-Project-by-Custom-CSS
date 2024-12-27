'use client'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application using React and integrating with a third-party API.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#"
    }
  ]

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
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.gradientText}>My Projects</h2>
        <motion.div 
          className={styles.projectGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                <a href={project.link} className={styles.projectLink} aria-label={`View ${project.title} project`}>
                  <ExternalLink size={20} />
                </a>
                <a href={project.github} className={styles.projectLink} aria-label={`View ${project.title} GitHub repository`}>
                  <GitHub size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

