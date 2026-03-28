"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

const testimonials = [
  {
    quote: "Viocodes completely transformed our digital presence. Their attention to detail and engineering excellence is unmatched. The platform they built handles our scale effortlessly.",
    author: "Sarah Jenkins",
    role: "CTO, TechNova Solutions",
  },
  {
    quote: "Working with Viocodes was a breath of fresh air. They communicated clearly, delivered ahead of schedule, and the UI/UX design exceeded our wildest expectations.",
    author: "David Chen",
    role: "Founder, Apex Logistics",
  },
  {
    quote: "The team at Viocodes doesn't just build software; they build businesses. Their strategic insight during the development process saved us countless hours and resources.",
    author: "Emily Rodriguez",
    role: "Product Manager, Innovate AI",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9b51e0] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-[#9b51e0]/20 bg-[#9b51e0]/5 text-[#9b51e0]">
              Testimonials
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#2bbdd7]">success stories</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Explore the experiences of our satisfied partners.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl shadow-sm hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-500 h-full group">
                <CardContent className="p-8 pb-10 flex flex-col h-full relative overflow-hidden">
                   <div className="absolute -top-4 -right-4 text-[#2bbdd7]/10 group-hover:text-[#2bbdd7]/20 transition-colors duration-500">
                     <Quote className="w-32 h-32" fill="currentColor" stroke="none" />
                   </div>
                  
                  <div className="relative z-10 flex flex-col flex-grow pt-4">
                     <p className="text-lg font-medium leading-relaxed mb-10 flex-grow text-foreground/90">
                       "{testimonial.quote}"
                     </p>
                     
                     <div className="flex items-center gap-4 mt-auto">
                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b51e0] to-[#2bbdd7] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                         {testimonial.author.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold tracking-tight text-base mb-0.5 text-foreground">{testimonial.author}</p>
                         <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#2bbdd7] font-bold">{testimonial.role}</p>
                       </div>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
