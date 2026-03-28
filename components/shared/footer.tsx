import React from 'react';
import Link from 'next/link';
import { 
  FaGithub, 
  FaXTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaBluesky 
} from 'react-icons/fa6';

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: FaGithub,
    },
    {
      name: 'X',
      href: 'https://twitter.com',
      icon: FaXTwitter,
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app',
      icon: FaBluesky,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: FaLinkedinIn,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-black tracking-tight text-foreground">
              VIOCODES
            </span>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Engineering high-performance software and crafting beautiful digital experiences.
            </p>
            <div className="flex space-x-6 mt-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5 fill-current" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Guides</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Privacy</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Viocodes. All rights reserved.</span>
            <span>Designed by UNAIN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
