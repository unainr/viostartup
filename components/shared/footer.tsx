import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBluesky,
} from 'react-icons/fa6';

const navigation = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/un_r_7', icon: FaGithub },
    { name: 'X', href: 'https://twitter.com', icon: FaXTwitter },
    { name: 'Bluesky', href: 'https://bsky.app', icon: FaBluesky },
    { name: 'Instagram', href: 'https://instagram.com/un_r_7', icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-unain7', icon: FaLinkedinIn },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 ">
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 items-start">

          {/* Brand col */}
          <div className="flex flex-col w-full  items-start justify-start gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo2.png"
                alt="Viocodes Logo"
                width={128}
                height={128}
                className="h-auto w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/40 max-w-50">
              Engineering high-performance software and crafting beautiful
              digital experiences for startups and creators worldwide.
            </p>

            <div className="flex items-center gap-2">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="group w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/10"
                  >
                    <Icon className="h-3.5 w-3.5 text-white/40 group-hover:text-violet-300 transition-colors duration-200" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Viocodes. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed &amp; built by{" "}
            <span className="bg-linear-to-r from-fuchsia-500 via-violet-500 to-sky-400 bg-clip-text text-transparent font-semibold">
              Unain
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};