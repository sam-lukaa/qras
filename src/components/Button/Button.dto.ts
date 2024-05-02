import { ButtonHTMLAttributes } from 'react';

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  isLoading?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'dark'
    | 'danger'
    | 'warning'
    | 'success'
    | 'outline'
    | 'default'
    | 'outline-primary';
}

export interface iVarirants {
  bg: string;
  color: string;
  border: string;
  variant: string;
}
