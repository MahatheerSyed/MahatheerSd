"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react"
import Section from "@/components/section"
import SectionHeading from "@/components/section-heading"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <Section className="pt-32 md:pt-40" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <SectionHeading title="About Me" subtitle="Get to know me better" className="lg:text-left" />

          <div className="prose prose-lg dark:prose-invert">
            <p>
              I'm a B.Tech (AIML) graduate and a tech enthusiast who blends design thinking with backend performance to
              deliver real-world digital solutions.
            </p>
            <p>
              Currently looking for job opportunities while working on personal projects and continuously learning new
              technologies to enhance my skills.
            </p>
            <p>
              With a passion for creating clean, intuitive user interfaces and developing secure, scalable applications,
              I strive to build digital experiences that make a difference.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="education"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Education & Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pr-8 w-full md:w-1/2 pt-8">
                <div className="bg-background p-6 rounded-lg card-shadow">
                  <h3 className="text-xl font-bold mb-2">B.Tech in AIML</h3>
                  <p className="text-muted-foreground mb-1">Visvodaya Engineering College, Kavali</p>
                  <p className="text-sm text-muted-foreground">Aug 2021 – May 2025</p>
                  <p className="mt-3">
                    Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning (AIML) with 80%
                    marks.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-auto mr-auto md:mr-auto md:ml-0 md:pl-8 w-full md:w-1/2 pt-8">
                <div className="bg-background p-6 rounded-lg card-shadow">
                  <h3 className="text-xl font-bold mb-2">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-muted-foreground mb-1">Sri Sai Junior College, Kavali</p>
                  <p className="text-sm text-muted-foreground">Jun 2019 – Mar 2021</p>
                  <p className="mt-3">
                    Completed Higher Secondary Certificate (HSC) in Science Stream with CGPA 8.4/10.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pr-8 w-full md:w-1/2 pt-8">
                <div className="bg-background p-6 rounded-lg card-shadow">
                  <h3 className="text-xl font-bold mb-2">Secondary School Certificate (SSC)</h3>
                  <p className="text-muted-foreground mb-1">Municipal High School, Kavali</p>
                  <p className="text-sm text-muted-foreground">Jun 2018 – Mar 2019</p>
                  <p className="mt-3">
                    Completed Secondary School Certificate (SSC) in General Studies with CGPA 8.0/10.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
        id="experience"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-lg p-6 card-shadow">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Java Full Stack Internship</h3>
            </div>
            <p className="text-muted-foreground mb-1">Wipro</p>
            <p className="text-sm text-muted-foreground mb-3">2024</p>
            <p>
              Worked on developing and maintaining web applications using Java, Spring Boot, and React, gaining hands-on
              experience in full-stack development.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 card-shadow">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold">Hackathon Lead</h3>
            </div>
            <p className="text-muted-foreground mb-1">Cloud Security Project</p>
            <p className="text-sm text-muted-foreground mb-3">2023</p>
            <p>
              Led a team in developing an AI-based intrusion detection system for cloud security, winning recognition
              for innovation and technical implementation.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
        id="fun-facts"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Fun Facts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="h-10 w-10 mb-4 text-primary" />,
              title: "Hackathon Leader",
              desc: "Led multiple hackathon teams to success",
            },
            {
              icon: <GraduationCap className="h-10 w-10 mb-4 text-primary" />,
              title: "Public Speaker",
              desc: "Presented at PBR VITS & GIST, Gudur",
            },
            {
              icon: <Heart className="h-10 w-10 mb-4 text-primary" />,
              title: "Anime Enthusiast",
              desc: "Love watching and discussing anime",
            },
          ].map((item, index) => (
            <div key={index} className="bg-background rounded-lg p-6 text-center hover-scale card-shadow">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
