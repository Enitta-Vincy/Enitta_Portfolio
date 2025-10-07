"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-8 sm:p-12 rounded-lg shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8 border-b-2 border-black pb-6">
              <h1 className="text-4xl font-bold mb-4">ENITTA SANDA VINCY</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="mailto:enittasanda@gmail.com" className="flex items-center gap-1 hover:underline">
                  <Mail className="h-4 w-4" />
                  enittasanda@gmail.com
                </a>
                <a href="https://github.com/Enitta-Vincy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/enitta-sanda-vincy-130057299/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  +91 9886673251
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Career Objective</h2>
              <p className="text-sm leading-relaxed">
                Highly motivated Artificial Intelligence and Machine Learning enthusiast with strong Python programming skills. Experienced in developing machine learning models and passionate about applying data analysis, computer vision, and AI techniques in a collaborative environment.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Education</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">B.Tech in Artificial Intelligence And Machine Learning</p>
                    <p>REVA University</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">9.64/10</p>
                    <p>2022-Present</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">Higher Secondary Education</p>
                    <p>St. Claret Pre-University College</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">96.16%</p>
                    <p>2022</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">Secondary Education</p>
                    <p>St. Antony High School</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">96.64%</p>
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Skills</h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <p className="font-bold">Languages</p>
                  <p>Python, SQL, Java, C</p>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <p className="font-bold">Technical Proficiency</p>
                  <p>Machine Learning, Deep Learning, DSA, NLP</p>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <p className="font-bold">Tools & Platforms</p>
                  <p>Jupyter Notebook, Google Colab, Excel, PowerPoint, Power BI</p>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <p className="font-bold">Frameworks and Libraries</p>
                  <p>Pandas, NumPy, Scikit-Learn, Tensorflow, Keras</p>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <p className="font-bold">Soft Skills</p>
                  <p>Teamwork, Communication, Time management, Adaptability, Problem-solving</p>
                </div>
              </div>
            </section>

            {/* Technical Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Technical Projects</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">Tomato Plant Disease Detection Using Deep Learning</p>
                    <p className="text-gray-600">(May 2025)</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Created a real-time tomato leaf disease diagnosis system using MobileNetV2 and transfer learning, achieving 80% accuracy in detecting various types of diseases.</li>
                    <li>Applied symptom mapping and treatment suggestions, allowing users to rapidly diagnose and treat tomato crop health through a smartphone interface.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">Sentiment Analysis for Voice-Based System</p>
                    <p className="text-gray-600">(Feb 2025)</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Designed a deep learning architecture using CNN, LSTM, and MFCC features to classify sentiment from audio signals, achieving 79% accuracy.</li>
                    <li>Enhanced model performance by fine-tuning layers and preprocessing methods for efficient real-time sentiment detection.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">Neural Network-Based Cryptanalysis</p>
                    <p className="text-gray-600">(Dec 2024)</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Developed a machine learning model to analyze encryption patterns and improve security assessment.</li>
                    <li>Achieved 84% accuracy in encryption-decryption tasks and enhanced decryption effectiveness through deep learning techniques.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Internships */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Internships</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">CropNow | AI-ML Intern</p>
                    <p className="text-gray-600">(Mar 2025 - Sep 2025)</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Developed AI and deep learning models for real-time crop health monitoring.</li>
                    <li>Utilized computer vision and data analytics to enable precision agriculture and support smarter farming decisions.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">SkillCraft Technology | Machine Learning Intern</p>
                    <p className="text-gray-600">(Oct 2024 – Nov 2024)</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Worked on four supervised machine learning algorithms for house price prediction, classification, and related regression tasks.</li>
                    <li>Gained hands-on experience in data preprocessing, feature engineering, model training, hyperparameter tuning, model evaluation, and performance optimization.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hackathons and Certifications */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-3 uppercase border-b border-gray-300 pb-2">Hackathons and Certifications</h2>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li><span className="font-bold">3rd Place – AIrena Best Project Award</span> (Reva University, Apr 2025)</li>
                <li><span className="font-bold">2nd Place – Hack-n-Fly with Copilot</span> (Reva University, Feb 2025)</li>
                <li><span className="font-bold">Introduction to Containers, Kubernetes, and OpenShift</span> – IBM (Apr 2025)</li>
                <li><span className="font-bold">Introduction to Cybersecurity</span> – Cisco (Feb 2025)</li>
                <li><span className="font-bold">GenAI for IT</span> - Infosys Springboard (Feb 2025)</li>
              </ul>
            </section>

            {/* Download Button */}
            <div className="text-center pt-6 border-t-2 border-black">
              <Button size="lg" className="group" asChild>
                <a href="/resume.pdf" download="Enitta_Sanda_Vincy_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Download PDF Version
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}