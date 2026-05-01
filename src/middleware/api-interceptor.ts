import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { useAuthStore } from '@/stores/auth'

interface NormalizedApiError {
  message: string
  status?: number
}

function applyAuthToken(config: InternalAxiosRequestConfig) {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

function normalizeApiError(error: AxiosError): NormalizedApiError {
  const responseData = error.response?.data

  if (
    responseData &&
    typeof responseData === 'object' &&
    'message' in responseData &&
    typeof responseData.message === 'string'
  ) {
    return {
      message: responseData.message,
      status: error.response?.status,
    }
  }

  return {
    message: error.message || 'An unexpected request error occurred.',
    status: error.response?.status,
  }
}

function handleResponse(response: AxiosResponse) {
  return response
}

function handleError(error: AxiosError) {
  return Promise.reject(normalizeApiError(error))
}

export function attachApiInterceptors(client: AxiosInstance) {
  client.interceptors.request.use(applyAuthToken)
  client.interceptors.response.use(handleResponse, handleError)
}
