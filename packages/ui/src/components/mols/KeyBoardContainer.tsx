import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'
import { useClickOutSide } from '@/components/hooks'
import Icon from '@/components/atoms/Icon'

type Props = {
  children: React.ReactNode
  setIsShow: (isShow: boolean) => void
  isShow?: boolean
  className?: string
}

const KeyBoardContainer = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const close = () => {
    props.setIsShow(false)
  }

  const keyboardRef = useClickOutSide(close)

  const keyBoardIcon = css({
    display: 'inline-block',
    width: '28px',
    height: '19px',
    marginLeft: '1rem',
    verticalAlign: 'middle',
    path: {
      stroke: theme.palette.primary,
    },
    'path[fill]': {
      fill: theme.palette.primary,
    },
    'path[fill=none]': {
      fill: 'none',
    },
  })

  const closeIcon = css({
    position: 'absolute',
    width: '30px',
    top: '20px',
    left: '315px',
    zIndex: 11,
    path: {
      stroke: theme.palette.primary,
      fill: theme.palette.primary,
    },
  })

  return (
    <div css={{ position: 'relative' }} className={props.className}>
      <span css={keyboardText} onClick={() => props.setIsShow(true)}>
        ソフトウェアキーボードで入力
        <Icon name="keyboard" css={keyBoardIcon} />
      </span>
      {props.isShow && (
        <div ref={keyboardRef} css={keyboard}>
          <Icon name="close" css={closeIcon} onClick={close} />
          {props.children}
        </div>
      )}
    </div>
  )
}

const keyboardText = css({
  fontSize: '14px',
  color: '#333',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },

  [mq[sp]]: {
    display: 'none',
  },
})

const keyboard = css({
  position: 'absolute',
  zIndex: 10,
})

export default KeyBoardContainer
