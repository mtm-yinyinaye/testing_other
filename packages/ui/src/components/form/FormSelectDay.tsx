import { ComponentProps } from 'react'
import { css } from '@emotion/react'
import { useFormContext } from 'react-hook-form'
import { genBirthMonthOptions, genBirthDayOptions } from '@ad/utils'
import FormSelectBox from './FormSelectBox'

import { mq, sp } from '@/styles'

type Props = {
  name: string
  yearOptions: { value: number | string; label: string }[]
  className?: string
} & Omit<ComponentProps<typeof FormSelectBox>, 'items'>

const SelectDay = (props: Props) => {
  const { name, yearOptions, className, ...inputProps } = props

  const { watch } = useFormContext()
  const yearName = `${name}Year`
  const monthName = `${name}Month`
  const year = watch(yearName)
  const month = watch(monthName)

  const dayOptions = genBirthDayOptions({ year, month })
  return (
    <div css={selectDay} className={className}>
      <div css={yearSelectBoxWrapper}>
        <FormSelectBox
          css={yearSelectBox}
          {...inputProps}
          name={yearName}
          items={yearOptions}
        />
        <span>年</span>
      </div>
      <div css={monthAndDayContainer}>
        <FormSelectBox
          css={monthSelectBox}
          {...inputProps}
          name={monthName}
          items={genBirthMonthOptions()}
        />
        <span>月</span>
        <FormSelectBox
          css={daySelectBox}
          {...inputProps}
          name={`${name}Day`}
          items={dayOptions}
        />
        <span>日</span>
      </div>
    </div>
  )
}

const selectDay = css({
  display: 'flex',
  alignItems: 'center',

  [mq[sp]]: {
    flexDirection: 'column',
  },
})

const yearSelectBoxWrapper = css({
  display: 'flex',
  alignItems: 'center',

  [mq[sp]]: {
    width: '100%',
  },
})

const yearSelectBox = css({
  width: '200px',
  marginRight: '10px',

  [mq[sp]]: {
    width: '100%',
    height: '50px',
    marginRight: '5px',
  },
})

const monthAndDayContainer = css({
  display: 'flex',
  marginLeft: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',

  [mq[sp]]: {
    width: '100%',
    marginLeft: 0,
    marginTop: '10px',
  },
})

const monthSelectBox = {
  width: '100px',
  marginLeft: '13px',
  marginRight: '12px',

  [mq[sp]]: {
    width: '110px',
    height: '50px',
    marginRight: '5px',
    marginLeft: '0',
  },
}

const daySelectBox = {
  width: '100px',
  marginLeft: '20px',
  marginRight: '13px',

  [mq[sp]]: {
    width: '110px',
    height: '50px',
    marginLeft: '5px',
    marginRight: '0',
  },
}

export default SelectDay
