import React from 'react'
import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = {
  checked: boolean
  isError?: boolean
  touched?: boolean
  className?: string
  children?: React.ReactNode
}

const Check = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const base = css({
    position: 'relative',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    minWidth: '30px',
    backgroundColor: theme.chk.bg,
    border: '2px solid',
    borderColor: theme.chk.border,
    borderRadius: theme.chk.borderRadius,
    '&:focus-within': {
      borderColor: theme.chk.borderFocused,
    },
  })

  const mark = css({
    position: 'absolute',
    top: '22%',
    left: '18%',
    display: 'inline-block',
    width: '16px',
    height: '10px',
    borderLeft: '3px solid',
    borderLeftColor: theme.chk.mark,
    borderBottom: '3px solid',
    borderBottomColor: theme.chk.mark,
    transform: 'rotate(-45deg)',

    [mq[sp]]: {
      width: '14px',
      height: '9px',
      top: '20%',
    },
  })

  const untouchedErrorStyle = css(base, {
    background: theme.chk.bgError,
  })

  const touchedError = css(base, {
    border: '1px solid',
    borderColor: theme.chk.borderError,
    background: theme.chk.bgError,
  })

  const style =
    props.isError && props.touched
      ? touchedError
      : props.isError
      ? untouchedErrorStyle
      : base

  return (
    <label css={style} className={props.className}>
      {props.checked && <span css={mark}></span>}
      {props.children}
    </label>
  )
}

export default Check
