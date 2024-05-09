import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PickleUploadStateType {
  title: string
  content: string
  tag: string[]
  file: File | null
}

const initialState: PickleUploadStateType = {
  title: '',
  content: '',
  tag: [],
  file: null,
}

const pickleUploadReducer = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    updateTextPickleUpload: (state, action: PayloadAction<{ data: string; type: 'TITLE' | 'CONTENT' }>) => {
      if (action.type === 'TITLE') {
        state.title = action.payload.data
      } else if (action.type === 'CONTENT') {
        state.content = action.payload.data
      }
    },
    addTagPickleUpload: (state, action: PayloadAction<{ data: string }>) => {
      state.tag.push(action.payload.data)
    },
    deleteTagPickleUpload: (state, action: PayloadAction<{ data: string }>) => {
      const idx = state.tag.indexOf(action.payload.data)
      state.tag.splice(idx, 1)
    },
  },
})

export default pickleUploadReducer.reducer
export const { updateTextPickleUpload, addTagPickleUpload, deleteTagPickleUpload } = pickleUploadReducer.actions
