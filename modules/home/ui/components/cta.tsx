"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { brandGradient } from '@/lib/brand';

export const CTASection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden bg-black w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-linear-to-r from-fuchsia-600 via-violet-600 to-sky-400 opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
          Ready to build something{" "}
          <br className="hidden md:block" />
          <span className={brandGradient}>extraordinary?</span>
        </h2>

        <p className="text-base md:text-lg text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
          Let's turn your vision into a scalable, beautiful, high-performing digital product.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Glowing primary button */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-fuchsia-600 via-violet-600 to-sky-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <Button
              size="lg"
              className="relative h-12 px-8 text-sm rounded-full font-semibold tracking-wide bg-black text-white hover:bg-black/80 border border-white/10 transition-all"
            >
              Start a Project
            </Button>
          </div>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 px-8 text-sm rounded-full font-semibold tracking-wide border-white/15 bg-white/3 text-white/80 hover:bg-white/[0.07] hover:text-white hover:border-white/25 transition-all"
          >
            <Link href="/case-studies" className="flex items-center gap-2">
              View Our Work
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};