"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Section from "../../../components/section";
import ImageSlider from "../../../components/image-slider";

const projects = [
  {
    id: 1,
    title: "AI-Based IDS System",
    role: "Full Stack Developer & ML Engineer",
    duration: "3 months",
    tools: ["Python", "Flask", "TensorFlow", "AWS"],
    problem:
      "Traditional security systems often fail to detect sophisticated cyber attacks. This project aimed to develop an intelligent system that could identify and respond to threats in real-time.",
    process: [
      "Researched various machine learning algorithms suitable for intrusion detection",
      "Collected and preprocessed network traffic data for training",
      "Developed and trained multiple ML models to compare performance",
      "Implemented a Flask-based dashboard for monitoring and alerts",
    ],
    solution:
      "A cloud-based intrusion detection system that uses machine learning to identify anomalous network behavior with 97% accuracy. The system provides real-time alerts and detailed analytics.",
    outcome:
      "Successfully deployed to protect cloud infrastructure, reducing false positives by 85% compared to traditional rule-based systems.",
    images: ["/images/Cloud Ids.jpg"],
    links: {
      github:
        "https://github.com/MahatheerSyed/AI-Driven-Intusion-Detection-Using-Machine-Learning-",
    },
  },
  {
    id: 2,
    title: "Voice Globe",
    role: "Full Stack Developer",
    duration: "3 months",
    tools: ["JavaScript", "React", "Flask", "TensorFlow", "Google Cloud API"],
    problem:
      "Translating both text and speech in real-time to overcome language barriers for international communication.",
    process: [
      "Developed a front-end interface for users to upload speech or text",
      "Integrated speech-to-text API for real-time voice translation",
      "Implemented translation logic using Google Cloud Translation API",
      "Optimized backend with Flask to handle large amounts of text and speech data",
    ],
    solution:
      "An intelligent platform that allows users to translate both speech and text in real-time, breaking down language barriers across the globe.",
    outcome:
      "Increased accessibility for international communication and received positive feedback from users for accuracy and ease of use.",
    images: ["/images/VoiceGlobe.jpg"],
    links: {
      github: "https://github.com/MahatheerSyed/VoiceGlobe",
    },
  },
  {
    id: 3,
    title: "Code Champ",
    role: "Full Stack Developer",
    duration: "4 months",
    tools: ["Java", "Spring Boot", "React", "MongoDB"],
    problem:
      "Providing an online platform for programmers to practice coding, compete, and improve their skills.",
    process: [
      "Designed a user-friendly platform for users to practice coding challenges",
      "Developed a real-time competition feature for users to compete in coding challenges",
      "Created a backend with Spring Boot to manage coding challenges and user data",
      "Used MongoDB for storing user submissions and scores",
    ],
    solution:
      "A web platform where users can submit coding solutions, participate in live competitions, and track their progress and ranking.",
    outcome:
      "Promoted learning and collaboration among programmers, with users improving their coding skills through real-time challenges.",
    images: ["/images/Codechamp.jpg"],
    links: {
      github: "https://github.com/MahatheerSyed/codechamp",
    },
  },
  {
    id: 4,
    title: "Calculator",
    role: "Frontend Developer",
    duration: "1 month",
    tools: ["HTML", "CSS", "JavaScript"],
    problem:
      "Creating an intuitive and user-friendly calculator web app to perform basic and scientific operations.",
    process: [
      "Designed the UI for easy access to calculator functionalities",
      "Implemented calculator logic in JavaScript for both basic and scientific operations",
      "Optimized the app for responsiveness and accessibility",
      "Ensured a smooth and interactive user experience",
    ],
    solution:
      "A responsive and easy-to-use calculator web app supporting both basic and scientific functions.",
    outcome:
      "Successfully launched a web-based tool for performing various mathematical operations.",
    images: ["/images/Calculator.jpg"],
    links: {
      github: "https://github.com/MahatheerSyed/Calculator-Using-REACT",
    },
  },
  {
    id: 5,
    title: "Portfolio Website",
    role: "UI/UX Designer & Frontend Developer",
    duration: "1 month",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "Needed a professional platform to showcase projects and skills to potential clients and employers.",
    process: [
      "Created wireframes and mockups in Figma",
      "Designed responsive layouts for all device sizes",
      "Implemented animations and transitions for engaging user experience",
      "Optimized performance and accessibility",
    ],
    solution:
      "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
    outcome:
      "Improved online presence and received positive feedback from clients and recruiters.",
    images: ["/images/Portfolio.jpg"],
    links: {
      github: "https://github.com/MahatheerSyed/Portfolio-Using-React",
    },
  },
  {
    id: 6,
    title: "Excel Automation Tool",
    role: "Python Developer",
    duration: "2 weeks",
    tools: ["Python", "Pandas", "Openpyxl", "PyQt"],
    problem:
      "Manual data processing in Excel was time-consuming and error-prone for a client's financial reporting.",
    process: [
      "Analyzed existing workflow and identified bottlenecks",
      "Designed an automated solution using Python",
      "Created a user-friendly interface for non-technical users",
      "Implemented data validation and error handling",
    ],
    solution:
      "A desktop application that automates data extraction, transformation, and reporting in Excel, reducing manual work by 90%.",
    outcome:
      "Reduced processing time from 8 hours to 20 minutes and eliminated human errors in financial reporting.",
    images: ["/images/Excel Automation.jpg"],
    links: {},
  },
  {
    id: 7,
    title: "E-commerce Platform",
    role: "Full Stack Developer",
    duration: "4 months",
    tools: ["React", "Node.js", "MongoDB", "Stripe API"],
    problem:
      "A small business needed an online platform to sell products and manage inventory.",
    process: [
      "Gathered requirements and created user stories",
      "Designed database schema and API endpoints",
      "Implemented frontend with React and backend with Node.js",
      "Integrated payment processing and order management",
    ],
    solution:
      "A complete e-commerce platform with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.",
    outcome:
      "Increased sales by 45% in the first quarter after launch and improved inventory management efficiency.",
    images: ["/images/E-commerce.jpg"],
    links: {},
  },
  {
    id: 8,
    title: "Task Management App",
    role: "Frontend Developer",
    duration: "2 months",
    tools: ["React", "Firebase", "Tailwind CSS"],
    problem:
      "A remote team needed a better way to collaborate and track project tasks.",
    process: [
      "Conducted user interviews to understand pain points",
      "Created wireframes and user flow diagrams",
      "Implemented real-time updates using Firebase",
      "Designed an intuitive interface for task management",
    ],
    solution:
      "A collaborative task management application with real-time updates, team assignments, and progress tracking.",
    outcome:
      "Improved team productivity by 30% and reduced miscommunication in project management.",
    images: ["/images/Task Management.jpg"],
    links: {},
  },
  {
    id: 9,
    title: "Weather Dashboard",
    role: "Frontend Developer",
    duration: "3 weeks",
    tools: ["JavaScript", "Chart.js", "Weather API"],
    problem:
      "Users needed a simple way to visualize weather data for planning activities.",
    process: [
      "Researched weather APIs and selected the most reliable one",
      "Designed data visualizations for temperature, precipitation, and wind",
      "Implemented location-based weather forecasting",
      "Created responsive design for mobile and desktop",
    ],
    solution:
      "An interactive weather dashboard that displays current conditions and 7-day forecast with visual charts and location search.",
    outcome:
      "Positive user feedback for intuitive design and accurate forecasting.",
    images: ["/images/Wheather DAshboard.jpg"],
    links: {},
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const projectId = Number.parseInt(params.id);
    const foundProject = projects.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <Section className="pt-32 md:pt-40">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Section>
    );
  }

  if (!project) {
    return (
      <Section className="pt-32 md:pt-40">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </Section>
    );
  }

  const RelatedProjects = ({
    currentId,
    projects,
  }: {
    currentId: number;
    projects: any[];
  }) => (
    <div className="border-t border-border pt-8">
      <h2 className="text-2xl font-bold mb-6">More Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects
          .filter((p) => p.id !== currentId)
          .slice(0, 3)
          .map((p) => (
            <div
              key={p.id}
              className="group bg-background rounded-lg overflow-hidden card-shadow hover-scale"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={p.images[0] || "/placeholder.svg"}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{p.title}</h3>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/projects/${p.id}`}>View Case Study</Link>
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool: string, i: number) => (
                <span
                  key={i}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Role:</span>{" "}
                {project.role}
              </div>
              <div>
                <span className="text-muted-foreground">Duration:</span>{" "}
                {project.duration}
              </div>
            </div>
          </div>

          {project.id === 1 ? (
            <div className="mb-12">
              <ImageSlider title="" images={project.images} />
            </div>
          ) : (
            <div className="mb-12 overflow-hidden rounded-lg">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
              <p className="text-muted-foreground mb-8">{project.problem}</p>

              <h2 className="text-2xl font-bold mb-4">Process</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                {project.process.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-8">{project.solution}</p>

              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-muted-foreground mb-8">{project.outcome}</p>

              {project.links.github || project.links.live ? (
                <div className="flex gap-4 mt-8">
                  {project.links.github && (
                    <Button asChild variant="outline">
                      <Link href={project.links.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button asChild>
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </Link>
                    </Button>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          <RelatedProjects currentId={project.id} projects={projects} />
        </motion.div>
      </Section>
    </>
  );
}
