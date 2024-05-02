'use client'

import { Modal } from '@/shared/modules'
import { useModal } from '@/shared/hooks'
import { useCreateAttendance } from '@/program'
import { useParams, useRouter } from 'next/navigation'
import { ChangeEvent, ReactNode, SyntheticEvent, useState } from 'react'
import {
  Td,
  Th,
  Tr,
  THead,
  Table,
  TBody,
  Button,
  SearchInput,
  Input,
  Textarea,
} from '@/components'

export default function Home() {
  const { push } = useRouter()

  const { toggle, visible } = useModal()

  const initialState = {
    course_code: '',
    course_topic: '',
    course_title: '',
    course_duration: '',
    topic_description: '',
  }

  const [attendance, setAttendance] = useState(initialState)

  const {
    course_code,
    course_topic,
    course_title,
    course_duration,
    topic_description,
  } = attendance

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement

    setAttendance({ ...attendance, [name]: value })
  }

  const { mutate, isPending } = useCreateAttendance({ toggle })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    mutate(attendance)
  }

  return (
    <>
      <section className="flex justify-between items-center">
        <h4>Created Attendance</h4>

        <nav className="flex items-center gap-6">
          <Button type="button" size="sm" onClick={toggle}>
            Create Attendance
          </Button>

          <SearchInput placeholder="Search..." />
        </nav>
      </section>

      <Table>
        <THead>
          <Tr>
            <Th className="!w-[4%]">S/N</Th>
            <Th>Date</Th>
            <Th>Duration</Th>
            <Th>Course Code</Th>
            <Th className="!w-[10%]">Course Title</Th>
            <Th className="!w-[10%]">Course Topic</Th>
            <Th className="!w-[20%]">Topic Description</Th>
          </Tr>
        </THead>

        <TBody>
          <Tr
            className="cursor-pointer"
            onClick={() => push(`/lecturer/lectures/:[id]`)}
          >
            <Td>01</Td>

            <Td className="grid gap-2">
              <p className="text-gray">20th May, 2024</p>
              <small className="text-light">10:00AM</small>
            </Td>

            <Td>2hrs</Td>
            <Td>EEE 405</Td>
            <Td>Embedded Systems</Td>
            <Td>Software Prototyping</Td>
            <Td>
              This topic describes the various techniques invloved in
              prototyping and their use cases
            </Td>
          </Tr>
        </TBody>
      </Table>

      {/* create attendance modal */}
      <Modal toggle={toggle} visible={visible}>
        <h4>Create Attendance</h4>

        <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
          <Input
            required
            name="course_title"
            value={course_title}
            onChange={handleChange}
            label="Course Title"
          />

          <Flex>
            <Input
              required
              name="course_duration"
              value={course_duration}
              onChange={handleChange}
              type="number"
              min={0}
              max={4}
              label="Course Duration(hrs)"
            />

            {/* <Input
            required
              name=""
              value={}
              onChange={handleChange}
              label="Start Time"
              type="time"
            /> */}
          </Flex>

          <Flex>
            <Input
              required
              name="course_topic"
              value={course_topic}
              onChange={handleChange}
              label="Course Topic"
            />

            <Input
              required
              name="course_code"
              value={course_code}
              onChange={handleChange}
              label="Course Code"
            />
          </Flex>

          <Textarea
            required
            onChange={handleChange}
            name="topic_description"
            value={topic_description}
            label="Topic Description"
          />

          <Button className="mt-4" isLoading={isPending}>
            Create Attendance
          </Button>
        </form>
      </Modal>
    </>
  )
}

const Flex = ({ children }: { children: ReactNode }) => {
  return (
    <fieldset className="w-full flex max-xl:flex-col items-center justify-between gap-4">
      {children}
    </fieldset>
  )
}
