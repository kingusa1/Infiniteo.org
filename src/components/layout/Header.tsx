
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'; 

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/solutions', label: 'Services' },
  { href: '/technology', label: 'Our Approach' },
  { href: '/impact', label: 'Impact' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMounted]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 h-16",
        hasMounted && isScrolled ? "shadow-md bg-black/50 backdrop-blur-sm" : "bg-transparent" 
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" aria-label="Infiniteo Home" className="focus-visible:ring-0 focus-visible:outline-none inline-block">
            <Image
              src="/infiniteo.org/infiniteo.png"
              alt="Infiniteo Logo"
              width={150}
              height={37}
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild className="text-primary-foreground hover:text-accent hover:bg-accent/20">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="md:hidden"> 
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-primary-foreground hover:text-accent hover:bg-accent/20">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Infiniteo Home">
                      <Image
                        src="main/infiniteo.png"
                        alt="Infiniteo Logo"
                        width={128}
                        height={32}
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Button
                        key={link.href}
                        variant="ghost"
                        asChild
                        className="w-full justify-start text-lg py-3 text-foreground hover:text-accent hover:bg-accent/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </nav>
                   <div className="mt-auto pt-6">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Consultation</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
