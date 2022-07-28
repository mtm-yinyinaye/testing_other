import { FC } from 'react'
import { css } from '@emotion/react'

type Props = {
  onClick: () => void
  isActive: boolean
  className?: string
}

const Hamberger: FC<Props> = (props) => {
  const lineStyle = props.isActive ? lineActive : line
  return (
    <div onClick={props.onClick} className={props.className}>
      <div css={menuTrigger}>
        <span css={lineStyle}></span>
        <span css={lineStyle}></span>
        <span css={lineStyle}></span>
      </div>
    </div>
  )
}

const menuTrigger = css({
  display: 'inline-block',
  width: '6.5vw',
  height: '5vw',
  position: 'relative',
})

const line = css({
  display: 'inline-block',
  position: 'absolute',
  left: '0',
  width: '100%',
  height: '2px',
  backgroundColor: '#666',

  transition: 'all .4s',

  '&:nth-of-type(1)': {
    top: '0',
  },

  '&:nth-of-type(2)': {
    top: '2.2vw',
  },

  '&:nth-of-type(3)': {
    bottom: '0',
  },
})

const lineActive = css(line, {
  '&:nth-of-type(1)': {
    transform: 'translateY(2vw) rotate(45deg)',
  },

  '&:nth-of-type(2)': {
    opacity: 0,
  },

  '&:nth-of-type(3)': {
    transform: 'translateY(-2.4vw) rotate(-45deg)',
  },
})

export default Hamberger
