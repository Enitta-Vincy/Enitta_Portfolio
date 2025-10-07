"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: " Emotion Detector Using Deep Learning",
      description: "A deep learning-based project for real-time emotion detection from facial expressions using OpenCV, TensorFlow/Keras, and CNNs.",
       image:"https://drive.google.com/uc?export=view&id=1t4HxMcQQGOAfT48d2PiwagO2IB4XbHhM",
      tech: ["Open CV", "Tensorflow", "Keras", "CNN", "Python"],
      githubUrl: "https://github.com/Enitta-Vincy/Emotion_Detector_Using_Deep_Learning",
    },
    {
      title: "Hand Gesture Recognition Model",
      description: "Collaborative task management platform with real-time updates, team workspaces, and advanced filtering capabilities.",
      image: "https://drive.google.com/uc?export=view&id=1ci-EQ3yJC-InQW-9XILWQ4-cbp9r8GNR",
      tech: ["Machine Learning", "Python", "Open CV", "Transfer Learning"],
      githubUrl: "https://github.com/Enitta-Vincy/Hand-Gesture-Recognition-Model",
    },
    {
      title: "Tomato Plant Disease Detection Using MobileNetV2",
      description: "This project uses a deep learning approach with a pre-trained MobileNetV2 model to identify and classify various diseases in tomato plants from leaf images.",
      image: "https://drive.google.com/uc?export=view&id=1AW-DQA3tnbcL6AjHI4A3NRxVM3p57R0E",
      tech: ["CNN", "Neural Network", "Deep Learning", "MobileNetV2","Python","Gradio"],
      githubUrl: "https://github.com/Enitta-Vincy/Tomato-Plant-Disease-Detection-Using-MobileNetV2",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in machine learning, deep learning, and solving real-time problems with innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col group">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}