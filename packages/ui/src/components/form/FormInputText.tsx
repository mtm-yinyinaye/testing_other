import { ComponentProps } from 'react'
import { useFormContext, get } from 'react-hook-form'
import InputText from '@/components/atoms/InputText'

type Props = ComponentProps<typeof InputText> & {
  name: string
  inputRef?: any
}

const FormInputText = (props: Props) => {
  const { register, formState } = useFormContext()
  const { touchedFields, errors } = formState
  const methods = register(props.name)
  const { inputRef, ...inputProps } = props

  return (
    <InputText
      {...inputProps}
      isError={get(errors, props.name)}
      touched={get(touchedFields, props.name)}
      name={methods.name}
      ref={(el) => {
        methods.ref(el)
        if (inputRef) {
          inputRef.current = el
        }
      }}
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

export default FormInputText
