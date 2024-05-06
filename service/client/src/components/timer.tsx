'use client'
import { Timer as TimerIcon, Button, Play, Pause } from '@package/ui'
import { useRef, useEffect, useState, FormEvent, KeyboardEvent, InputHTMLAttributes } from 'react'

export const Timer = () => {
  const [hour, setHour] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  const [sec, setSec] = useState<number>(0)
  const inputRef = useRef(null)
  const time = useRef<number | null>(0)
  // TODO: 타입 수정 (any -> 수정 필요)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const timerId = useRef<any>(null)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isInput, setIsInput] = useState<boolean>(false)

  const hourInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const time = getLocalStorage()
    setIsRunning(time.isRunning)
    if (time.isRunning) {
      const now = new Date()
      const remain = Number(time.remainingTime ?? 0) - Math.floor((now.getTime() - time.startTime) / 1000)
      if (remain < 0) {
        setIsRunning(false)
      }
      setTime(remain)
    } else {
      setTime(Number(time.remainingTime ?? 0))
    }
  }, [])

  useEffect(() => {
    if (time.current && time.current <= 0) {
      clearInterval(timerId.current)
    }
  }, [sec])

  const ToggleTimer = () => {
    onSave()
    setIsRunning(!isRunning)
  }

  useEffect(() => {
    if (isRunning) {
      time.current = hour * 60 * 60 + min * 60 + sec
      timerId.current = setInterval(() => {
        setTime(time.current)
        if (time.current) time.current -= 1
      }, 1000)
    } else {
      clearInterval(timerId.current)
    }
  }, [isRunning])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !(inputRef.current as HTMLElement).contains(event.target as Node)) {
        setIsInput(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef])

  useEffect(() => {
    if (isInput) setIsRunning(false)
    if (isInput && hourInputRef.current) hourInputRef.current.focus()
    if (hour || min || sec) onSave()
  }, [isInput])

  const setTime = (setleftTime: number | null) => {
    if (setleftTime === null || setleftTime < 0) {
      setleftTime = 0
    }
    setHour(Math.floor((setleftTime || 0) / (60 * 60)))
    setMin(Math.floor((setleftTime || 0) / 60) % 60)
    setSec((setleftTime || 0) % 60)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'hour') {
      if (Number(value) > 99) setHour(99)
      else setHour(Number(value))
    } else if (name === 'min') {
      if (Number(value) > 59) setMin(59)
      else setMin(Number(value))
    } else {
      if (Number(value) > 59) setSec(59)
      else setSec(Number(value))
    }
  }

  const onSave = () => {
    const now = new Date()
    localStorage.setItem(
      'timerTime',
      JSON.stringify({
        remainingTime: (hour * 60 * 60 + min * 60 + sec).toString(),
        startTime: now.getTime(),
        isRunning: !isRunning,
      })
    )
  }
  const getLocalStorage = () => {
    const time: { remainingTime: number; startTime: number; isRunning: boolean } = JSON.parse(
      localStorage.getItem('timerTime') ?? `{ "remainingTime": 0, "startTime": 0, "isRunning": false }`
    )
    return time
  }
  const changeTimeStyle: InputHTMLAttributes<HTMLInputElement> = {
    type: 'text',
    className:
      'border-none outline-none w-[44px] sm:w-[25x] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
    minLength: 0,
    maxLength: 2,
    onInput: (e: FormEvent<HTMLInputElement>) => {
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    },
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && setIsInput(false),
  }

  return (
    <div className="border border-gray100 rounded-2xl px-10 flex justify-between items-center flex-1">
      <div className="flex gap-6 items-center">
        <TimerIcon className="text-gray400" />
        {isInput ? (
          <div className="flex gap-3 text-gray400 text-titleLarge sm:text-titleMedium transition-all" ref={inputRef}>
            <input value={hour} ref={hourInputRef} onChange={onChangeInput} name="hour" {...changeTimeStyle} />
            <p>:</p>
            <input value={min} onChange={onChangeInput} name="min" {...changeTimeStyle} />
            <p>:</p>
            <input value={sec} onChange={onChangeInput} name="sec" {...changeTimeStyle} />
          </div>
        ) : (
          <span
            className={`${isRunning ? 'text-blue500' : 'text-gray400'} text-titleLarge sm:text-titleMedium transition-all`}
            onDoubleClick={() => setIsInput(true)}
          >
            {String(hour).padStart(2, '0')} : {String(min).padStart(2, '0')} : {String(sec).padStart(2, '0')}
          </span>
        )}
      </div>
      <Button
        kind="primary"
        className={isRunning ? 'h-fit px-[10px] py-2.5 bg-gray50 hover:bg-gray100' : 'h-fit px-[10px] py-2.5'}
        icon={isRunning ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-white" isFill />}
        onClick={ToggleTimer}
      />
    </div>
  )
}
