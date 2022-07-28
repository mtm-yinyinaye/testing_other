import { useFormContext, get } from 'react-hook-form'
import { css } from '@emotion/react'
import { palette } from '@/styles'

type Props = {
  name: string
  className?: string
  // 項目をタッチしている場合にエラーメッセージを表示するかどうか
  // submitボタン押下でバリデーションエラーを発生させるパターンでは、falseにしておくといい
  visibleOnTouch?: boolean
  // 表示条件を独自で変更する場合のcallback
  visibleCondition?: (error: any, isTouched: boolean, errors: any) => boolean
}
const FormErrorMessage = (props: Props) => {
  const { visibleOnTouch = true } = props

  const { formState } = useFormContext()
  const { touchedFields, errors } = formState

  const isTouched = !!get(touchedFields, props.name, false)
  const error = get(errors, props.name, {})

  const isShow = visibleOnTouch
    ? isTouched
    : (props.visibleCondition &&
        props.visibleCondition(error, isTouched, errors)) ||
      true

  return isShow ? (
    <p css={contaienr} className={props.className}>
      {error.message}
    </p>
  ) : null
}

const contaienr = css({
  color: palette.primary,
  marginTop: '5px',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
})

export default FormErrorMessage
