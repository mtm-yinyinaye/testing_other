import { useEffect, useRef, MutableRefObject } from 'react'

const usePrevious = <T>(
  value: T,
  initialValue?: T,
): MutableRefObject<T | undefined>['current'] => {
  const ref = useRef<T | undefined>(initialValue)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export default usePrevious
