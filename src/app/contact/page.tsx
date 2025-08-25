
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquarePlus, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Infiniteo team. Reach out for consultations or any inquiries about our automation workflow services.',
};

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
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/infiniteo/"
  },
  {
    icon: XIcon,
    title: "X (Twitter)",
    href: "https://x.com/infiniteo_tech?s=21&t=NBNybyyXMuEXkLIMVcEcsQ"
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://www.instagram.com/infiniteo.tech?igsh=MWthdzM2NzRwZmI1cA%3D%3D&utm_source=qr"
  },
];

export default function ContactPage() {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <MessageSquarePlus className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            We're here to help you start your transformation. Whether you have questions or want to discuss your specific automation needs, our team is ready to assist.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Form and Social links now in a single column layout */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-10 space-y-12">
            
            {/* Contact Form Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Social Links Section */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">Follow Our Journey</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Stay connected and get the latest insights, updates, and success stories from the forefront of automation.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                {socialLinks.map((detail) => (
                  <Button key={detail.title} variant="outline" size="icon" asChild className="h-16 w-16 rounded-lg hover:bg-accent/20 hover:text-accent border-border/50 hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
                    <Link href={detail.href} target="_blank" rel="noopener noreferrer" aria-label={detail.title}>
                      <detail.icon className="h-7 w-7" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
