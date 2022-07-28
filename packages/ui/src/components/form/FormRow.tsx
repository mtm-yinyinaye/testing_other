import { css } from '@emotion/react'
import { mq, sp } from '@/styles'

type Props = {
  children: React.ReactNode
  className?: string
}

const FormRow = (props: Props) => {
  return (
    <dl css={row} className={props.className}>
      {props.children}
    </dl>
  )
}

const row = css({
  display: 'flex',
  border: '1px solid #BCBBBB',

  [mq[sp]]: {
    flexDirection: 'column',
  },
})
export default FormRow
