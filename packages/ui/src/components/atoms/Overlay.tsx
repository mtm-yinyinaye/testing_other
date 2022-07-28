import { css } from '@emotion/react'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Overlay = (props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      css={overlay}
      className={props.className}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
    </div>
  )
}

const overlay = css({
  label: 'modal-background',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#a0a0a0',
  position: 'relative',
  overflow: 'scroll',
})

export default React.forwardRef(Overlay)
