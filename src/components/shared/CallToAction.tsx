import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface CallToActionProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export default function CallToAction({ href, children, icon: Icon, variant = 'default', size = 'lg', className, ...props }: CallToActionProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(
      variant === 'default' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : '',
      'shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5',
      className
    )} {...props}>
      <Link href={href} className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </Link>
    </Button>
  );
}
