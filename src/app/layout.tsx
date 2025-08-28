import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Infiniteo: Automation Without Limits',
    template: '%s | Infiniteo',
  },
  description: 'Empowering every organization and individual with limitless, intuitive automation solutions—driving efficiency, innovation, and seamless operations across all digital channels.',
  keywords: ['automation', 'B2B SaaS', 'workflow automation', 'CRM integration', 'social media automation', 'digital platform automation', 'custom workflows', 'Infiniteo'],
  icons: {
    icon: [
      {
        url: '/infiniteo.png',
        href: '/infiniteo.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-transparent">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
