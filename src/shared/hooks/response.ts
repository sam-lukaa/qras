import { AxiosResponse } from 'axios'

export const errResponse = (err: AxiosResponse) => err.data
export const successResponse = (data: any) => data.data
