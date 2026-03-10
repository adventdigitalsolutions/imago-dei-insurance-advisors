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
    'bg-royal-purple w-fit text-white rounded-full cursor-pointer font-semibold tracking-wide hover:bg-dark-blue transition-all duration-200 hover:shadow-lg shadow-none';
  const sizeClasses = size === 'small' ? 'px-5 py-2.5 text-sm' : 'px-7 py-3 text-base';
  const deepBlueClasses =
    variant === 'deepBlue'
      ? 'bg-dark-blue hover:bg-dark-blue/80 border-2 border-white/80 hover:shadow-lg shadow-none'
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
