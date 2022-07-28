import { ComponentProps } from 'react'
import { useFormContext, get } from 'react-hook-form'
import RadioButton from '@/components/atoms/RadioButton'

type BaseProp = Omit<ComponentProps<typeof RadioButton>, 'checked'>

type Props = BaseProp & {
  name: string
  ignoreError?: boolean
  defaltValue?: string | number
}

const FormRadioButton = (props: Props) => {
  const { register, formState, watch } = useFormContext()
  const { errors } = formState
  const methods = register(props.name)
  const { ignoreError, ...inputProps } = props

  const defaultValue = props.value || true

  return (
    <RadioButton
      {...inputProps}
      // eventを通すと、numberもstringになるので、緩い判定にする
      checked={defaultValue == watch(props.name)}
      isError={!ignoreError && get(errors, props.name)}
      {...methods}
      onChange={(e) => {
        methods.onChange(e)
        props.onChange && props.onChange(e)
      }}
      onBlur={(e) => {
        methods.onBlur(e)
        props.onBlur && props.onBlur(e)
      }}
    />
  )
}

export default FormRadioButton
