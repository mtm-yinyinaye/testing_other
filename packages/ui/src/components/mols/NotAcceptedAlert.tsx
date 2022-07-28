import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'
import Button from '@/components/atoms/Button'

type Props = {
  onClick: () => void
  children?: React.ReactNode
  message?: string
  buttonText: string | React.ReactNode
  showBackToLP?: boolean
  lpUrl?: string
  linkText?: string
  className?: string
}

const NotAcceptedAlert = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const container = css({
    width: '1000px',
    border: '2px solid',
    borderColor: theme.palette.primary,
    padding: '23px 90px',
    background: '#ffffff',
    textAlign: 'center',

    [mq[sp]]: {
      width: '95%',
      margin: '0 auto',
      padding: '23px',
    },
  })

  return (
    <div css={container} className={props.className}>
      <div>
        <p>{props.message}</p>
        {props.children}
        {props.showBackToLP && (
          <div css={{ marginTop: '15px' }}>
            <a href={props.lpUrl}>{props.linkText}</a>
          </div>
        )}
      </div>

      <div css={{ marginTop: '40px' }}>
        <Button type="button" onClick={props.onClick}>
          {props.buttonText}
        </Button>
      </div>
    </div>
  )
}

export default NotAcceptedAlert
