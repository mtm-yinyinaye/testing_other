import React from 'react'
import { css } from '@emotion/react'
import Check from './Check'

type Props = JSX.IntrinsicElements['input'] & {
  checked: boolean
  isError?: boolean
  touched?: boolean
  children?: React.ReactNode
}

const CheckBox = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { className, children, checked, isError, touched, ...inputProps } =
    props

  return (
    <div css={container}>
      <Check
        className={className}
        checked={checked}
        isError={isError}
        touched={touched}
      >
        <input
          /**
           *@see RadioButton.tsx
           */
          css={{ width: 0, opacity: 0 }}
          {...inputProps}
          type="checkbox"
          ref={ref}
        />
      </Check>
      {children}
    </div>
  )
}

const container = css({
  display: 'flex',
  alignItems: 'center',
})

export default React.forwardRef(CheckBox)
