'use client'

import { deleteCookie } from 'cookies-next'
import { useSetRecoilState } from 'recoil'
import { userData } from '../lib/atoms'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const { push } = useRouter()
  const setUserdata = useSetRecoilState(userData)

  const handleLogout = () => {
    setUserdata({})
    push('/auth/signin')
    deleteCookie('qr-attendance')
  }
  return (
    <header className="sticky top-0 flex items-center justify-between py-6 px-12">
      <h3 className="text-primary font-bold">Attendance Management System</h3>

      <nav className="flex items-center gap-4">
        <figure className="rounded-full size-9 bg-success" />

        <button
          className="text-danger text-semibold hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </header>
  )
}
