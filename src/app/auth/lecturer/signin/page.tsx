'use client'

import Link from 'next/link'
import { useLecturerSignin } from '@/program'
import { Button, Input, PasswordInput } from '@/components'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

export default function Signin() {
  const initialState = {
    email: '',
    password: '',
  }

  const [info, setInfo] = useState(initialState)

  const { password, email } = info

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement

    setInfo({ ...info, [name]: value })
  }

  const { mutate, isPending } = useLecturerSignin()

  const handleSignin = (e: SyntheticEvent) => {
    e.preventDefault()

    mutate(info)
  }

  return (
    <>
      <main className="grid place-items-center m-auto w-1/3 h-screen">
        <section className="w-full">
          <header className="mb-6 grid gap-3 text-center">
            <h4>Attendance Management System</h4>

            <h6 className="text-primary">Sign in</h6>
          </header>

          <form onSubmit={handleSignin} className="grid gap-4">
            <Input
              required
              name="email"
              value={email}
              onChange={handleChange}
              label="Email Address"
              placeholder="yours@email.com"
            />

            <PasswordInput
              required
              name="password"
              value={password}
              type="password"
              label="Password"
              onChange={handleChange}
              placeholder="************"
            />

            <Button isLoading={isPending}>Sign in</Button>
          </form>

          <small className="w-full  flex justify-end mt-3">
            Not yet registered?
            <span className="ml-1">
              <Link href="signup" className="text-primary">
                Sign up
              </Link>
            </span>
          </small>
        </section>
      </main>
    </>
  )
}
