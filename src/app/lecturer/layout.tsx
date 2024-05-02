import { ReactNode } from 'react'
import { Header } from '@/shared/modules'

export default function LecturerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className="xl:w-[85%] m-auto mt-12">{children}</main>
    </>
  )
}
