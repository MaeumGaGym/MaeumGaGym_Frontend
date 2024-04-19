import { useState } from 'react'

interface ParamsType<T> {
  dataList?: Array<T>
  onChangeHandler?: () => void
}

export function useInput<T>({ dataList, onChangeHandler }: ParamsType<T>) {
  const [state, setState] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler && onChangeHandler()
    setState(e.target.value)
  }
  return { state, setState, onChange }
}
