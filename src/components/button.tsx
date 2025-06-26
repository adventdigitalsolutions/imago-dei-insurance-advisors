import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'small';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'bg-royal-purple w-fit text-white rounded-[30px] cursor-pointer text-base hover:bg-gray-300 transition-all duration-300 hover:shadow-xl shadow-none';
  const sizeClasses = variant === 'small' ? 'px-3 py-4 text-sm' : 'px-4 py-4';

  return (
    <button className={`${baseClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
