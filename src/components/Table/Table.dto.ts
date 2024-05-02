import { TableHTMLAttributes, ThHTMLAttributes, HTMLAttributes } from 'react'

export interface iTable extends TableHTMLAttributes<HTMLTableElement> {}

export interface iTr extends ThHTMLAttributes<HTMLTableRowElement> {}

export interface iThead extends HTMLAttributes<HTMLTableSectionElement> {}

export interface iTd extends HTMLAttributes<HTMLTableSectionElement> {
  show?: boolean
  onClick?: () => void
}
export interface iTh extends ThHTMLAttributes<HTMLTableCellElement> {
  show?: boolean
}
export interface iTBody extends iThead {}
