'use client'

import { useState } from 'react'
import { cn } from '@/shared/utils'
import { sizes } from './constants'
import { EyeClosed, Search } from '@/assets/icons'
import { ISelect, ITextarea, iInput } from './Input.dto'

export const Label = ({
  id,
  label,
}: {
  id?: string | undefined
  label: string | undefined
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="text-base text-left text-[#5B5B5B] font-medium mb-2"
        >
          {label}
        </label>
      )}
    </>
  )
}

export const Input = ({
  id,
  type,
  label,
  className,
  placeholder,
  ...props
}: iInput) => {
  return (
    <fieldset className={cn(`w-full grid ${className}`)}>
      {label && <Label id={id} label={label} />}

      <input
        id={id}
        {...props}
        type={type}
        placeholder={placeholder}
        className="py-[.81rem] px-[1.31rem] placeholder:text-light-gray rounded-md outline-primary border-[1px] border-[#E3E3E3] shadow-sm"
      />
    </fieldset>
  )
}

export const PasswordInput = ({
  id,
  label,
  className,
  placeholder,
  ...props
}: iInput) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show)

  return (
    <fieldset className={cn(`flex flex-col gap-[.5rem], ${className}`)}>
      {label && (
        <label htmlFor={id} className="text-gray font-medium">
          {label}
        </label>
      )}

      <div className="flex items-center justify-between gap-[.75rem] py-[.81rem] px-[1.31rem] border-[1px] border-[#E3E3E3] shadow-sm rounded-md">
        <input
          id={id}
          {...props}
          placeholder={placeholder}
          type={show ? 'text' : 'password'}
          className="placeholder:text-light-gray outline-none "
        />

        <button type="button" onClick={handleShow}>
          <EyeClosed />
        </button>
      </div>
    </fieldset>
  )
}

export const Select = ({
  err,
  msg,
  scale,
  label,
  disabled,
  children,
  className,
  ...props
}: ISelect) => {
  // const selectSize: iSize | any =
  //   sizes.find(sizing => Object.keys(sizing)[0] === scale && sizing[0]) ||
  //   Object.values(sizes[1])[0];

  const sizing = sizes.find((sizing) => Object.keys(sizing)[1] === scale)

  const selectSize =
    typeof sizing === 'object'
      ? Object.values(sizing)[0]
      : Object.values(sizes[1])[0]

  // px-[.8rem] md:px-[1rem] py-[.7rem]

  return (
    <fieldset className={cn(`w-full flex flex-col ${className}`)}>
      {label && <Label label={label} />}

      <select
        className={`rounded-[.5rem] self-stretch w-full shadow-sm py-[.81rem] px-[1.31rem] ${
          disabled ? 'bg-transparent' : 'border-[.0625rem] border-[#D0D5DD]'
        } `}
        {...props}
      >
        {children}
      </select>

      <small className={`${err ? 'text-danger' : 'text-gray'}`}>
        {err ?? msg}
      </small>
    </fieldset>
  )
}

export const Textarea = ({
  id,
  err,
  msg,
  label,
  styles,
  disabled,
  children,
  className,
  ...props
}: ITextarea) => {
  return (
    <fieldset className={cn(`w-full grid ${styles}`)}>
      {label && <Label id={id} label={label} />}

      <textarea
        className={cn(
          `rounded-[.31rem] placeholder:font-[400] resize-none ${
            disabled
              ? 'bg-transparent'
              : 'px-[.8rem] md:px-[1rem] py-[.7rem] border-[.0625rem] border-[#D0D5DD] shadow-sm outline-primary'
          } ${className}`,
        )}
        {...props}
      />

      <small className={`${err ? 'text-danger' : 'text-gray'}`}>
        {err ?? msg}
      </small>
    </fieldset>
  )
}

export const SearchInput = ({
  onSubmit,
  disabled,
  className,
  placeholder,
  ...props
}: iInput) => {
  return (
    // @ts-ignore
    <form
      onSubmit={() => onSubmit}
      className={cn(
        `flex items-center gap-[.25rem] bg-neutral-100 border border-neutral-200 py-[.5rem] px-[.75rem] rounded-md ${className}`,
      )}
    >
      <input
        {...props}
        type="search"
        placeholder={placeholder}
        className="bg-inherit outline-none w-full"
      />

      <button disabled={disabled}>
        <Search />
      </button>
    </form>
  )
}
