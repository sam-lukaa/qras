'use client'

import Link from 'next/link'
import { useStudentSignin } from '@/program'
import { Button, Input, PasswordInput } from '@/components'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

export default function Signin() {
  const initialState = {
    matric_no: '',
    password: '',
  }

  const [info, setInfo] = useState(initialState)

  const { password, matric_no } = info

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement

    setInfo({ ...info, [name]: value })
  }

  const { mutate, isPending } = useStudentSignin()

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
              name="matric_no"
              value={matric_no}
              onChange={handleChange}
              label="Matric No."
              placeholder="CPE/18/2252"
            />

            <PasswordInput
              required
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              label="Password"
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
