
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Automation Guides',
  description: 'Explore articles, guides, and insights on workflow automation from Infiniteo.',
};

// Placeholder data for blog posts
const posts = [
  {
    slug: 'linkedin-automation-guidelines',
    title: 'Mastering LinkedIn Automation: Rules and Best Practices',
    excerpt: 'Unlock the power of LinkedIn automation safely and effectively. Learn the do\'s and don\'ts to maximize your reach without compromising your account.',
    date: '2024-07-30',
    tags: ['LinkedIn', 'Automation', 'Social Media', 'Guidelines'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'crm-data-sync-strategies',
    title: 'Seamless CRM Data Synchronization: A Comprehensive Guide',
    excerpt: 'Discover strategies to keep your CRM data accurate and up-to-date across all platforms through intelligent automation.',
    date: '2024-07-28',
    tags: ['CRM', 'Data Synchronization', 'Automation', 'Workflow'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'future-of-workflow-automation-ai',
    title: 'The Future of Workflow Automation: How AI is Changing the Game',
    excerpt: 'Explore the transformative impact of Artificial Intelligence on workflow automation, predictive analytics, and intelligent decision-making for businesses.',
    date: '2024-07-26',
    tags: ['AI', 'Workflow Automation', 'Future Tech', 'Business Intelligence'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'boosting-sales-crm-automation',
    title: 'Boosting Sales Productivity with CRM Automation Strategies',
    excerpt: 'Learn how to automate key CRM tasks such as lead scoring, follow-ups, and data entry to empower your sales team and close more deals.',
    date: '2024-07-24',
    tags: ['CRM', 'Sales Automation', 'Productivity', 'Lead Management'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'choosing-right-automation-service',
    title: 'Choosing the Right Automation Service: Beyond Off-the-Shelf Tools',
    excerpt: 'Off-the-shelf tools have limits. Discover why a custom automation service like Infiniteo offers superior flexibility, scalability, and integration for your unique business needs.',
    date: '2024-07-22',
    tags: ['Automation Service', 'Custom Workflows', 'Scalability', 'Bespoke Solutions'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'streamlining-ecommerce-operations-automation',
    title: 'Streamlining E-commerce Operations: An Automation Checklist',
    excerpt: 'From inventory management to customer service, discover key e-commerce processes you can automate to enhance efficiency and customer satisfaction.',
    date: '2024-07-20',
    tags: ['E-commerce', 'Automation', 'Operations', 'Customer Experience'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'api-integration-unlocking-data-silos',
    title: 'The Power of API Integration in Modern Business Automation',
    excerpt: 'Break down data silos and create seamless workflows by leveraging API integrations. Understand how connecting your apps unlocks true automation potential.',
    date: '2024-07-18',
    tags: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Connected Systems'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'beyond-task-automation-strategic-bpa',
    title: 'Beyond Task Automation: Embracing Strategic Business Process Automation (BPA)',
    excerpt: 'Move beyond simple task automation to a holistic Business Process Automation strategy that drives significant improvements in efficiency, cost reduction, and compliance.',
    date: '2024-07-16',
    tags: ['BPA', 'Strategic Automation', 'Process Improvement', 'Efficiency'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'automating-client-onboarding-experience',
    title: 'First Impressions Count: Automating Your Client Onboarding Process',
    excerpt: 'Create a stellar first impression and save valuable time by automating your client onboarding workflow, from contract signing to initial setup.',
    date: '2024-07-14',
    tags: ['Client Onboarding', 'Workflow Automation', 'Customer Experience', 'Efficiency'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'measuring-roi-automation-projects',
    title: 'Measuring the ROI of Your Automation Projects: Key Metrics to Track',
    excerpt: 'Understand how to effectively measure the return on investment for your automation initiatives, proving their value and guiding future strategy.',
    date: '2024-07-12',
    tags: ['ROI', 'Automation', 'Metrics', 'Business Performance'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'automating-social-content-curation',
    title: 'Automating Social Media Content Curation: Finding and Sharing Value',
    excerpt: 'Save time and enhance your social media presence by automating content discovery and curation. Learn effective strategies and tools.',
    date: '2024-07-10',
    tags: ['Social Media', 'Content Curation', 'Automation', 'Efficiency'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'intelligent-document-processing-idp',
    title: 'Intelligent Document Processing (IDP): Extracting Value from Your Data',
    excerpt: 'Go beyond OCR. Explore how IDP uses AI to understand, categorize, and extract information from documents, streamlining workflows.',
    date: '2024-07-08',
    tags: ['IDP', 'AI', 'Data Extraction', 'Document Automation'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'nocode-lowcode-automation-platforms',
    title: 'No-Code/Low-Code Platforms: Empowering Citizen Automators',
    excerpt: 'Discover how no-code and low-code platforms are democratizing automation, allowing non-developers to build and deploy solutions.',
    date: '2024-07-06',
    tags: ['No-Code', 'Low-Code', 'Automation', 'Citizen Developer'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'automated-reporting-business-insights',
    title: 'Automated Reporting: Gaining Real-Time Business Insights Effortlessly',
    excerpt: 'Stop wasting time on manual report generation. Learn how to automate reporting for timely, accurate insights and better decision-making.',
    date: '2024-07-04',
    tags: ['Reporting', 'Automation', 'Business Intelligence', 'Analytics'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'ai-ethics-responsible-automation',
    title: 'AI Ethics in Automation: Building Responsible and Fair Systems',
    excerpt: 'As AI powers more automation, understanding its ethical implications is crucial. Explore key considerations for responsible AI deployment.',
    date: '2024-07-02',
    tags: ['AI Ethics', 'Responsible AI', 'Automation', 'Governance'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'hyperautomation-next-level-efficiency',
    title: 'Hyperautomation: Taking Business Efficiency to the Next Level',
    excerpt: 'Understand the concept of hyperautomation, which combines multiple automation technologies like RPA, AI, and ML for end-to-end process optimization.',
    date: '2024-06-30',
    tags: ['Hyperautomation', 'RPA', 'AI', 'Process Optimization'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'automating-customer-support-workflows',
    title: 'Automating Customer Support: Enhancing Experience and Efficiency',
    excerpt: 'From chatbots to automated ticket routing, learn how automation can transform your customer support operations for faster responses and happier customers.',
    date: '2024-06-28',
    tags: ['Customer Support', 'Automation', 'Chatbots', 'CX'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'project-management-automation-streamlining-delivery',
    title: 'Project Management Automation: Streamlining Task and Team Delivery',
    excerpt: 'Automate task assignments, progress tracking, notifications, and reporting in your project management workflows to improve delivery and collaboration.',
    date: '2024-06-26',
    tags: ['Project Management', 'Automation', 'Productivity', 'Collaboration'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'process-mining-uncovering-automation-opportunities',
    title: 'Process Mining: Uncovering Hidden Automation Opportunities',
    excerpt: 'Learn how process mining tools analyze event logs to visualize your actual business processes, identify bottlenecks, and reveal prime candidates for automation.',
    date: '2024-06-24',
    tags: ['Process Mining', 'Automation', 'Process Improvement', 'Data Analysis'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'automation-deployment-models-cloud-onprem-hybrid',
    title: 'Automation Deployment Models: Cloud, On-Premise, or Hybrid?',
    excerpt: 'Choosing the right deployment model for your automation solutions is critical. Understand the pros and cons of cloud, on-premise, and hybrid approaches.',
    date: '2024-06-22',
    tags: ['Deployment', 'Cloud Automation', 'On-Premise', 'Hybrid IT'],
    author: 'Infiniteo Team',
  },
  {
    slug: 'role-of-rpa-in-modern-business',
    title: 'The Role of RPA (Robotic Process Automation) in Modern Business',
    excerpt: 'Explore how Robotic Process Automation (RPA) is streamlining repetitive tasks and driving efficiency across various industries today.',
    date: '2024-06-20',
    tags: ['RPA', 'Automation', 'Business Process', 'Efficiency', 'Technology'],
    author: 'Infiniteo Team',
  }
];

export default function BlogPage() {
  // Sort posts by date in descending order for the listing page
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <Newspaper className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Infiniteo Insights</h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Your source for expert guides, articles, and best practices in workflow automation. Stay ahead with Infiniteo.
          </p>
        </header>

        {sortedPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-accent hover:underline">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <div className="text-xs text-muted-foreground">
                    <span>{post.date}</span> by <span>{post.author}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/90 mb-4">{post.excerpt}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="link" asChild className="text-primary p-0 hover:underline">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Coming Soon!</h2>
            <p className="text-lg text-foreground">
              We're busy crafting valuable content for you. Check back soon for our latest articles and guides on automation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
