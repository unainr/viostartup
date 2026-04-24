import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,189,215,0.15)] hover:border-[#2bbdd7]/50 hover:-translate-y-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b51e0] to-[#2bbdd7] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
      <Link href={`/case-studies/${project.slug}`} className="relative h-60 w-full overflow-hidden block">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className="text-white/40 font-medium">No image</span>
          </div>
        )}
        
        {project.category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-black/60 backdrop-blur-md text-white border-white/20 hover:bg-black/80 shadow-md">
              {project.category}
            </Badge>
          </div>
        )}
      </Link>
      <div className="flex flex-col grow p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link href={`/case-studies/${project.slug}`} className="group/link">
              <h3 className="text-2xl font-bold tracking-tight mb-1 text-white group-hover/link:text-[#2bbdd7] transition-colors inline-flex items-center gap-2">
                {project.name}
              </h3>
            </Link>
            {project.tagline && (
              <p className="text-sm font-medium text-white/60">
                {project.tagline}
              </p>
            )}
          </div>
          {project.year && (
            <span className="text-xs font-mono text-white/40 px-2 py-1 rounded-md border border-white/10">
              {project.year}
            </span>
          )}
        </div>
        <p className="text-sm text-white/60 line-clamp-3 mb-6 grow group-hover:text-white/80 transition-colors">
          {project.description}
        </p>
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/10">
           {project.stack && project.stack.length > 0 ? (
             <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
               {project.stack.slice(0, 3).join(" • ")}
               {project.stack.length > 3 && ` • +${project.stack.length - 3}`}
             </div>
           ) : <span aria-hidden="true" />}
           
          <Link 
            href={`/case-studies/${project.slug}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:bg-gradient-to-r hover:from-[#9b51e0] hover:to-[#2bbdd7] hover:shadow-[0_0_15px_rgba(43,189,215,0.4)] transition-all"
            aria-label={`View ${project.name} case study`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};