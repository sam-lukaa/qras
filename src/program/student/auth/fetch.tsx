'use client'

import { setCookie } from 'cookies-next'
import { useSetRecoilState } from 'recoil'
import { axios } from '@/shared/lib/axios'
import { useRouter } from 'next/navigation'
import { userData } from '@/shared/lib/atoms'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from '@tanstack/react-query'

export const useStudentSignup = () => {
  const { push } = useRouter()

  const setUSerData = useSetRecoilState(userData)

  const postFn = (data: any) => axios.post('student/register', data)

  return useMutation({
    mutationFn: (data: any) => postFn(data),

    onError: (err: AxiosError) => {
      console.error(err)
    },

    onSuccess: (data: AxiosResponse) => {
      if (!successResponse(data).token) return

      push('/')
      setUSerData(successResponse(data).data)
      setCookie('qr-attendance', successResponse(data).token)
    },
  })
}

export const useStudentSignin = () => {
  const { push } = useRouter()

  const setUSerData = useSetRecoilState(userData)

  const postFn = (data: any) => axios.post('student/login', data)

  return useMutation({
    mutationFn: (data: any) => postFn(data),

    onError: (err: AxiosError) => {
      console.error(err)
    },

    onSuccess: (data: AxiosResponse) => {
      const { token, ...rest } = successResponse(data)

      // console.info(token, rest)

      push('/')
      setUSerData(rest)
      setCookie('qr-attendance', token)
    },
  })
}

const successResponse = (data: AxiosResponse) => data.data
