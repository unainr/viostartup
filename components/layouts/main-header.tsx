"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "New Call", href: "/new-call" },
  { name: "Pricing", href: "/pricing" },
];

export const HeaderNav = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 h-14 w-full transition-all duration-300",
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative flex h-full items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo2.png"
                alt="Viocodes Logo"
                width={110}
                height={44}
                className="h-auto w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-1 transition-colors duration-200",
                      isActive(item.href)
                        ? "text-white font-semibold"
                        : "text-white/50 hover:text-white/90"
                    )}
                  >
                    {item.name}
                    {/* Active underline with brand gradient */}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-linear-to-r from-fuchsia-500 via-violet-500 to-sky-400 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="lg:hidden relative z-20 p-2 text-white/60 hover:text-white transition-colors"
            >
              {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuState && (
          <div className="lg:hidden absolute top-14 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/8 px-4 py-6">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm transition-colors duration-200",
                      isActive(item.href)
                        ? "text-white font-semibold bg-white/5 border border-white/8"
                        : "text-white/50 hover:text-white hover:bg-white/3"
                    )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="ml-2 inline-block w-1 h-1 rounded-full bg-violet-400 align-middle" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};