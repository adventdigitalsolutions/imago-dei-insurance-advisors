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
    'bg-royal-purple w-fit text-white rounded-[30px] cursor-pointer text-lg hover:bg-gray-400 transition-all duration-300 hover:shadow-lg shadow-none';
  const sizeClasses = size === 'small' ? 'px-4 py-3 text-sm' : 'px-6 py-3';
  const deepBlueClasses =
    variant === 'deepBlue'
      ? 'bg-[#2B4C9D] hover:bg-[#2B4C9D]/80 border border-white border-2 border-solid hover:shadow-lg shadow-none'
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
