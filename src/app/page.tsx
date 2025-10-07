"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
                Hi, I'm{" "}
                <span className="text-white">Enitta Sanda Vincy</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
                AI-ML Enthusiast
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate AI & ML developer dedicated to building intelligent and impactful solutions. Currently focused on developing deep learning and computer vision models, leveraging technologies like TensorFlow, PyTorch, and OpenCV to solve real-world problems in areas such as plant disease detection, sentiment analysis, and automation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/projects">
                  <Button size="lg" className="group bg-white text-black hover:bg-gray-200">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Get In Touch
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Enitta-Vincy" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/enitta-sanda-vincy-130057299/" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:enittasanda@gmail.com">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl" />
                <Image
                  src="https://drive.google.com/uc?export=view&id=1SK_6M12qRCtoIcAXlI_9dnoBxkwABgIt"
                  alt="Professional headshot"
                  width={800}
                  height={800}
                  className="relative rounded-full border-4 border-white object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Core Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {[ "Machine Learning","Deep Learning","TensorFlow","Keras","NLP","DSA","Python","JAVA","C"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="text-base py-2 px-4 bg-white text-black hover:bg-gray-200">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}