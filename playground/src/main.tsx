import * as ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '@ad/ui'
import Form from './Form'

const App = () => {
  const theme = { ...defaultTheme, btn: { ...defaultTheme.btn, bg: 'red' } }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
