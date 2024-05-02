'use client'

import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getCookie, setCookie } from 'cookies-next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes('consultants')) {
      setCookie('interface', 'consultants')
    } else {
      setCookie('interface', 'immigrant')
    }
  }, [getCookie('interface')])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  )
}
