import React from 'react'
import { css, useTheme } from '@emotion/react'
import { color, mq, sp, theme as defaultTheme } from '@/styles'

type Props = JSX.IntrinsicElements['select'] & {
  items: { value: string | number; label: string }[]
  isError?: boolean
  touched?: boolean
}

const SelectBox = (
  props: Props,
  ref: React.ForwardedRef<HTMLSelectElement>,
) => {
  const { items, isError, touched, className, ...inputProps } = props

  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const container = css({
    position: 'relative',
    height: '50px',

    '&:after': {
      position: 'absolute',
      content: "''",
      width: 0,
      height: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      right: '10px',
      borderStyle: 'solid',
      borderWidth: '10px 6px 0 6px',
      borderTopColor: theme.select.arrow,
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
    },
  })

  const base = css({
    width: '100%',
    height: '100%',
    padding: '0 1rem',
    border: '2px solid ',
    borderColor: theme.select.border,
    borderRadius: theme.select.borderRadius,
    backgroundColor: color.white,
    cursor: 'pointer',
    appearance: 'none',
    textAlign: 'left',
    outline: 0,

    '&:focus': {
      border: '2px solid',
      borderColor: theme.select.borderFocused,
    },

    [mq[sp]]: {
      fontSize: '1.6rem',
    },
  })

  const untouchedErrorStyle = css(base, {
    background: theme.select.bgError,
  })

  const touchedError = css(base, {
    border: '1px solid',
    borderColor: theme.select.borderError,
    background: theme.select.bgError,
  })

  const style =
    isError && touched ? touchedError : isError ? untouchedErrorStyle : base

  return (
    <div css={container} className={className}>
      <select css={style} {...inputProps} name={props.name} ref={ref}>
        {items.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(SelectBox)
