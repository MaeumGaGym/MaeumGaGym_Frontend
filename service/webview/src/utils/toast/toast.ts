import { nanoid } from '@reduxjs/toolkit'
import { createToast, showToastAsync } from '../store/modules/toast'
import type { ToastmessageType } from '../store/modules/toast'
import store from '../store/store'

export const toast = (type: ToastmessageType, message: string, toastId?: string) => {
  const id = toastId || nanoid()
  switch (type) {
    case 'success':
      return (() => {
        store.dispatch(
          showToastAsync({
            id,
            message,
            type: 'success',
            duration: 2000,
          })
        )
        return id
      })()
    case 'error':
      return (() => {
        store.dispatch(
          showToastAsync({
            id,
            message,
            type: 'error',
            duration: 2000,
          })
        )
        return id
      })()
    case 'loading':
      return (() => {
        store.dispatch(
          createToast({
            id,
            message,
            type: 'loading',
            duration: Infinity,
          })
        )
        return id
      })()
  }
}

toast.success = (message: string, toastId?: string) => toast('success', message, toastId)
toast.error = (message: string, toastId?: string) => toast('error', message, toastId)
toast.loading = (message: string, toastId?: string) => toast('loading', message, toastId)
