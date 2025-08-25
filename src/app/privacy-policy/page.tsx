
import type { Metadata } from 'next';
import { Shield, BookUser, Database, GanttChart, Share, Lock, Server, Users, Bell, FileQuestion, CalendarClock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Infiniteo Solutions Privacy Policy.',
};

const policySections = [
  {
    icon: BookUser,
    title: "Introduction",
    content: [
      "Welcome to Infiniteo (\"Infiniteo,\" \"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your information when you visit our website (the \"Site\"), and use our automation workflow services (collectively, the \"Services\").",
      "By accessing our Site or using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access the site."
    ]
  },
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "We collect information that you provide directly to us, information we collect automatically, and information we may receive from third parties."
    ],
    subSections: [
      {
        title: "Information You Provide to Us",
        items: [
          "<strong>Contact Us:</strong> When you fill out our contact form or otherwise communicate with us, we collect your name, company name, email address, phone number (optional), and the content of your message.",
          "<strong>Engage Our Services:</strong> When you become a client, we may collect additional information necessary to provide our services, such as business details, system access credentials (securely managed), and payment information."
        ]
      },
      {
        title: "Information We Collect Automatically",
        items: [
          "<strong>Log and Usage Data:</strong> Your IP address, browser type, operating system, referral URLs, pages viewed, and the dates/times of your visits.",
          "<strong>Cookies and Similar Technologies:</strong> We use cookies to operate and administer our Site and to improve your experience. A \"cookie\" is a piece of information sent to your browser by a website you visit. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site."
        ]
      }
    ]
  },
  {
    icon: GanttChart,
    title: "How We Use Your Information",
    content: ["We use the information we collect for various business purposes, including to:"],
    items: [
      "Provide, operate, and maintain our Services.",
      "Respond to your comments, questions, and requests, and provide customer service.",
      "Communicate with you about services, offers, and events offered by Infiniteo.",
      "Process and complete transactions and send you related information, including invoices.",
      "Monitor and analyze trends, usage, and activities in connection with our Site and Services to improve them.",
      "Detect and prevent fraudulent or illegal activities.",
      "Comply with legal and regulatory obligations."
    ]
  },
  {
    icon: Share,
    title: "How We Share Your Information",
    content: ["We do not sell your personal information. We may share information we have collected about you in the following situations:"],
    items: [
      "<strong>With Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services for us or on our behalf, such as payment processing, data analysis, and hosting services. These third parties are obligated to protect your information.",
      "<strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
      "<strong>To Comply with Laws:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.",
      "<strong>To Protect Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or as evidence in litigation in which we are involved."
    ]
  },
  {
    icon: Lock,
    title: "Security of Your Information",
    content: ["We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."]
  },
  {
    icon: Server,
    title: "Data Retention",
    content: ["We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies."]
  },
  {
    icon: FileQuestion,
    title: "Your Data Protection Rights (GDPR & CCPA)",
    content: ["Depending on your location, you may have the following rights regarding your personal information:"],
    items: [
      "The right to access, update, or delete the information we have on you.",
      "The right of rectification.",
      "The right to object to our processing of your personal data.",
      "The right of restriction.",
      "The right to data portability.",
      "The right to withdraw consent at any time.",
    ],
    footer: "To exercise any of these rights, please contact us. We will respond to your request in accordance with applicable data protection laws."
  },
  {
    icon: Users,
    title: "Policy for Children",
    content: ["Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information."]
  },
  {
    icon: Bell,
    title: "Changes to This Privacy Policy",
    content: ["We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Effective Date\" at the top. You are advised to review this Privacy Policy periodically for any changes."]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 flex items-center justify-center gap-2">
            <CalendarClock className="h-4 w-4"/>
            <span>Effective Date: July 20, 2025</span>
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {policySections.map((section) => (
            <Card key={section.title} className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <section.icon className="h-8 w-8 text-accent shrink-0"/>
                <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                {section.content?.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
                
                {section.subSections?.map((sub, i) => (
                  <div key={i} className="pl-4 border-l-2 border-accent/50">
                    <h4 className="text-lg font-semibold text-accent mb-2">{sub.title}</h4>
                    <ul className="space-y-3 list-inside">
                      {sub.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                
                {section.footer && (
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border/50" dangerouslySetInnerHTML={{ __html: section.footer }}></p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
