import { ComponentProps } from 'react'
import { useFormContext, get } from 'react-hook-form'
import SelectBox from '@/components/atoms/SelectBox'

type Props = ComponentProps<typeof SelectBox> & {
  name: string
  defaltValue?: string | number
  ignoreError?: boolean
}

const FormSelectBox = (props: Props) => {
  const { register, formState } = useFormContext()
  const { touchedFields, errors } = formState
  const methods = register(props.name)
  const { ignoreError, ...inputProps } = props

  return (
    <SelectBox
      {...inputProps}
      isError={!ignoreError && get(errors, props.name)}
      touched={get(touchedFields, props.name)}
      {...methods}
      onChange={(e) => {
        methods.onChange(e)
        props.onChange && props.onChange(e)
      }}
      onBlur={(e) => {
        methods.onBlur(e)
        props.onBlur && props.onBlur(e)
      }}
      defaultValue={props.defaltValue || ''}
    />
  )
}

export default FormSelectBox
