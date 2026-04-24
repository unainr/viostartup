"use client";

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ProjectCard } from '@/components/project-card';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { brandGradient } from '@/lib/brand';

interface FeaturedSectionProps {
  projects: Project[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export const FeaturedSection = ({ projects }: FeaturedSectionProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-1/2 right-1/4 w-125 h-125 bg-sky-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-center mb-14 gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-xs  font-semibold tracking-widest uppercase border-sky-500/30 bg-sky-500/10 text-sky-400">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Featured{" "}
            <span className={brandGradient}>Work</span>
          </h2>
          <p className="text-base text-white/50 max-w-md">
            A selection of our most recent and impactful case studies.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project._id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="relative z-10 text-center p-16 border border-white/8 rounded-2xl bg-white/3 backdrop-blur-md w-full">
          <h3 className="text-lg font-bold mb-2 text-white/80">Projects arriving soon</h3>
          <p className="text-sm text-white/40">We're currently curating our portfolio.</p>
        </div>
      )}
    </section>
  );
};