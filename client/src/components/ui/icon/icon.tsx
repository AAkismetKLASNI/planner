import type { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  size?: string;
  color?: string;
  extra?: string;
}

export function Icon({
  Icon,
  onClick,
  size,
  color,
  type,
  extra,
  ...props
}: Props) {
  return (
    <button onClick={onClick} className={extra} type={type} {...props}>
      <Icon
        size={size}
        color={color}
        className="opacity-30 hover:opacity-100 transition-opacity"
      />
    </button>
  );
}
