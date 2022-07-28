/**
 * iOSかどうかを判断する
 */
export const iOS = () => {
  // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios?lq=1
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  )
}

/**
 * ブラウザを判断する
 */
export const detectBrowser = () => {
  // SSR考慮
  if (typeof window === 'undefined') return 'UnKnown'

  const UA = navigator.userAgent.toLowerCase()

  if (UA.includes('msie') || UA.includes('trident')) {
    return 'IE'
  }

  if (UA.includes('edge') || UA.includes('trident')) {
    return 'Edge'
  }

  if (UA.includes('chrome')) {
    return 'Chrome'
  }

  if (UA.includes('safari')) {
    return 'Safari'
  }

  if (UA.includes('firefox')) {
    return 'FireFox'
  }

  return 'UnKnown'
}
