import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'deepBlue';
  size?: 'small' | 'default';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className = '',
  size = 'default',
  variant = 'default',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'bg-medical-blue w-fit text-white rounded-full cursor-pointer font-semibold tracking-wide hover:bg-medical-navy transition-all duration-200 hover:shadow-md shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/40 focus-visible:ring-offset-2';
  const sizeClasses = size === 'small' ? 'px-5 py-2.5 text-sm' : 'px-7 py-3 text-base';
  const deepBlueClasses =
    variant === 'deepBlue'
      ? 'bg-medical-navy hover:bg-medical-navy/90 border border-white/70 hover:shadow-md shadow-none'
      : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${deepBlueClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
