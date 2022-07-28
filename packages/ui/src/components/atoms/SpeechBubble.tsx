import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
  variant?: 'default' | 'outlined'
  className?: string
  // 矢印の横軸の位置
  arrowPosition?: 'default' | 'middle'
  // 矢印の方向
  arrowDirection?: 'top' | 'bottom'
}

const SpeechBubble = (props: Props) => {
  const {
    children,
    variant = 'default',
    arrowPosition = 'default',
    arrowDirection = 'bottom',
    className,
  } = props

  // ベースの設定
  let style = base

  // 吹き出しの矢印の向きを設定
  style = css(style, arrowDirections[arrowDirection])

  if (variant === 'outlined') {
    style = css(style, outlined)
    // 矢印を白抜きにする
    style = css(style, arrowDirectionsOutlined[arrowDirection])
  }

  // 吹き出し矢印の設定
  style = arrowPosition === 'middle' ? css(style, arrowMiddle) : style

  return (
    <span css={style} className={className}>
      {children}
    </span>
  )
}

const base = css({
  display: 'inline-block',
  position: 'relative',
  color: '#ffffff',
  background: '#F94258',
  padding: '6px 15px 5px 16px',
  fontSize: '13px',

  // 吹き出しのベース
  '&:before': {
    content: "''",
    position: 'absolute',
    left: '23%',
    transform: 'translateX(-50%)',
  },
})

const outlined = css(base, {
  // 吹き出しのベース
  '&:after': {
    content: "''",
    position: 'absolute',
    left: '23%',
    transform: 'translateX(-50%)',
  },

  background: '#ffffff',
  border: '3px solid #F94258',
  color: 'black',
})

const arrowDirections = {
  top: css({
    '&:before': {
      top: '-10px',
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
      borderBottom: '10px solid #F94258',
    },
  }),
  bottom: css({
    '&:before': {
      bottom: '-10px',
      borderTop: '10px solid #F94258',
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
    },
  }),
}

const arrowDirectionsOutlined = {
  top: css({
    '&:after': {
      top: '-6px',
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
      borderBottom: '10px solid #ffffff',
    },
  }),
  bottom: css({
    '&:after': {
      bottom: '-6px',
      borderTop: '10px solid #ffffff',
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
    },
  }),
}

const arrowMiddle = css({
  '&:before, &:after': {
    left: '50%',
  },
})

export default SpeechBubble
