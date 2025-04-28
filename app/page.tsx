"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code,
  Palette,
  FileSpreadsheet,
  Shield,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16 md:pb-24" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium mb-4">
              UI/UX Designer & Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Mahatheer Syed.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              I design clean, intuitive UIs and develop secure, scalable
              applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pdf/MAHATHEER .pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>

              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MahatheerImage-pwJb1FCbU0zNEw4puj8vTQl9CuToeS.png"
                  alt="Mahatheer Syed"
                  className="rounded-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quick Highlights */}
      <Section className="bg-secondary py-16" id="highlights">
        <SectionHeading
          title="Skills Highlights"
          subtitle="Key areas of expertise and technologies I work with"
          center
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Full Stack",
              desc: "Flask, React, Spring Boot",
              color: "bg-blue-50 dark:bg-blue-900/20",
              border: "border-blue-200 dark:border-blue-800",
            },
            {
              icon: <Palette className="h-10 w-10 text-primary" />,
              title: "UI/UX",
              desc: "Figma, Adobe XD",
              color: "bg-purple-50 dark:bg-purple-900/20",
              border: "border-purple-200 dark:border-purple-800",
            },
            {
              icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
              title: "Automation",
              desc: "Excel/Word Automation",
              color: "bg-green-50 dark:bg-green-900/20",
              border: "border-green-200 dark:border-green-800",
            },
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Security",
              desc: "Cloud Security Project (IDS)",
              color: "bg-red-50 dark:bg-red-900/20",
              border: "border-red-200 dark:border-red-800",
            },
            {
              icon: <Brain className="h-10 w-10 text-primary" />,
              title: "AI + ML",
              desc: "AI + ML Projects",
              color: "bg-amber-50 dark:bg-amber-900/20",
              border: "border-amber-200 dark:border-amber-800",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-lg p-6 text-center hover-scale border ${item.border} ${item.color} backdrop-blur-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex justify-center items-center h-20">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section id="featured-projects">
        <div className="flex justify-between items-center mb-12">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
            className="mb-0"
          />
          <Button asChild variant="outline">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "AI-Based IDS System",
              desc: "Cloud security intrusion detection system using machine learning algorithms.",
              tags: ["Python", "ML", "Cloud Security"],
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloud%20Ids.jpg-y57X0qgLK974AciTA7osFgqMFhg9vl.jpeg",
            },
            {
              title: "Portfolio Website",
              desc: "Responsive portfolio website built with React and Tailwind CSS.",
              tags: ["React", "Tailwind", "Next.js"],
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio.jpg-a8bXC9JbtrZBzLKCkUWryirhNBORUW.jpeg",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg card-shadow hover-scale"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild size="sm" variant="secondary">
                  <Link href={`/projects/${index + 1}`}>
                    View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary/5" id="cta">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have a project in mind? I'd love to help bring your ideas to life."
            center
          />
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
