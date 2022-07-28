import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    palette: Palette
    btn: Button
    btnOutline: ButtonOutline
    input: Input
    chk: CheckBox
    radio: Radio
    select: Select
  }
}

interface Palette {
  // メインカラー
  primary: string
  // テキストカラー
  text: string
}

interface Button {
  bg: string
  border: string
  arrow: string
  color: string
}

interface ButtonOutline {
  bg: string
  border: string
  color: string
}

interface Input {
  bg: string
  bgError: string
  border: string
  borderFocused: string
  borderError: string
  placeholder: string
  borderRadius: string
}

interface CheckBox {
  bg: string
  bgError: string
  mark: string
  border: string
  borderError: string
  borderFocused: string
  borderRadius: string
}

interface Radio {
  bg: string
  bgHover: string
  bgError: string
  border: string
  borderFocused: string
  borderError: string
  borderRadius: string
  shadow: string
}

interface Select {
  arrow: string
  bg: string
  bgError: string
  border: string
  borderFocused: string
  borderError: string
  borderRadius: string
}
