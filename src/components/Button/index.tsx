import { cn } from '@/shared/utils'
import { variants } from './constants'
import { iButton, iVarirants } from './Button.dto'

export const Button = ({
  size,
  variant,
  disabled,
  children,
  isLoading,
  className,
  ...props
}: iButton) => {
  const selectVariant: iVarirants | any =
    variants.find((bgVariant) => bgVariant.variant === variant) || variants[4]

  return (
    <button
      disabled={isLoading || disabled}
      className={cn(
        `flex items-center justify-center gap-[.38rem] font-[700] ${
          size === 'sm'
            ? 'p-[.5rem] lg:p-[.75rem] text-xs'
            : size === 'md'
            ? 'p-[.95rem] lg:py-[1rem] px-[1.3rem] h-[1.3rem] text-sm'
            : 'py-[.7rem] px-[1.25rem] lg:py-[.75rem] lg:px-[1.5rem]'
        } ${
          selectVariant
            ? `${selectVariant?.bg} ${selectVariant?.color}`
            : 'bg-dark text-white'
        }  border-[1px] border-t-[.0813rem] border-r-[.1rem] ${
          selectVariant ? selectVariant?.border : 'border-dark'
        } ${
          disabled && 'bg-neutral-200 !text-white border-none'
        } hover:brightness-125 transition-all ease-linear duration-[.15] disabled:text-[#CCCCCC] disabled:cursor-not-allowed disabled:hover:brightness-100 rounded-[.38rem] ${className}`,
      )}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
