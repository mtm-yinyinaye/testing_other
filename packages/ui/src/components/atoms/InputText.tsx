import React from 'react'
import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = JSX.IntrinsicElements['input'] & {
  isError?: boolean
  touched?: boolean
}

const InputText = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { isError, touched, ...inputProps } = props

  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const base = css({
    width: '100%',
    height: '50px',
    lineHeight: 'normal',
    padding: '0 10px',
    border: '2px solid',
    borderColor: theme.input.border,
    boxSizing: 'border-box',
    borderRadius: theme.input.borderRadius,
    outline: 0,

    '::placeholder': { color: theme.input.placeholder },

    // type=numberのときのスピンボタンは消す
    '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },

    // FireFox/Safari対応
    appearance: 'none',

    // IE11 対応
    '::-ms-clear': {
      display: 'none',
    },

    '&:focus': {
      border: '2px solid',
      borderColor: theme.input.borderFocused,
    },

    [mq[sp]]: {
      fontSize: '1.6rem',
    },
  })

  const untouchedError = css(base, {
    background: theme.input.bgError,
  })

  const touchedError = css(base, {
    border: '1px solid',
    borderColor: theme.input.borderError,
    background: theme.input.bgError,
  })

  const styles =
    isError && touched ? touchedError : isError ? untouchedError : base

  return <input css={styles} type="text" {...inputProps} ref={ref} />
}

export default React.forwardRef(InputText)
