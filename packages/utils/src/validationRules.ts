import { acceptableCharList } from './acceptableCharList'

export const number = (value: any) => {
  const regex = /^[0-9]+$/
  return regex.test(value)
}

export const name = (value: any) => {
  const regex = /^[ぁ-んァ-ヶー一-龠々]+$/
  return regex.test(value)
}

export const acceptableChar = (value: any) => {
  const regexp = new RegExp(`[^${acceptableCharList}]`)
  return value.match(regexp)
}

export const nameKana = (value: any) => {
  const regex = /^[ァ-ヶー]+$/
  return regex.test(value)
}

export const cities = (value: any) => {
  // eslint-disable-next-line no-irregular-whitespace
  const regex = /^[０-９ａ-ｚＡ-Ｚぁ-んァ-ヶー一-龠々 　]+$/
  return regex.test(value)
}

export const address = (value: any) => {
  const regex =
    // eslint-disable-next-line no-irregular-whitespace
    /^[-0-9a-zA-Zｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-んァ-ヶー一-龠々！＃＄％＆（）＝＠＋＊＜＞？／。．＿－ー 　]+$/
  return regex.test(value)
}

export const tel = (value: any) => {
  // 桁数が９桁以下もしくは、１２桁以上のものはNG。
  if (!/^.{10,11}$/.test(value)) {
    return false
  }

  // 0から始まらなければいけない
  if (!/^0/.test(value)) {
    return false
  }

  // 2文字目が0ではいけない
  if (/^.0/.test(value)) {
    return false
  }

  // 3文字目が0の場合、2文字目は5,7,8,9でなければいけない
  if (/^.[^5|7-9]0/.test(value)) {
    return false
  }
  // 0120または0990から始まってはいけない
  if (/^(0120|0990)/.test(value)) {
    return false
  }

  return true
}

export const zipCode = (value: any) => {
  const regex = /^[0-9]{7}$/
  return regex.test(value)
}
