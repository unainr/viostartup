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
import { HeroSection } from '../components/hero-section';

interface HomeViewProps {
  projects: Project[];
}

export default function HomeView({ projects }: HomeViewProps) {
  return (
    <>
    <div className='py-20'>

    <HeroSection/>
    </div>
    <div className="flex flex-col min-h-screen">

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
    </>
  )
}