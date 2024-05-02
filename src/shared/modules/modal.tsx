'use client'

import { cn } from '../utils'
import { useEffect } from 'react'
import { iModal } from './types.dto'

export const Modal = ({
  reset,
  toggle,
  visible,
  children,
  autoClose,
  isSuccess,
  className,
  ...props
}: iModal) => {
  useEffect(() => {
    if (autoClose) {
      // @ts-ignore
      reset()

      // @ts-ignore
      toggle()
    }
  }, [isSuccess])

  return (
    <>
      {visible ? (
        <main className="w-screen fixed top-0 left-0 z-[30] pl-[4%] lg:pl-[35%] mt-[20%] lg:mt-[10%]">
          <section
            {...props}
            role="dialog"
            aria-modal="true"
            className={cn(
              `fixed m-auto w-[90%] lg:w-[40%] lg:max-w-[55%] min-h-[30%] lg:min-h-[55%] max-h-[90%] lg:max-h-[70%] bg-white z-[22] pt-[.94rem] px-[1.25rem] pb-[1.88rem] rounded-[.5rem] overflow-y-scroll overscroll-contain whitespace-pre-line`,
            )}
          >
            <section className="flex justify-end">
              <button
                type="button"
                onClick={toggle}
                className="right-0 size-7 rounded-full flex items-center justify-center p-[.9rem] text-[#404040] bg-[#ECECEC]"
              >
                &#x2715;
              </button>
            </section>

            <main className={cn(`mt-4 ${className}`)}>{children}</main>
          </section>

          <div
            onClick={toggle}
            className="w-screen h-screen fixed bg-black/40 bg-opacity-[.3] z-[21] top-0 left-0"
          />
        </main>
      ) : null}
    </>
  )
}
