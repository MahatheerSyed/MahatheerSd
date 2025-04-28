"use client"

import { motion } from "framer-motion"
import { Award, Trophy, BadgeIcon as Certificate } from "lucide-react"
import Section from "@/components/section"
import SectionHeading from "@/components/section-heading"

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Hackathon Lead",
    description:
      "Led a team in developing an AI-based cloud security project that won first place in the college hackathon.",
    date: "2023",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Seminar at PBR VITS",
    description: "Conducted a technical seminar on 'The Future of AI in Cybersecurity' at PBR VITS college.",
    date: "2023",
  },
  {
    icon: <Certificate className="h-8 w-8 text-primary" />,
    title: "Python Certification",
    description: "Completed advanced Python programming certification with distinction.",
    date: "2022",
  },
  {
    icon: <Certificate className="h-8 w-8 text-primary" />,
    title: "Web Development Certification",
    description: "Earned certification in modern web development technologies and best practices.",
    date: "2022",
  },
  {
    icon: <Certificate className="h-8 w-8 text-primary" />,
    title: "Machine Learning Specialization",
    description: "Completed a comprehensive specialization in machine learning algorithms and applications.",
    date: "2023",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Best Student Project",
    description: "Received recognition for the best student project in the department for the Excel automation tool.",
    date: "2023",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Coding Competition Winner",
    description: "Won first place in the college-level coding competition focused on algorithmic problem-solving.",
    date: "2022",
  },
]

export default function AchievementsPage() {
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
    <Section className="pt-32 md:pt-40" id="achievements">
      <SectionHeading
        title="Achievements & Certifications"
        subtitle="Recognition and qualifications I've earned along my journey"
        center
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-background rounded-lg p-6 flex items-start gap-4 card-shadow hover-scale"
          >
            <div className="bg-primary/10 p-3 rounded-full">{achievement.icon}</div>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">{achievement.date}</span>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
