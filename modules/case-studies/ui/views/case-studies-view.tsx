"use client";

import React from 'react'
import { ProjectCard } from '@/components/project-card'
import { Project } from '@/types/project'
import { motion } from 'motion/react'

interface CaseStudiesViewProps {
  projects: Project[];
}

export const CaseStudiesView = ({ projects }: CaseStudiesViewProps) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-br from-[#9b51e0] to-[#2bbdd7] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center w-full mb-20 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          Our <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9b51e0] via-[#5b86e5] to-[#2bbdd7]">Case Studies</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deep dive into our process, challenges faced, and the robust scalable solutions we engineered for our partners.
        </motion.p>
      </div>

      {projects && projects.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full z-10"
          initial="hidden"
          animate="visible"
          variants={{
             hidden: { opacity: 0 },
             visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
             }
          }}
        >
          {projects.map((project: Project) => (
            <motion.div 
              key={project._id}
              variants={{
                 hidden: { opacity: 0, y: 40 },
                 visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="text-center p-16 mt-12 border border-white/10 rounded-3xl bg-card/40 backdrop-blur-md w-full max-w-2xl shadow-xl z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-3 tracking-tight">No projects found</h3>
          <p className="text-lg text-muted-foreground">Head over to Sanity Studio to create your first masterpiece.</p>
        </motion.div>
      )}
    </div>
  )
}
