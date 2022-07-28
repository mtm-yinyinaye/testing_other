import { css } from '@emotion/react'
import { useFormContext } from 'react-hook-form'
import SpeechBubble from '@/components/atoms/SpeechBubble'
import { mq, sp } from '@/styles'
import Check from '@/components/atoms/Check'

type Props = {
  name: string
  children: React.ReactNode
  handleClick?: (e: React.FormEvent<HTMLElement>) => void
  className?: string
}

const FormImportantCheckBox = (props: Props) => {
  const { register, watch } = useFormContext()
  const methods = register(props.name)
  const checked = watch(props.name)

  return (
    <label css={link} className={props.className}>
      <div css={{ position: 'relative' }} onClick={props.handleClick}>
        <Check checked={checked} css={check}>
          <input css={{ width: 0, opacity: 0 }} type="checkbox" {...methods} />
        </Check>
        {!checked && <SpeechBubble css={speechBubble}>チェック</SpeechBubble>}
      </div>
      <p css={body}>{props.children}</p>
    </label>
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
    fontSize: '1.2rem',
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

export default FormImportantCheckBox
