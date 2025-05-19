import { useEffect, useRef } from 'react'

const useOutSideClick = (callback: () => void) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [callback])

  return ref
}

export default useOutSideClick
