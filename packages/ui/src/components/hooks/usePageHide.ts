import { useEffect, useCallback } from 'react'

/**
 * PageHideイベントが発生したときのhook
 */
const usePageHide = (callback: () => void) => {
  const handler = useCallback(() => {
    callback()
  }, [callback])

  useEffect(() => {
    window.addEventListener('pagehide', handler)
    return () => window.removeEventListener('pagehide', handler)
  })
}

export default usePageHide
