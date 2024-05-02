'use client'

import Link from 'next/link'
import { useLecturerSignup } from '@/program'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Button, Input, PasswordInput, Select } from '@/components'

export default function Signup() {
  const initialState = {
    email: '',
    password: '',
    full_name: '',
    department: '',
  }

  const [info, setInfo] = useState(initialState)

  const { email, password, full_name, department } = info

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement

    setInfo({ ...info, [name]: name === 'level' ? Number(value) : value })
  }

  const { mutate, isPending } = useLecturerSignup()

  const handleSignUp = (e: SyntheticEvent) => {
    e.preventDefault()

    mutate(info)
  }

  return (
    <>
      <main className="grid place-items-center m-auto w-1/3 h-screen">
        <section className="w-full">
          <header className="mb-6 grid gap-3 text-center">
            <h4>Attendance Management System</h4>

            <h6 className="text-primary">Sign up</h6>
          </header>

          <form onSubmit={handleSignUp} className="grid gap-4">
            <Input
              name="full_name"
              value={full_name}
              label="Full Name"
              onChange={handleChange}
            />

            <Input
              type="email"
              name="email"
              value={email}
              label="Email Address"
              onChange={handleChange}
            />

            <Select
              name="department"
              value={department}
              label="Department"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select Department
              </option>

              <option value="CPE">Computer Engineering</option>

              <option value="EEE">Electrical Electronics Engineering</option>
            </Select>

            <PasswordInput
              name="password"
              value={password}
              type="password"
              label="Password"
              onChange={handleChange}
              placeholder="************"
            />

            <Button isLoading={isPending}>Sign up</Button>
          </form>

          <small className="w-full  flex justify-end mt-3">
            Already a member?
            <span className="ml-1">
              <Link href="signin" className="text-primary">
                Sign in
              </Link>
            </span>
          </small>
        </section>
      </main>
    </>
  )
}
