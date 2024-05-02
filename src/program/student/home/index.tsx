'use client'

import { useState } from 'react'
import { Button } from '@/components'
import { useModal } from '@/shared/hooks'
import { Header, Modal } from '@/shared/modules'
import { Scanner } from '@yudiel/react-qr-scanner'

export const Home = () => {
  const { visible, toggle } = useModal()

  const [data, setData] = useState({
    course_code: '',
    course_title: '',
    course_topic: '',
    course_duration: '',
    topic_description: '',
  })

  // console.log(data)

  return (
    <>
      {/* modal render */}
      <Modal visible={visible} toggle={toggle}>
        <header className="mb-8 text-center">
          <h4>Confirm your registration</h4>
        </header>

        <article className="grid gap-3 mb-5">
          <p className="font-bold">Course Title</p>

          <small className="text-light">
            {data?.course_title} - {data?.course_code}
          </small>
        </article>

        <article className="grid gap-3 mb-5">
          <p className="font-bold">Course Topic</p>

          <small className="text-light">
            {data?.course_topic} - {data.course_duration}hrs
          </small>
        </article>

        <article className="grid gap-3 mb-5">
          <p className="font-bold">Topic Description</p>

          <small className="text-light">{data?.topic_description}</small>
        </article>

        <section className="flex items-center gap-4 mt-10">
          <Button size="sm" variant="danger">
            Cancel
          </Button>

          <Button size="sm">Proceed</Button>
        </section>
      </Modal>

      <Header />

      <main className="w-full h-[85dvh] m-auto grid place-items-center overflow-hidden">
        <form className="grid gap-4">
          <section className="size-80">
            <Scanner
              onResult={(text) => {
                toggle()
                setData(JSON.parse(text))
              }}
              onError={(error) => console.log(error?.message)}
              styles={{ container: { width: '100%', height: '100%' } }}
            />
          </section>
        </form>
      </main>
    </>
  )
}
