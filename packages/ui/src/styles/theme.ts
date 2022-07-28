/**
 * カラー
 */
export const color = {
  green: '#78b82a',
  white: '#ffffff',
  seashell: '#f1f1f1',
  grey: '#e5e5e5',
  silver: '#bfbfbf',
  frost: '#f4faed',
  blue: '#008eed',
  carnation: '#fa4b62',
  pippin: '#ffe5e6',
  orange: '#f39800',
  milkPunch: '#fff5d7',
  mineShaft: '#333333',
  mercury: '#e5e5e5',
}

/**
 * パレット
 */
export const palette = {
  // メインカラー
  primary: color.carnation,
  // テキストカラー
  text: color.mineShaft,
}

/**
 * ボタン
 */
const btn = {
  bg: color.green,
  border: color.green,
  arrow: color.grey,
  color: color.white,
}

const btnOutline = {
  bg: color.white,
  border: color.green,
  color: color.green,
}

/**
 * InputText
 */
const input = {
  bg: color.white,
  bgError: color.pippin,
  border: color.grey,
  borderFocused: color.blue,
  borderError: color.carnation,
  placeholder: color.silver,
  borderRadius: '4px',
}

/**
 * CheckBox(Check)
 */
const chk = {
  bg: color.white,
  bgError: color.pippin,
  mark: palette.primary,
  border: color.grey,
  borderFocused: color.blue,
  borderError: color.carnation,
  borderRadius: '4px',
}

/**
 * RadioButton
 */
const radio = {
  bg: color.white,
  bgHover: color.frost,
  bgError: color.pippin,
  border: color.grey,
  borderFocused: color.green,
  borderError: color.carnation,
  borderRadius: '4px',
  shadow: color.silver,
}

/**
 * SelectBox
 */
const select = {
  arrow: palette.primary,
  bg: color.white,
  bgError: color.pippin,
  border: color.grey,
  borderFocused: color.green,
  borderError: color.carnation,
  borderRadius: '4px',
}

export const theme = {
  palette,
  btn,
  btnOutline,
  input,
  chk,
  radio,
  select,
}
