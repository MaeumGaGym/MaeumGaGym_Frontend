import { useEffect, useState } from 'react'

interface ParamsType<T> {
  dataList?: Array<T>
  onChangeHandler?: () => void
  initalValue?: string
}

export function useInput<T>({ dataList, onChangeHandler, initalValue }: ParamsType<T>) {
  const [state, setState] = useState<string | undefined>(initalValue)

  useEffect(() => {
    setState(initalValue)
  }, [initalValue])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler && onChangeHandler()
    setState(e.target.value)
  }
  return { state, setState, onChange }
}
