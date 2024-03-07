import { Timer as TimerIcon, Button, Play, Pause } from '@package/ui'
import { useRef, useEffect, useState } from 'react'

const Timer = () => {
  // 로컬에 남은 시간, 시작시간(숫자로), 실핼중 여부 저장
  // 불러올 때, 남은 시간을 시간, 분, 초로 나눠서 저장
  // 저장할 때, 남은 시간을 계산해서 저장, 현재 시간을 저장
  // 저장하는 경우, 인풋 값이 save 된 경우, 타이머 시작, 종료 시
  // remainingTime, startTime, isRunning 객체로 저장할 예정
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
      localStorage.getItem('timerTime') ?? '{ remainingTime: 0, startTime: 0, isRunning: false }'
    )
    return time
  }

  return (
    <div className="border border-gray100 rounded-2xl px-10 flex justify-between items-center flex-1">
      <div className="flex gap-6 items-center">
        <TimerIcon className="text-gray400" />
        {isInput ? (
          <div className="flex gap-3" ref={inputRef}>
            <input
              minLength={0}
              maxLength={2}
              type="text"
              className="border-none outline-none text-gray400 text-titleLarge w-[44px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={hour}
              ref={hourInputRef}
              onChange={onChangeInput}
              name="hour"
              onInput={e => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
              }}
              onKeyDown={e => e.key === 'Enter' && setIsInput(false)}
            />
            <p className="text-gray400 text-titleLarge">:</p>
            <input
              minLength={0}
              maxLength={2}
              type="text"
              className="border-none outline-none text-gray400 text-titleLarge w-[44px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={min}
              onChange={onChangeInput}
              name="min"
              onInput={e => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
              }}
              onKeyDown={e => e.key === 'Enter' && setIsInput(false)}
            />
            <p className="text-gray400 text-titleLarge">:</p>
            <input
              minLength={0}
              maxLength={2}
              type="text"
              className="border-none outline-none text-gray400 text-titleLarge w-[44px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={sec}
              onChange={onChangeInput}
              name="sec"
              onInput={e => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
              }}
              onKeyDown={e => e.key === 'Enter' && setIsInput(false)}
            />
          </div>
        ) : (
          <span className="text-gray400 text-titleLarge" onDoubleClick={() => setIsInput(true)}>
            {String(hour).padStart(2, '0')} : {String(min).padStart(2, '0')} : {String(sec).padStart(2, '0')}
          </span>
        )}
      </div>
      <Button
        kind="primary"
        className={isRunning ? 'h-fit px-2.5 py-2.5 bg-gray50 hover:bg-gray100' : 'h-fit px-2.5 py-2.5'}
        icon={isRunning ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-white" isFill />}
        onClick={ToggleTimer}
      />
    </div>
  )
}

export default Timer
