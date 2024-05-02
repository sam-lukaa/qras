import { cn } from '@/shared/utils'
import { iTBody, iTable, iTd, iTh, iThead, iTr } from './Table.dto'

export const Table = ({ className, children }: iTable) => {
  return (
    <section
      className={`max-md:px-[.4rem] px-[.5rem] pb-[1rem] pl-[1rem] !overflow-x-scroll block ${className}`}
    >
      <table className="lg:max-w-screen xl:block xl:border-collapse !overflow-scroll rounded-xl bg-white py-4">
        {children}
      </table>
    </section>
  )
}

export const THead = ({ children }: iThead) => {
  return (
    <thead className="p-[.6rem] border-b-[.0625rem] !border-b-light">
      {children}
    </thead>
  )
}

export const TBody = ({ children }: iTBody) => {
  return <tbody className="lg:overflow-x-auto pt-[1.125rem]">{children}</tbody>
}

export const Tr = ({ className, children, ...props }: iTr) => {
  return (
    <tr
      {...props}
      className={`rounded-xl w-full pt-[1rem] border-[.88rem] border-b-[2rem] border-white ${className}`}
    >
      {children}
    </tr>
  )
}

export const Th = ({ show, children, className, ...props }: iTh) => {
  return (
    <th
      className={cn(
        ` ${
          show === false && 'max-md:hidden'
        } font-medium text-[#A5A2A2] text-sm lg:text-[.75rem] pl-8 pr-[1rem] lg:pr-[1.8rem] py-[1rem] text-left lg:w-[8%] ${className}`,
      )}
      {...props}
    >
      {children}
    </th>
  )
}

export const Td = ({ show, onClick, children, className, ...props }: iTd) => {
  return (
    // @ts-ignore
    <td
      onClick={onClick}
      className={cn(
        `${
          show === false && 'max-md:hidden'
        } font-medium text-[#626262] text-xs lg:p-[.4rem] pt-[.5625rem] !pl-8 lg:pb-[1rem] !break-words table-cell ${className}`,
      )}
      {...props}
    >
      {children}
    </td>
  )
}
