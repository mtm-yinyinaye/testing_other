import { css } from '@emotion/react'
import SpeechBubble from '@/components/atoms/SpeechBubble'
import { mq, sp } from '@/styles'
import Check from '@/components/atoms/Check'

type Props = {
  children: React.ReactNode
  // 遷移するリンク先
  to?: string
  // リンクを押下したかどうか
  checked: boolean
  // リンクを押下した場合のイベントハンドラ
  handleClick?: () => void
  className?: string
}

const ImportantLink = (props: Props) => {
  return (
    <a
      href={props.to}
      css={link}
      className={props.className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.handleClick}
    >
      <div css={{ position: 'relative' }}>
        <Check checked={props.checked} css={check} />
        {!props.checked && (
          <SpeechBubble css={speechBubble}>チェック</SpeechBubble>
        )}
      </div>
      <p css={body}>{props.children}</p>
    </a>
  )
}

const link = css({
  display: 'inline-flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  height: '60px',
  border: '2px solid #E2E2E2',
  background: '#fdeae9',
  position: 'relative',
  cursor: 'pointer',
})

const speechBubble = css({
  position: 'absolute',
  width: '85px',
  top: '-30px',
  left: 0,
  zIndex: 1,

  [mq[sp]]: {
    padding: '4px 10px',
    width: '70px',
    top: '-25px',
    textAlign: 'center',
    fontSize: '1.2rem',

    '&::before': {
      bottom: '-8px',
      borderTop: '8px solid #F94258',
      borderRight: '8px solid transparent',
      borderLeft: '8px solid transparent',
    },
  },
})

const check = {
  background: '#ffffff',
  marginLeft: '5px',
}

const body = css({
  lineHeight: 1.7,
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#000000',
  paddingLeft: '25px',
  marginTop: '-2px',

  [mq[sp]]: {
    fontSize: '1.4rem',
    paddingLeft: '15px',
  },
})

export default ImportantLink
