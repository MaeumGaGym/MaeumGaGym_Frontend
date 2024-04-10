import { useState } from 'react'

interface ParamsType<T> {
  dataList?: Array<T>
  onClickHandler?: () => void
}

export function useInput<T>({ dataList, onClickHandler }: ParamsType<T>) {
  const [state, setState] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onClickHandler && onClickHandler()
    setState(e.target.value)
  }
  return { state, setState, onChange }
}
