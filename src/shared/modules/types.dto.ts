import { ChangeEvent, FieldsetHTMLAttributes, HTMLAttributes } from 'react'

export interface iFlex extends FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export interface iModal extends HTMLAttributes<HTMLElement> {
  title?: string
  desc?: string
  reset?: () => void
  visible: boolean
  withBtn?: boolean
  btnValue?: string
  toggle?: () => void
  isLoading?: boolean
  isSuccess?: boolean
  autoClose?: boolean
  children: React.ReactNode
  handleSubmit?: (e: ChangeEvent<HTMLFormElement>) => void
}
