'use client'

import { useGetAttendance } from '@/program'
import { successResponse } from '@/shared/hooks/response'
import { Table, THead, Tr, Th, TBody, Td } from '@/components'
import { Loading } from '@/shared/modules'
import Image from 'next/image'

export default function Lecture() {
  const { data, isLoading, isSuccess } = useGetAttendance()

  const attendance = isSuccess && successResponse(data).data

  const {
    course_code,
    course_title,
    course_topic,
    attended_students,
  } = attendance

  console.log(attendance)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="grid gap-2">
            <h4 className="capitalize">
              {course_title} - {course_code}
            </h4>

            <small className="text-light">{course_topic}</small>
          </header>

          <section className="my-5 grid gap-3 place-items-center">
            <Image
              alt=""
              width={100}
              height={100}
              src={imageData}
              className="rounded-md border border-primary p-2 size-40"
            />
          </section>

          <Table>
            <THead>
              <Tr>
                <Th className="!w-[4%]">S/N</Th>
                <Th className="!w-[18%]">Student Info</Th>
                <Th className="!w-[13%]">Matric Number</Th>
                <Th className="!w-[13%]">Course Title</Th>
                <Th className="!w-[13%]">Course Code</Th>
                <Th className="!w-[13%]">Course Topic</Th>
                <Th className="!w-[19%]">Topic Description</Th>
                <Th className="!w-[15%]">Time Stamp</Th>
              </Tr>
            </THead>

            <TBody>
              <Tr
                className="cursor-pointer"
                // onClick={() => push(`/lecturer/lectures/:[id]`)}
              >
                <Td>01</Td>

                <Td className="flex items-center gap-2">
                  <figure className="rounded-full bg-primary size-12" />

                  <figcaption>
                    <p className="text-gray">Akanbi Daniel</p>
                    <small className="text-light">500L</small>
                  </figcaption>
                </Td>

                <Td>CPE/18/7635</Td>
                <Td>Embedded Systems</Td>
                <Td>EEE 405</Td>
                <Td>Software Prototyping</Td>
                <Td>
                  This topic describes the various techniques invloved in
                  prototyping and their use cases
                </Td>

                <Td>12:02 PM</Td>
              </Tr>
            </TBody>
          </Table>
        </>
      )}
    </>
  )
}

const imageData = `data:image/png;base64,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`
