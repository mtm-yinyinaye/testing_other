import React from 'react'
import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = JSX.IntrinsicElements['button'] & {
  name?: string
  variant?: 'contained' | 'outlined'
  prev?: boolean
  next?: boolean
  children: React.ReactNode
}

const Button = (props: Props) => {
  const {
    prev,
    next,
    children,
    type = 'button',
    variant = 'contained',
    ...buttonProps
  } = props

  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const base = css({
    minWidth: '250px',
    height: '70px',
    padding: '0 60px',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    backgroundColor: theme.btn.bg,
    cursor: 'pointer',
    color: theme.btn.color,
    border: '0',
    position: 'relative',
    outline: 'none',

    '&:hover': {
      opacity: 0.8,
    },

    '&:disabled': {
      opacity: 0.8,
      cursor: 'not-allowed',
    },

    [mq[sp]]: {
      width: '100%',
      fontSize: '1.5rem',
      height: '50px',
      padding: '0 30px',
    },
  })

  const outline = css(base, {
    backgroundColor: theme.btnOutline.bg,
    minWidth: '250px',
    padding: '0 60px',
    color: theme.btnOutline.color,
    border: '1px solid',
    borderColor: theme.btnOutline.border,
  })

  const baseArrow = css({
    position: 'absolute',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '10px',
    width: '10px',
    borderTop: '3px solid',
    borderRight: '3px solid',
    top: '50%',
  })

  const prevArrow = css(baseArrow, {
    borderColor: theme.btn.arrow,
    left: '17px',
    transform: 'translateY(-50%) rotate(225deg)',
  })

  const nextArrow = css(baseArrow, {
    borderColor: theme.btn.arrow,
    right: '17px',
    transform: 'translateY(-50%) rotate(45deg)',
  })

  return (
    <button
      css={variant === 'contained' ? base : outline}
      className={props.className}
      type={type}
      {...buttonProps}
    >
      {prev && <span css={prevArrow}></span>}
      {children}
      {next && <span css={nextArrow}></span>}
    </button>
  )
}

export default Button
