import React from 'react'
import { css } from '@emotion/react'
import { mq, sp } from '@/styles'
import Step from '@/components/atoms/Step'

type Props = {
  steps: { index: number; path: string; text: string }[]
  currentUrl: string
  className?: string
}

const Stepper = (props: Props) => {
  const { currentUrl, className, steps } = props
  const currentIndex = steps.findIndex((step) => currentUrl === step.path)
  return (
    <div css={stepper} className={className}>
      <div css={wrapper}>
        {steps.map((step, index) => (
          <React.Fragment key={step.index}>
            <Step
              css={stepStyle}
              no={step.index}
              isDone={index < currentIndex}
              isCurrent={currentIndex === index}
            >
              {step.text}
            </Step>
            {/** 最後のアイテムに矢印はつけない*/}
            {index !== steps.length - 1 && <div css={arrow}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const stepper = css({
  position: 'relative',
  margin: '70px 0 30px',

  [mq[sp]]: {
    margin: '25px 0',
  },
})

const stepStyle = css({
  [mq[sp]]: {
    // お申込み内容確認調整
    '&:nth-of-type(5)': {
      width: '60px',
    },
  },
})

const wrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  position: 'relative',
  width: '100%',
  lineHeight: 1.6,
})

const arrow = css({
  width: '18px',
  height: '18px',
  borderTop: '2px solid',
  borderRight: '2px solid',
  borderColor: '#878787',
  transform: 'translateY(-50%) rotate(45deg)',

  [mq[sp]]: {
    width: '7px',
    height: '7px',
  },
})

export default Stepper
