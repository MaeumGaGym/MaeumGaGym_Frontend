import store, { RootState } from './../store';
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ToastmessageType = 'success' | 'error' | 'loading';

interface createToastType {
  id: string;
  message: string;
  type: ToastmessageType;
  duration: number;
}

interface ToastStateType extends createToastType {
  isVisible: boolean;
}

const initialState: ToastStateType[] = [];

export const showToastAsync = createAsyncThunk<void, createToastType>(
  "toast/showToastAsync",
  async (payload, { dispatch, getState }) => {
    const { id, duration } = payload;
    const { toast: toastData } = getState() as { toast: ToastStateType[] };
    const key = toastData.map((value) => value.id);
    
    if(key.includes(id)) {
      dispatch(patchToast({...payload, isVisible: true }));
    } else {
      dispatch(createToast(payload));
    }
    
    await new Promise((resolve) => setTimeout(resolve, duration));
    dispatch(patchToast({...payload, isVisible: false }));
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(deleteToast({ id }));
  })

const toastReducer = createSlice({
  name: "toast",
  initialState,
  reducers: {
    createToast: (state, action: PayloadAction<createToastType>) => {
      state.push({
        id: action.payload.id,
        message: action.payload.message,
        type: action.payload.type,
        duration: action.payload.duration,
        isVisible: true
      });
    },
    deleteToast: (state, action: PayloadAction<{ id: string }>) => {
      const key = state.map((value) => value.id)
      const toastIndex = key.indexOf(action.payload.id);
      return state.filter((_, index) => index != toastIndex)
    },
    patchToast: (state, action: PayloadAction<ToastStateType>) => {
      return state.map((value) => value.id === action.payload.id ? action.payload : value)
    }
  }
})

export default toastReducer.reducer;
export const { createToast, deleteToast, patchToast } = toastReducer.actions;