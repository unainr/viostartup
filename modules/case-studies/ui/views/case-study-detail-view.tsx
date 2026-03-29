"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Lightbulb, Target, Zap } from 'lucide-react'
import { Project } from '@/types/project'

interface CaseStudyDetailViewProps {
  project: Project;
}

export const CaseStudyDetailView = ({ project }: CaseStudyDetailViewProps) => {
  const accent = project.accentColor || '#9b51e0'

  return (
    <article className="min-h-screen bg-background">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(155,81,224,0.07),transparent)]" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 blur-[120px] opacity-[0.05] rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <Breadcrumb className="mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-sm hover:text-foreground transition-colors">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/case-studies" className="text-sm hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-medium truncate max-w-55">
                  {project.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.category && (
              <Badge className="bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/15 transition-colors rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </Badge>
            )}
            {project.year && (
              <Badge variant="outline" className="font-mono text-xs text-muted-foreground border-border/60 rounded-full px-3 py-0.5">
                {project.year}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
            {project.name}
          </h1>

          {/* Tagline */}
          {project.tagline && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {project.tagline}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.projectLink && (
              <Button
                asChild
                size="lg"
                className="rounded-full font-semibold text-white border-0 bg-linear-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 px-6"
              >
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  View Live Project <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="rounded-full text-muted-foreground hover:text-foreground group"
            >
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                All Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────── */}
      {project.image && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/40 shadow-2xl bg-muted">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">

          {/* Left — narrative */}
          <div className="space-y-14">

            {project.description && (
              <section>
                <SectionLabel icon={<Layers className="w-4 h-4" />} label="Overview" />
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </section>
            )}

            {project.description && project.challenge && <Separator className="bg-border/40" />}

            {project.challenge && (
              <section>
                <SectionLabel icon={<Target className="w-4 h-4" />} label="The Challenge" />
                <div className="mt-5 rounded-xl border border-border/50 bg-card/60 p-6 md:p-8">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.challenge}
                  </p>
                </div>
              </section>
            )}

            {project.challenge && project.solution && <Separator className="bg-border/40" />}

            {project.solution && (
              <section>
                <SectionLabel icon={<Lightbulb className="w-4 h-4" />} label="The Solution" gradient />
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.solution}
                </p>
              </section>
            )}

            {project.solution && project.result && <Separator className="bg-border/40" />}

            {project.result && (
              <section>
                <SectionLabel icon={<Zap className="w-4 h-4" />} label="Outcome & Results" />
                <div className="mt-5 flex gap-4 p-6 md:p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-emerald-400/90 font-medium leading-relaxed whitespace-pre-line">
                    {project.result}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* Right — sticky sidebar */}
          <aside>
            <div className="sticky top-28 space-y-5">

              {/* Stack card */}
              <div className="rounded-xl border border-border/50 bg-card/60 overflow-hidden">
                <div className="px-5 py-4 border-b border-border/40">
                  <p className="text-sm font-semibold text-foreground">Technology Stack</p>
                </div>
                <div className="p-5">
                  {project.stack && project.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-md bg-muted/70 text-foreground/80 border border-border/50 hover:border-violet-500/40 hover:text-foreground transition-colors text-xs py-1 px-2.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Stack details coming soon.</p>
                  )}
                </div>
              </div>

              {/* Project meta card */}
              <div className="rounded-xl border border-border/50 bg-card/60 overflow-hidden">
                <div className="px-5 py-4 border-b border-border/40">
                  <p className="text-sm font-semibold text-foreground">Project Info</p>
                </div>
                <div className="divide-y divide-border/30">
                  {project.category && (
                    <div className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Category</span>
                      <span className="text-sm text-foreground font-medium">{project.category}</span>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Year</span>
                      <span className="text-sm text-foreground font-mono">{project.year}</span>
                    </div>
                  )}
                  {project.projectLink && (
                    <div className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Live URL</span>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1 truncate max-w-35"
                      >
                        Visit <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Back link */}
              <Button
                variant="ghost"
                asChild
                className="w-full justify-start text-muted-foreground hover:text-foreground group rounded-xl border border-border/40 hover:border-border/70 h-11 transition-colors"
              >
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
          </aside>

        </div>
      </div>
    </article>
  )
}

function SectionLabel({
  icon, label, gradient = false
}: { icon: React.ReactNode; label: string; gradient?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-muted-foreground">{icon}</span>
      <h2 className={`text-xl md:text-2xl font-bold tracking-tight ${
        gradient
          ? 'text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400'
          : 'text-foreground'
      }`}>
        {label}
      </h2>
    </div>
  )
}