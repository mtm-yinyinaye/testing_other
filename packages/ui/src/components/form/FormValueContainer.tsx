import { css } from '@emotion/react'
import { mq, sp } from '@/styles'

type Props = {
  children: React.ReactNode
  message?: string
  className?: string
}

const FormValueContainer = (props: Props) => {
  return (
    <dd css={valueContainer} className={props.className}>
      <p css={message}>{props.message}</p>
      {props.children}
    </dd>
  )
}

const valueContainer = css({
  width: '725px',
  paddingTop: '26px',
  paddingRight: '30.5px',
  paddingBottom: '26px',
  paddingLeft: '30px',
  background: '#ffffff',
  label: 'valueWrapper',
  lineHeight: 2,

  [mq[sp]]: {
    width: '100%',
    padding: '0px 15px 10px;',
  },
})

const message = css({
  fontWeight: 'bold',

  [mq[sp]]: {
    whiteSpace: 'pre-wrap',
    marginTop: '12px',
  },
})

export default FormValueContainer
