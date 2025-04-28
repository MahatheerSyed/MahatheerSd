"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

const projects = [
  {
    id: 1,
    title: "AI-Based IDS System",
    description:
      "Cloud security intrusion detection system using machine learning algorithms to detect and prevent security threats.",
    tags: ["Python", "ML", "Cloud Security", "Flask"],
    image: "images/Cloud Ids.jpg",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    tags: ["React", "Tailwind", "Next.js"],
    image: "images/Portfolio.jpg",
  },
  {
    id: 6,
    title: "Excel Automation Tool",
    description:
      "Automated Excel data processing tool that streamlines workflow and increases productivity.",
    tags: ["Python", "Excel", "Automation"],
    image: "images/Excel Automation.jpg",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "images/E-commerce.jpg",
  },
  {
    id: 8,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "images/Task Management.jpg",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard that displays current and forecasted weather data from multiple sources.",
    tags: ["JavaScript", "API", "Chart.js"],
    image: "images/Wheather DAshboard.jpg",
  },
  {
    id: 2,
    title: "Voice Globe",
    description:
      "Web application that translates both audio and text into multiple languages, enabling real-time communication across languages.",
    tags: [
      "React",
      "Node.js",
      "Google Cloud Speech-to-Text",
      "Google Translate API",
    ],
    image: "images/VoiceGlobe.jpg",
  },
  {
    id: 3,
    title: "CodeChamp",
    description:
      "Online coding platform that allows users to write, compile, and test code in various programming languages.",
    tags: ["React", "Node.js", "CodeMirror", "Docker"],
    image: "images/Codechamp.jpg",
  },
  {
    id: 4,
    title: "Calculator",
    description:
      "Simple and responsive web-based calculator built with JavaScript, offering basic arithmetic and scientific functions.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/Calculator.jpg",
  },
];

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Section className="pt-32 md:pt-40" id="projects">
        <SectionHeading
          title="My Projects"
          subtitle="Explore my recent work and case studies"
          center
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
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
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
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
      </Section>
    </>
  );
}
