import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  msg?: string
  err?: string
  scale?: 'sm' | 'md' | 'lg'
  label?: string
  styles?: string
  children: React.ReactNode
}

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  msg?: string
  err?: string
  label?: string
  styles?: string
}
