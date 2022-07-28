import { useState, useEffect, useCallback, RefObject } from 'react'
import debounce from 'lodash/debounce'

/**
 * 画面のスクロール位置からページトップへの表示条件に該当するかを判断する
 */
const usePageTop = (targetRef: RefObject<HTMLDivElement>) => {
  const [showPageTop, setShowPageTop] = useState(false)

  const handleClickPageTop = useCallback(() => {
    targetRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [targetRef])

  useEffect(() => {
    const handleScroll = debounce(() => {
      const offsetY = window.pageYOffset
      // routerでページ切り替えのタイミングでscroll位置を変更している
      // その際、このhookを使っているコンポーネントがアンマウントされたあとに、ステートの更新をしないように
      // targetRefを存在をチェックする
      if (targetRef.current) {
        setShowPageTop(offsetY > 50)
      }
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetRef])

  return { showPageTop, handleClickPageTop }
}

export default usePageTop
