"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section from "@/components/section"
import SectionHeading from "@/components/section-heading"

const projects = [
  {
    id: 1,
    title: "AI-Based IDS System",
    description:
      "Cloud security intrusion detection system using machine learning algorithms to detect and prevent security threats.",
    tags: ["Python", "ML", "Cloud Security", "Flask"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloud%20Ids.jpg-y57X0qgLK974AciTA7osFgqMFhg9vl.jpeg",
  },
  {
    id: 2,
    title: "Voice Globe",
    description:
      "Real-time speech and text translation platform to overcome language barriers for international communication.",
    tags: ["JavaScript", "React", "Flask", "Google Cloud API"],
    image: "/images/VoiceGlobe.jpg",
  },
  {
    id: 3,
    title: "Code Champ",
    description: "Online platform for programmers to practice coding, compete, and improve their skills.",
    tags: ["Java", "Spring Boot", "React", "MongoDB"],
    image: "/images/Codechamp.jpg",
  },
  {
    id: 4,
    title: "Calculator",
    description: "Intuitive and user-friendly calculator web app to perform basic and scientific operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/Calculator.jpg",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    tags: ["React", "Tailwind", "Next.js"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio.jpg-a8bXC9JbtrZBzLKCkUWryirhNBORUW.jpeg",
  },
  {
    id: 6,
    title: "Excel Automation Tool",
    description: "Automated Excel data processing tool that streamlines workflow and increases productivity.",
    tags: ["Python", "Excel", "Automation"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Excel%20Automation.jpg-EUzt2Ji1rkcalvHVurvtrVZvIAW5Om.jpeg",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E-commerce.jpg-4Rwx2c1FzB5dWi0JfGIski0OZoJe8a.jpeg",
  },
  {
    id: 8,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Task%20Management.jpg-GJQYOnWA9UizBVtYecRPD88aPXkvEq.jpeg",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard that displays current and forecasted weather data from multiple sources.",
    tags: ["JavaScript", "API", "Chart.js"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wheather%20DAshboard.jpg-CKffknKm7HdooJTvKlSoH6Iy5oZt7T.jpeg",
  },
]

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <Section className="pt-32 md:pt-40" id="projects">
        <SectionHeading title="My Projects" subtitle="Explore my recent work and case studies" center />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-background rounded-lg overflow-hidden card-shadow hover-scale"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/projects/${project.id}`}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <div className="mt-12 flex justify-center">
            <Button onClick={loadMoreProjects} variant="outline" size="lg" className="group">
              <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" />
              Load More Projects
            </Button>
          </div>
        )}
      </Section>
    </>
  )
}
