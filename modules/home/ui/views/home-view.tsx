"use client";

import React from 'react'
import { ProjectCard } from '@/components/project-card'
import { TestimonialsSection } from '../components/testimonials'
import { FAQSection } from '../components/faq'
import { CTASection } from '../components/cta'
import { PricingSection } from '../components/pricing'
import { Project } from '@/types/project'
import { ArrowDown } from 'lucide-react'
import { motion } from 'motion/react'

interface HomeViewProps {
  projects: Project[];
}

export default function HomeView({ projects }: HomeViewProps) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vio-gradient opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        
        <motion.h1 
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 z-10 leading-[1.1]"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          We build <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-foreground/50">digital</span> excellence.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto z-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Viocodes is a top-tier development agency delivering high-performance, beautiful, and scalable digital solutions.
        </motion.p>
        
        <motion.div 
          className="z-10 mt-10 text-muted-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION (What We Offer) */}
      {/* <AboutSection /> */}

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border/40">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of our most recent and impactful case studies.
            </p>
          </div>
        </motion.div>

        {projects && projects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                 opacity: 1,
                 transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {projects.slice(0, 3).map((project) => (
              <motion.div 
                key={project._id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
                 }}
                 className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center p-12 border border-border/50 rounded-2xl bg-muted/20 backdrop-blur-sm w-full">
            <h3 className="text-xl font-bold mb-2">Projects arriving soon</h3>
            <p className="text-muted-foreground">We are currently setting up our portfolio.</p>
          </div>
        )}
      </section>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />

    </div>
  )
}