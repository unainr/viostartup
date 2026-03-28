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
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card border-border/40 dark:border-white/5 rounded-2xl">
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
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground font-medium">No image</span>
          </div>
        )}
        
        {project.category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/90 backdrop-blur-md text-foreground border-border/50 hover:bg-background">
              {project.category}
            </Badge>
          </div>
        )}
      </Link>
      <div className="flex flex-col grow p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link href={`/case-studies/${project.slug}`} className="group/link">
              <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover/link:text-cyan-500 transition-colors inline-flex items-center gap-2">
                {project.name}
              </h3>
            </Link>
            {project.tagline && (
              <p className="text-sm font-medium text-foreground/70">
                {project.tagline}
              </p>
            )}
          </div>
          {project.year && (
            <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-md border border-border/50">
              {project.year}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 grow">
          {project.description}
        </p>
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/40">
           {project.stack && project.stack.length > 0 ? (
             <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
               {project.stack.slice(0, 3).join(" • ")}
               {project.stack.length > 3 && ` • +${project.stack.length - 3}`}
             </div>
           ) : <span aria-hidden="true" />}
           
          <Link 
            href={`/case-studies/${project.slug}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
            aria-label={`View ${project.name} case study`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};