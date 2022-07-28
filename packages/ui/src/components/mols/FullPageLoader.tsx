import { css, useTheme } from '@emotion/react'
import Loader from 'react-loader-spinner'
import { theme as defaultTheme } from '@/styles'

type Props = {
  className?: string
}

const FullPageLoader = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  return (
    <div css={container} className={props.className}>
      <Loader
        type="Watch"
        color={theme.palette.primary}
        height={150}
        width={150}
      />
      <p css={text}>Loading...</p>
    </div>
  )
}
const container = css({
  position: 'fixed',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.5)',
})

const text = css({
  fontSize: '2rem',
  color: '#fff',
})

export default FullPageLoader
