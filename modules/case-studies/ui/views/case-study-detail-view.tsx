"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Project } from '@/types/project'
import { motion, type Variants } from 'motion/react'

interface CaseStudyDetailViewProps {
  project: Project;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

export const CaseStudyDetailView = ({ project }: CaseStudyDetailViewProps) => {
  return (
    <article className="min-h-screen bg-background pb-32">
      
      {/* PROFESSIONAL HERO BANNER */}
      <section className="relative w-full border-b border-border/40 pt-32 pb-20 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-background z-0" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] h-75 opacity-[0.03] blur-[100px] rounded-full z-0 pointer-events-none"
          style={{ backgroundColor: project.accentColor || '#9b51e0' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-10 font-medium" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-border" />
              <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link>
              <ChevronRight className="w-4 h-4 text-border" />
              <span className="text-foreground" aria-current="page">{project.name}</span>
            </nav>
          </motion.div>

          <header className="max-w-4xl">
            <motion.div 
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.category && (
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20">
                  {project.category}
                </Badge>
              )}
              {project.year && (
                <Badge variant="outline" className="font-mono text-muted-foreground border-border/50 bg-muted/30">
                  {project.year}
                </Badge>
              )}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.name}
            </motion.h1>
            
            {project.tagline && (
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.tagline}
              </motion.p>
            )}

            {project.projectLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg" className="rounded-full shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 bg-linear-to-r from-[#9b51e0] to-[#2bbdd7] border-0 text-white font-bold transition-all hover:scale-[1.02]">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    Visit Live Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </header>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        {project.image && (
          <motion.div 
            className="relative aspect-video lg:aspect-21/9 w-full rounded-2xl md:rounded-3xl overflow-hidden mb-16 md:mb-24 shadow-2xl border border-border/40 bg-muted"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={project.image}
              alt={`${project.name} Preview`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
          <div className="space-y-20 text-base md:text-lg text-foreground/80 leading-relaxed">
            {project.description && (
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-foreground">Overview</h2>
                <p className="whitespace-pre-line text-muted-foreground">{project.description}</p>
              </motion.section>
            )}

            {project.challenge && (
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-foreground">The Challenge</h2>
                <Card className="bg-card border-border/40 shadow-sm">
                  <CardContent className="p-6 md:p-8">
                     <p className="whitespace-pre-line text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {project.solution && (
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-foreground inline-flex items-center gap-3">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9b51e0] to-[#2bbdd7]">The Solution</span>
                </h2>
                <p className="whitespace-pre-line text-muted-foreground">{project.solution}</p>
              </motion.section>
            )}

            {project.result && (
              <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-foreground">Outcome & Results</h2>
                <div className="flex gap-4 p-6 rounded-2xl bg-[#2bbdd7]/5 border border-[#2bbdd7]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#2bbdd7] shrink-0 mt-1" />
                  <p className="whitespace-pre-line text-[#2bbdd7] font-medium">{project.result}</p>
                </div>
              </motion.section>
            )}
          </div>

          <aside className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <Card className="bg-card/40 backdrop-blur-md border border-border/40 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  {project.stack && project.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="bg-background border-border text-foreground hover:border-cyan-500/40 transition-colors py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Stack details coming soon.</p>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 px-2">
                <Button variant="ghost" asChild className="hover:text-cyan-400 group h-auto py-2 -ml-2">
                  <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </article>
  )
}