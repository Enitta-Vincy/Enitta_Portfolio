"use client";

import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experience = [
    {
      title: "AI-ML Intern",
      company: "CropNow",
      period: "March 2025 - September 2025",
      description: "Worked on AI and machine learning solutions for agriculture, including plant disease detection and real-time monitoring systems. Implemented deep learning models and optimized pipelines for large-scale datasets.",
      achievements: [
      "Developed a tomato disease detection model using MobileNetV2, achieving 80% accuracy","Implemented real-time image classification system for farmers using mobile camera input","Enhanced dataset quality by collecting and preprocessing 10,000+ plant images from open-source sources","Collaborated with the team to deploy ML models on cloud infrastructure for scalable usage"
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "SkillCraft Technology",
      period: "October 2024 - November 2024",
      description: "Assisted in developing machine learning models and data pipelines for predictive analytics and AI-based solutions. Focused on data preprocessing, model training, and evaluation for real-world applications.",
      achievements: [
        "Trained and fine-tuned ML models for client projects, improving prediction accuracy by 20%","Developed data preprocessing pipelines to handle 50,000+ records efficiently","Collaborated with senior engineers to deploy ML models into production environments"
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering(AIML)",
      school: "REVA University",
      period: "2022 - 2026",
    },
    {
      degree: "Higher Secondary Education",
      school: "St. Claret Pre University College",
      period: "2022",
    },
    {
      degree: "Secondary Education",
      school: "St. Antony High School",
      period: "2020",
    },
  ];

  const skills = {
  "Machine Learning & AI": ["Python", "TensorFlow", "Keras","Scikit-learn", "OpenCV", "ML Pipelines"],
  "Deep Learning": ["CNN", "LSTM", "MobileNetV2", "Transfer Learning", "Data Augmentation", "Real-time Image Classification"],
  "Data Processing & Analysis": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "MFCC", "NLTK", "SpaCy"],
  "Backend & APIs": ["Node.js", "Django"],
  "Database": ["TeraBox Cloud Storage"],
  "Tools & Platforms": ["Git", "VS Code", "Jupyter Notebook", "Colab"]
};

  const certifications = [
   "Introduction to Containers, Kubernetes, and OpenShift-IBM (Apr 2025)",
  "Introduction to Cybersecurity-Cisco (Feb 2025)",
  "GenAI for IT-Infosys Springboard (Feb 2025)",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Experience & Skills</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey, technical expertise, and continuous learning path.
            </p>
          </motion.div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                            <div>
                              <h3 className="text-2xl font-semibold">{job.title}</h3>
                              <p className="text-lg text-muted-foreground">{job.company}</p>
                            </div>
                            <Badge variant="outline" className="text-sm">
                              {job.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <div className="space-y-2">
                            <p className="font-medium text-sm">Key Achievements:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {job.achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Certifications</h3>
                    </div>
                    <ul className="space-y-2">
                      {certifications.map((cert) => (
                        <li key={cert} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                            <div>
                              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                              <p className="text-lg text-muted-foreground">{edu.school}</p>
                            </div>
                            <Badge variant="outline" className="text-sm">
                              {edu.period}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}