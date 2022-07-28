import { useEffect, useState } from 'react'

const useClickOutSide = (onClickOutSide: () => void) => {
  const [domNode, setDomNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement
      if (domNode && !domNode.contains(target)) {
        onClickOutSide()
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [domNode, onClickOutSide])

  return setDomNode
}

export default useClickOutSide
