import { Timer as TimerIcon, Button, Play, Pause } from '@package/ui'
import { useRef, useEffect, useMemo, useState } from 'react'

const Timer = () => {
  const [hour, setHour] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  const [sec, setSec] = useState<number>(0)
  const inputRef = useRef(null)
  const time = useRef<number>(0)
  const timerId = useRef(null)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isInput, setIsInput] = useState<boolean>(false)

  const hourInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const time = localStorage.getItem('timerTime')
    setHour(Math.floor(parseInt(time || '0') / (60 * 60)))
    setMin(Math.floor((parseInt(time || '0') / 60) % 60))
    setSec(parseInt(time || '0') % 60)

    timerId.current = setInterval(() => {
      setHour(Math.floor(parseInt(time.current || '0') / (60 * 60)))
      setMin(Math.floor((parseInt(time.current || '0') / 60) % 60))
      setSec(time.current % 60)
      time.current -= 1
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    if (time.current <= 0) {
      clearInterval(timerId.current)
    }
  }, [sec])

  const ToggleTimer = () => {
    setIsRunning(!isRunning)
  }

  useEffect(() => {
    if (isRunning) {
      time.current = hour * 60 * 60 + min * 60 + sec
      timerId.current = setInterval(() => {
        setHour(Math.floor(parseInt(time.current || '0') / (60 * 60)))
        setMin(Math.floor(parseInt(time.current || '0') / 60) % 60)
        setSec(time.current % 60)
        time.current -= 1
      }, 1000)
    } else {
      clearInterval(timerId.current)
    }
  }, [isRunning])

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsInput(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef])

  useEffect(() => {
    if (hour > 99) setHour(99)
    if (min > 99) setMin(99)
    if (sec > 59) setSec(59)
    if (isInput && hourInputRef.current) hourInputRef.current.focus()
  }, [isInput])

  useEffect(() => {
    console.log(hour, min, sec, isRunning)
    if (isRunning) localStorage.setItem('timerTime', (hour * 60 * 60 + min * 60 + sec).toString())
  }, [hour, min, sec])

  return (
    <div className="border border-gray100 rounded-2xl px-10 flex justify-between items-center flex-1">
      <div className="flex gap-6 items-center">
        <TimerIcon className="text-gray400" />
        {isInput ? (
          <div className="flex gap-3" ref={inputRef}>
            <input
              min="0"
              max="99"
              type="number"
              className="border-none outline-none text-gray400 text-titleLarge [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={hour}
              ref={hourInputRef}
              onChange={e => setHour(Number(e.target.value))}
              onKeyDown={e => e.key === 'Enter' && setIsInput(false)}
            />
            <p className="text-gray400 text-titleLarge">:</p>
            <input
              min="0"
              max="99"
              type="number"
              className="border-none outline-none text-gray400 text-titleLarge [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={min}
              onChange={e => setMin(Number(e.target.value))}
              onKeyDown={e => e.key === 'Enter' && setIsInput(false)}
            />
            <p className="text-gray400 text-titleLarge">:</p>
            <input
              min="0"
              max="59"
              type="number"
              className="border-none outline-none text-gray400 text-titleLarge [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={sec}
              onChange={e => setSec(Number(e.target.value))}
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
