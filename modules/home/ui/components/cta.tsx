"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
export const CTASection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-border/40 relative overflow-hidden">
      {/* Subtle background glow effect using brand colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vio-gradient opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
          Ready to build something <br className="hidden md:block" />
          <span className="text-muted-foreground">extraordinary?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to turn your vision into a scalable, beautiful, and high-performing digital reality.
        </p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button size="lg" className="h-14 px-8 text-base rounded-full uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all">
            Start a project
          </Button>
          <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base rounded-full uppercase tracking-wider font-bold border-border/50 hover:bg-muted">
            <Link href="/case-studies">
              View our work <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};