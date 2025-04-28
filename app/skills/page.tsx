"use client"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Layout,
  Server,
  Palette,
  FileSpreadsheet,
  GitBranch,
  Wrench,
  Cpu,
  LineChart,
  ShieldCheck,
  Globe,
} from "lucide-react"
import Section from "@/components/section"
import SectionHeading from "@/components/section-heading"

const skillCategories = [
  {
    title: "Development",
    description: "Technologies and languages I use to build applications",
    skills: [
      {
        category: "Programming Languages",
        icon: <Code className="h-6 w-6 text-primary" />,
        items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        category: "Frontend",
        icon: <Layout className="h-6 w-6 text-primary" />,
        items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Bootstrap", "Redux"],
      },
      {
        category: "Backend",
        icon: <Server className="h-6 w-6 text-primary" />,
        items: ["Flask", "Spring Boot", "Node.js", "Express", "REST API"],
      },
      {
        category: "Databases",
        icon: <Database className="h-6 w-6 text-primary" />,
        items: ["SQL", "MySQL"],
      },
    ],
  },
  {
    title: "Design & Tools",
    description: "Design tools and utilities I use in my workflow",
    skills: [
      {
        category: "UI/UX Design",
        icon: <Palette className="h-6 w-6 text-primary" />,
        items: ["Figma", "Canva", "Wireframing", "User Research"],
      },
      {
        category: "Documentation",
        icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
        items: ["Excel", "Word", "Google Docs", "Technical Writing", "Documentation"],
      },
      {
        category: "DevOps & Tools",
        icon: <Wrench className="h-6 w-6 text-primary" />,
        items: ["Git", "GitHub", "Docker", "Vercel"],
      },
      {
        category: "Version Control",
        icon: <GitBranch className="h-6 w-6 text-primary" />,
        items: ["Git", "GitHub", "GitLab"],
      },
    ],
  },
  {
    title: "Specialized Skills",
    description: "Specialized areas where I apply my technical knowledge",
    skills: [
      {
        category: "AI & Machine Learning",
        icon: <Cpu className="h-6 w-6 text-primary" />,
        items: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision", "Data Analysis"],
      },
      {
        category: "Data Visualization",
        icon: <LineChart className="h-6 w-6 text-primary" />,
        items: ["Matplotlib"],
      },
      {
        category: "Security",
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        items: ["Authentication", "Authorization", "Encryption", "Security Best Practices", "Penetration Testing"],
      },
    ],
  },
]

export default function SkillsPage() {
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
    <Section className="pt-32 md:pt-40" id="skills">
      <SectionHeading title="My Skills" subtitle="Technologies and tools I work with to bring ideas to life" center />

      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background rounded-lg p-6 card-shadow hover-scale border border-border/40"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm transition-all hover:bg-primary/20 hover:text-primary cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      <div className="mt-16 bg-secondary/50 rounded-lg p-8 border border-border/40">
        <div className="flex items-center mb-6">
          <Globe className="h-8 w-8 text-primary mr-4" />
          <h2 className="text-2xl font-bold">Always Learning</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Technology is constantly evolving, and I'm committed to growing with it. I'm currently expanding my knowledge
          in:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Web3", "Blockchain", "AR/VR", "Mobile Development", "Advanced AI", "UI Animation"].map((item, i) => (
            <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
