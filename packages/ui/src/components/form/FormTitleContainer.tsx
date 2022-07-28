import { css, useTheme } from '@emotion/react'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = {
  children: React.ReactNode
  required?: boolean
  className?: string
}

const FormTitleContainer = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const titleContainer = css({
    position: 'relative',
    width: '315px',
    padding: '30px 15px',
    background: '#f5f5f5',
    fontWeight: 'bold',

    [mq[sp]]: {
      display: 'block',
      width: '100%',
      height: '40px',
      padding: '12px 15px',
    },
  })

  const requiredContainer = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  })

  const mandatory = css({
    display: 'inline-block',
    padding: '3px 10px',
    backgroundColor: theme.palette.primary,
    color: '#fff',
    fontSize: '1.2rem',
  })

  return (
    <dt css={titleContainer} className={props.className}>
      {props.required ? (
        <div css={requiredContainer}>
          {props.children}
          <span css={mandatory}>必須</span>
        </div>
      ) : (
        props.children
      )}
    </dt>
  )
}

export default FormTitleContainer
