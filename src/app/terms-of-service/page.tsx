
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, GanttChartSquare, Braces, UserCheck, Ban, CreditCard, ExternalLink, ShieldAlert, Scale, Globe, FileClock, MessageCircleQuestion, ServerCrash, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the Terms of Service for using Infiniteo Solutions Hub website and services.',
};

const termsSections = [
  {
    icon: FileText,
    title: "1. Agreement to Terms",
    content: [
      "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Infiniteo (“we,” “us,” or “our”), concerning your access to and use of the infiniteo.tech website as well as any other media form, media channel, or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”) and our automation workflow services (the “Services”).",
      "By accessing the Site or using our Services, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using the Site and Services and must discontinue use immediately."
    ]
  },
  {
    icon: GanttChartSquare,
    title: "2. Our Services",
    content: [
      "Infiniteo provides expert-driven automation workflow services. This includes, but is not limited to, social media automation, digital platform integration, and the creation of custom workflows using third-party tools (“Client Services”).",
      "The scope, fees, and specific terms of any Client Services will be detailed in a separate Statement of Work (SOW) or client agreement, which will supplement these Terms of Service."
    ]
  },
  {
    icon: Braces,
    title: "3. Intellectual Property Rights",
    content: [
      "Unless otherwise indicated, the Site and Services are our proprietary property. All source code, databases, functionality, software, website designs, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned by or licensed to us.",
      "You are granted a limited license to access and use the Site for your personal or internal business purposes. You agree not to copy, reproduce, aggregate, republish, upload, post, publicly display, encode, translate, transmit, distribute, sell, license, or otherwise exploit any part of the Site, Content, or Marks for any commercial purpose whatsoever without our express prior written permission."
    ]
  },
  {
    icon: UserCheck,
    title: "4. User Representations",
    content: [
      "By using the Site, you represent and warrant that:",
    ],
    items: [
      "All information you submit (e.g., via the contact form) will be true, accurate, current, and complete.",
      "You have the legal capacity to, and agree to, comply with these Terms of Service.",
      "You will not use the Site or Services for any illegal or unauthorized purpose.",
      "Your use of the Site and Services will not violate any applicable law or regulation."
    ]
  },
  {
    icon: Ban,
    title: "5. Prohibited Activities",
    content: [
      "You may not access or use the Site or Services for any purpose other than that for which we make them available. Prohibited activities include, but are not limited to:",
    ],
    items: [
      "Systematically retrieving data from the Site to create a collection, database, or directory without our written permission.",
      "Using the Site to advertise or offer to sell unauthorized goods and services.",
      "Interfering with, disrupting, or creating an undue burden on the Site or the networks or services connected to the Site.",
      "Attempting to bypass any measures of the Site designed to prevent or restrict access.",
      "Using any information obtained from the Site in order to harass, abuse, or harm another person."
    ]
  },
  {
    icon: CreditCard,
    title: "6. Client Engagements and Payments",
    content: [
        "All Client Services are subject to a signed SOW or client agreement. Fees for our Services will be set forth in the applicable SOW. All payments are due in accordance with the payment terms specified in the SOW. We reserve the right to suspend or terminate Services for non-payment of fees."
    ]
  },
  {
    icon: ExternalLink,
    title: "7. Third-Party Websites and Content",
    content: [
      "The Site may contain links to other websites (\"Third-Party Websites\") as well as articles, photographs, text, and other content belonging to or originating from third parties (\"Third-Party Content\"). We are not responsible for the accuracy, appropriateness, or completeness of Third-Party Websites or Third-Party Content, and your use of them is at your own risk."
    ]
  },
  {
    icon: FileClock,
    title: "8. Term and Termination",
    content: [
      "These Terms of Service shall remain in full force and effect while you use the Site. We reserve the right, in our sole discretion and without notice or liability, to deny access to and use of the Site and our Services to any person for any reason, including for breach of any representation, warranty, or covenant contained in these Terms."
    ]
  },
  {
    icon: ServerCrash,
    title: "9. Disclaimer of Warranties",
    content: [
      "THE SITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
    ]
  },
  {
    icon: ShieldAlert,
    title: "10. Limitation of Liability",
    content: [
      "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
    ]
  },
  {
    icon: Handshake,
    title: "11. Indemnification",
    content: [
      "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of your use of the Site or Services or your breach of these Terms of Service."
    ]
  },
  {
    icon: Scale,
    title: "12. Governing Law",
    content: [
      "These Terms of Service and your use of the Site and Services are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles."
    ]
  },
  {
    icon: MessageCircleQuestion,
    title: "13. Contact Us",
    content: [
      "To resolve a complaint or receive further information regarding the use of the Site or Services, please contact us through the methods provided on our Contact Us page."
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <FileText className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: July 20, 2025</p>
        </header>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {termsSections.map((section) => (
            <Card key={section.title} className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <section.icon className="h-8 w-8 text-accent shrink-0"/>
                <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                {section.content?.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
                
                {section.items && (
                  <ul className="space-y-3 list-inside">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
