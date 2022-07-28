import React, { useRef, useImperativeHandle } from 'react'
import { css, useTheme } from '@emotion/react'
import { iOS } from '@ad/utils'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = JSX.IntrinsicElements['input'] & {
  isError?: boolean
  children?: React.ReactNode
}

const RadioButton = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const { className, children, checked, isError, ...inputProps } = props

  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const base = css({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '256px',
    padding: '20px',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: '1px solid',
    backgroundColor: theme.radio.bg,
    borderColor: theme.radio.border,
    borderRadius: theme.radio.borderRadius,
    boxShadow: `0px 3px 0px ${theme.radio.shadow}`,

    '&:focus-within': {
      border: '2px solid',
      borderColor: theme.radio.borderFocused,
    },

    '&::before': {
      position: 'absolute',
      left: '5%',
      content: '""',
      display: 'inline-block',
      width: '19px',
      height: '19px',
      borderRadius: '50%',
      border: '2px solid',
      borderColor: theme.radio.border,
      marginRight: '15px',

      [mq[sp]]: {
        marginRight: '5px',
      },
    },

    '&:hover': {
      border: '2px solid',
      borderColor: theme.radio.borderFocused,
      background: theme.radio.bgHover,
    },

    [mq[sp]]: {
      width: '100%',
      padding: '10px',
      fontSize: '1.4rem',
    },
  })

  const checkedStyle = css(base, {
    border: '3px solid',
    borderColor: theme.radio.borderFocused,
    background: theme.radio.bgHover,

    '&::before': {
      background: theme.radio.borderFocused,
      borderWidth: '4px',
    },
  })

  const untouchedError = css(base, {
    background: theme.radio.bgError,
  })

  const styles = isError ? untouchedError : checked ? checkedStyle : base

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => {
    const node = inputRef.current as HTMLInputElement
    /**
     * iOS/Safariでラジオボタンにfocusを当てても要素にスクロールしない問題の対応
     * https://stackoverflow.com/questions/56137175/ios-safari-chrome-wont-scroll-up-to-show-validation-error-message-on-radio-inpu/67215758#67215758
     */
    if (iOS()) {
      // iOSの場合、フォーカスイベントに、スクロールを追加する
      node.addEventListener('focus', (e) => {
        const target = e.target as HTMLElement
        target.scrollIntoView({
          block: 'center',
        })
      })
    }
    return node
  })

  return (
    <label css={styles} className={className}>
      <input
        // blurが効かなくなるのでdisplay:noneはしてない
        // height:0 or appearance:none の場合、Safariでfocus時にスクロールしないので、opacityで消す
        css={{
          width: 0,
          //height: 0,
          //appearance: 'none',
          opacity: 0,
        }}
        type="radio"
        {...inputProps}
        ref={inputRef}
      />
      {children}
    </label>
  )
}

export default React.forwardRef(RadioButton)
