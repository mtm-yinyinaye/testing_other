import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  FormInputText,
  FormSelectBox,
  FormCheckBox,
  FormRadioButton,
  Button,
  Icon,
} from '@ad/ui'

type FormValues = {
  name: string
  age: string
  tel: string
  address: string
  optin: boolean
  choice: '' | '1' | '2'
}

const schema = yup.object().shape({
  name: yup.string().required(),
  tel: yup.string().required(),
  address: yup.string().required(),
  age: yup.string().required(),
  optin: yup.bool().oneOf([true], 'Field must be checked'),
  choice: yup.string().oneOf(['1', '2'], 'Field must be checked'),
})

const options = [
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
]

const SampleForm = () => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      tel: '',
      address: '',
      age: '',
      optin: false,
      choice: '',
    },
    resolver: yupResolver(schema),
  })

  const { handleSubmit, trigger } = methods

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  useEffect(() => {
    trigger()
  }, [])

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          css={{ width: '80%', margin: '0 auto' }}
        >
          <div>
            this is sample page
            <Icon name="keyboard" css={{ width: 10 }} />
          </div>
          <div css={{ marginTop: 10 }}>
            <FormInputText name="name" />
          </div>
          <div css={{ marginTop: 10 }}>
            <FormInputText name="tel" />
          </div>
          <div css={{ marginTop: 10 }}>
            <FormInputText name="address" />
          </div>
          <div css={{ marginTop: 10 }}>
            <FormSelectBox name="age" items={options} />
          </div>
          <div css={{ marginTop: 10 }}>
            <FormCheckBox name="optin">チェックボックス</FormCheckBox>
          </div>
          <div css={{ marginTop: 10 }}>
            <FormRadioButton name="choice" value="1" ignoreError>
              <div css={{ textAlign: 'center', width: '100%' }}>1</div>
            </FormRadioButton>
            <FormRadioButton name="choice" value="2" ignoreError>
              <div css={{ textAlign: 'center', width: '100%' }}>2</div>
            </FormRadioButton>
          </div>
          <div css={{ marginTop: 10 }}>
            <Button type="submit">submit</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SampleForm
