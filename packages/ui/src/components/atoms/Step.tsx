import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = {
  no: number
  isDone: boolean
  isCurrent: boolean
  children: React.ReactNode
  className?: string
}

const Step = (props: Props) => {
  const { no, isCurrent, isDone, children, className } = props

  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const step = css({
    width: '105px',
    textAlign: 'center',

    [mq[sp]]: {
      width: '55px',
    },
  })

  const circle = css({
    margin: '0 auto',
    width: '80px',
    height: '80px',
    border: '1px solid #707070',
    background: '#FFFFFF',
    borderRadius: '50%',

    [mq[sp]]: {
      width: '38px',
      height: '38px',
    },
  })

  const circleActive = css(circle, {
    border: '1px solid',
    borderColor: theme.palette.primary,
    background: theme.palette.primary,
  })

  const circleDone = css(circle, {
    border: 0,
    background: '#D8D8D8',
  })

  const content = css({
    lineHeight: '80px',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#878787',

    [mq[sp]]: {
      lineHeight: '38px',
      fontSize: '1.1rem',
    },
  })

  const contentActive = css(content, {
    color: '#ffffff',
  })

  const contentDone = css(content, {
    color: '#ffffff',
  })

  const text = css({
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#878787',
    whiteSpace: 'pre-wrap',

    [mq[sp]]: {
      fontSize: '0.9rem',
    },
  })

  const textActive = css(text, {
    color: theme.palette.primary,
  })

  const circleStyle = isDone ? circleDone : isCurrent ? circleActive : circle
  const contentStyle = isDone
    ? contentDone
    : isCurrent
    ? contentActive
    : content

  return (
    // パッケージ利用側から、スタイル調整を可能するためのエスケープハッチ
    <div css={step} className={`${className} step`}>
      <div css={circleStyle}>
        <span css={contentStyle}>{no}</span>
      </div>
      <div css={[isCurrent ? textActive : text, { marginTop: '10px' }]}>
        {children}
      </div>
    </div>
  )
}

export default Step
