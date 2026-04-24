"use client";

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Code2, Smartphone, Palette, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { brandGradient, brandGradientCSS } from '@/lib/brand';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Full-Stack Web Dev",
    description: "Scalable, high-performance web applications built with Next.js and modern React patterns.",
    icon: Globe,
    gradient: "from-fuchsia-600 to-violet-600",
  },
  {
    title: "Mobile Experiences",
    description: "Engaging cross-platform mobile apps tailored for iOS and Android with native-feel UX.",
    icon: Smartphone,
    gradient: "from-violet-600 to-sky-500",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces crafted to maximize user engagement and retention.",
    icon: Palette,
    gradient: "from-sky-500 to-violet-600",
  },
  {
    title: "Backend Systems",
    description: "Robust, secure, and infinitely scalable APIs and database architectures.",
    icon: Code2,
    gradient: "from-fuchsia-600 to-sky-400",
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast load times and optimized rendering for peak SEO and Core Web Vitals.",
    icon: Zap,
    gradient: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Security & DevOps",
    description: "Enterprise-grade security and automated CI/CD pipelines for smooth, reliable deployments.",
    icon: ShieldCheck,
    gradient: "from-sky-400 to-violet-600",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const AboutSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-fuchsia-600 opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-sky-500 opacity-[0.03] blur-[160px] rounded-full pointer-events-none" />

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
              What We Offer
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Digital{" "}
            <span className={brandGradient}>Excellence</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We transform visionary ideas into stunning, high-performing digital products.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="group relative p-7 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 backdrop-blur-md overflow-hidden h-full transition-all duration-500 hover:border-white/15 hover:-translate-y-0.5">
                {/* Hover glow */}
                <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-2xl", service.gradient)} />

                {/* Icon */}
                <div className={cn("w-12 h-12 rounded-xl bg-linear-to-br p-px mb-5", service.gradient)}>
                  <div className="w-full h-full bg-black/90 rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-base font-bold tracking-tight mb-2 text-white/90">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={cn("absolute bottom-0 left-0 h-px w-0 bg-linear-to-r transition-all duration-500 group-hover:w-full", service.gradient)} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};