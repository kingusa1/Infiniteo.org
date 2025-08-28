
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { postsData } from '@/lib/blog-data';

interface PostPageParams {
  slug: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

function getPostBySlug(slug: string) {
  return postsData.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: PostPageParams }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
    }
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound(); 
  }

  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>

          <Card className="shadow-lg bg-card">
            <CardContent className="py-6">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-primary prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-accent prose-h3:mt-4 prose-h3:mb-2 prose-p:leading-relaxed prose-a:text-accent prose-a:hover:underline prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 prose-strong:text-foreground/90"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </CardContent>
          </Card>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-primary mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Blog Overview
              </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
