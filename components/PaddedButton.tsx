import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { type ButtonHTMLAttributes } from 'react';

interface PaddedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export function PaddedButton({
  children,
  className,
  size = 'lg',
  variant = 'default',
  ...props
}: PaddedButtonProps) {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-5',
    xl: 'p-6',
  };

  return (
    <Button
      variant={variant}
      className={`${paddingClasses[size]} ${className || ''} cursor-pointer`}
      {...props}
    >
      {children}
    </Button>
  );
}
