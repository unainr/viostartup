"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { brandGradient } from '@/lib/brand';
import { cn } from '@/lib/utils';

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
    quote: "The team at Viocodes doesn't just build software — they build businesses. Their strategic insight during development saved us countless hours and resources.",
    author: "Emily Rodriguez",
    role: "Product Manager, Innovate AI",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-100 h-100 bg-violet-600 opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-sky-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-violet-500/30 bg-violet-500/10 text-violet-300">
              Testimonials
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client{" "}
            <span className={brandGradient}>success stories</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Hear directly from our partners.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="group relative p-7 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 backdrop-blur-md overflow-hidden h-full transition-all duration-500 flex flex-col">
                {/* Background quote icon */}
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-white/3 group-hover:text-violet-500/10 transition-colors duration-500" fill="currentColor" stroke="none" />

                <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300 grow mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 mt-auto relative z-10">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-fuchsia-600 via-violet-600 to-sky-400 p-px shrink-0">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.author}</p>
                    <p className={cn("text-xs font-medium", brandGradient)}>{testimonial.role}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-fuchsia-600 via-violet-600 to-sky-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};