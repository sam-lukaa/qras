import { iVarirants } from './Button.dto'

export const variants: iVarirants[] = [
  {
    bg: 'bg-danger',
    variant: 'danger',
    color: 'text-white',
    border: 'border-danger',
  },
  {
    bg: 'bg-white',
    variant: 'default',
    color: 'text-primary',
    border: 'border-white',
  },
  {
    bg: 'bg-none',
    variant: 'outline',
    color: 'text-[#5B5B5B]',
    border: 'border-[#F0F0F0]',
  },
  {
    variant: 'tertiary',
    bg: 'bg-neutral-100',
    color: 'text-neutral-500',
    border: 'border-neutral-100',
  },
  {
    bg: 'bg-primary',
    variant: 'primary',
    color: 'text-white',
    border: 'border-primary',
  },
  {
    bg: 'bg-white',
    color: 'text-primary',
    border: 'border-primary',
    variant: 'outline-primary',
  },
  {
    bg: 'bg-white',
    color: 'text-primary',
    border: 'border-primary',
    variant: 'outline-primary-',
  },
  {
    bg: 'bg-uprow-800',
    variant: 'dark',
    color: 'text-white',
    border: 'border-uprow-800',
  },
  {
    bg: 'bg-warning',
    variant: 'warning',
    color: 'text-dark',
    border: 'border-warning',
  },
  {
    bg: 'bg-success',
    variant: 'success',
    color: 'text-dark',
    border: 'border-success',
  },
  {
    bg: 'bg-secondary',
    variant: 'secondary',
    color: 'text-dark',
    border: 'border-secondary',
  },
]
