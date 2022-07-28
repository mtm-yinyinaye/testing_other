import { css } from '@emotion/react'
import { mq, sp } from '@/styles'
import Button from '@/components/atoms/Button'

type Props = {
  type?: 'button' | 'submit'
  className?: string
  hasNext?: boolean
  onNext?: () => void
  onPrev?: () => void
  isDisabledNextButton?: boolean
  buttonMessage?: string
}

const PrevNextButtons = (props: Props) => {
  const {
    hasNext = true,
    type = 'button',
    isDisabledNextButton = false,
  } = props

  return (
    <section css={btnwrap} className={props.className}>
      <Button css={prev} variant="outlined" onClick={props.onPrev}>
        戻る
      </Button>
      {hasNext && (
        <Button
          css={next}
          type={type}
          disabled={isDisabledNextButton}
          onClick={props.onNext}
        >
          {props.buttonMessage}
        </Button>
      )}
    </section>
  )
}

const btnwrap = css({
  padding: '10px 0px 20px',
  textAlign: 'center',

  [mq[sp]]: {
    margin: '0 15px',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
})

const prev = css({
  marginRight: '50px',

  [mq[sp]]: {
    marginBottom: '15px',
  },
})

const next = css({
  [mq[sp]]: {
    marginBottom: '15px',
  },
})

export default PrevNextButtons
