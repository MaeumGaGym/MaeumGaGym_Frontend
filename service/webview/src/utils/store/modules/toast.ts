import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ToastmessageType = 'success' | 'error' | 'loading'

interface ToastStateType {
  id: string
  message: string
  type: ToastmessageType
  duration: number
}

const initialState: ToastStateType[] = []

export const showToastAsync = createAsyncThunk<void, ToastStateType>(
  'toast/showToastAsync',
  async (payload, { dispatch, getState }) => {
    const { id } = payload
    const { toast: toastData } = getState() as { toast: ToastStateType[] }
    const key = toastData.map(value => value.id)

    if (key.includes(id)) {
      dispatch(patchToast(payload))
    } else {
      dispatch(createToast(payload))
    }
  }
)

const toastReducer = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    createToast: (state, action: PayloadAction<ToastStateType>) => {
      state.push({
        id: action.payload.id,
        message: action.payload.message,
        type: action.payload.type,
        duration: action.payload.duration,
      })
    },
    deleteToast: (state, action: PayloadAction<{ id: string }>) => {
      const key = state.map(value => value.id)
      const toastIndex = key.indexOf(action.payload.id)
      return state.filter((_, index) => index != toastIndex)
    },
    patchToast: (state, action: PayloadAction<ToastStateType>) => {
      return state.map(value => (value.id === action.payload.id ? action.payload : value))
    },
  },
})

export default toastReducer.reducer
export const { createToast, deleteToast, patchToast } = toastReducer.actions
