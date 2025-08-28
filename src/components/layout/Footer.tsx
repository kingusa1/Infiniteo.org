
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

const footerNavLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/solutions', label: 'Services' },
  { href: '/technology', label: 'Our Approach' },
  { href: '/impact', label: 'Impact Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

const socialLinks = [
  { href: 'https://www.linkedin.com/company/infiniteo/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/infiniteo_tech?s=21&t=NBNybyyXMuEXkLIMVcEcsQ', icon: XIcon, label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/infiniteo.tech?igsh=MWthdzM2NzRwZmI1cA%3D%3D&utm_source=qr', icon: Instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" aria-label="Infiniteo Home" className="focus-visible:ring-0 focus-visible:outline-none inline-block">
              <Image
                src="/infiniteo.org/infiniteo.png" 
                alt="Infiniteo Logo"
                width={150}
                height={37}
              />
            </Link>
            <p className="text-sm">
              Infiniteo stands as the unparalleled next-generation automation partner, engineered to liberate businesses and professionals from the shackles of archaic, manual workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-headline text-lg font-semibold text-primary-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-headline text-lg font-semibold text-primary-foreground mb-4">Legal</h5>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h5 className="font-headline text-lg font-semibold text-primary-foreground mb-4">Connect With Us</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-secondary-foreground hover:text-accent transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Infiniteo Solutions. All rights reserved.</p>
          <p className="mt-1">Empowering Business Evolution, Without Limits.</p>
        </div>
      </div>
    </footer>
  );
}
