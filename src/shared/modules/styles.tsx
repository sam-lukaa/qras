import { cn } from '../utils'
import { iFlex } from './types.dto'

export const Flex = ({ className, children, ...props }: iFlex) => {
  return (
    <fieldset {...props} className={cn(`w-full flex gap-4 ${className}`)}>
      {children}
    </fieldset>
  )
}
