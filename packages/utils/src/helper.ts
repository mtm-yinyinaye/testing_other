import { getDaysInMonth, parse, format as dateFormat } from 'date-fns'
import ja from 'date-fns/locale/ja'

/**
 * 1月から12月までのセレクトボックスの選択肢を返却する
 */
export const genBirthMonthOptions = () => {
  const empty = [{ value: '', label: '' }]
  const options = [...Array(12)].map((_, index) => ({
    value: `${index + 1}`.padStart(2, '0'),
    label: `${index + 1}`,
  }))
  return empty.concat(options)
}

/**
 * 1日から31日までのセレクトボックスの選択肢を返却する。
 * yearとmonthを渡すと、うるう年等を考慮した日数を返す。
 * @param year
 * @param month
 */
export const genBirthDayOptions = ({
  year = new Date().getFullYear(),
  // getMonthは0から始まるので、1を加算する
  month = new Date().getMonth() + 1,
}: {
  year?: number | string
  month?: number | string
} = {}) => {
  if (typeof year === 'string') {
    year = parseInt(year) || new Date().getFullYear()
  }

  if (typeof month === 'string') {
    month = parseInt(month) || new Date().getMonth() + 1
  }

  // new Dateするときはmonthを減算
  const days = getDaysInMonth(new Date(year, month - 1))

  const empty = [{ value: '', label: '' }]
  const options = [...Array(days)].map((_, index) => ({
    value: `${index + 1}`.padStart(2, '0'),
    label: `${index + 1}`,
  }))
  return empty.concat(options)
}

/**
 * ひらがなをカタカタに変換したものを返す。ひらがな以外が含まれている場合スペースを返す
 * @param hiragana  ひらがな
 * @returns {String} カタカナ
 */
export const toKana = (hiragana: string) => {
  const maybeKana = hiragana.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60
    return String.fromCharCode(chr)
  })
  return /^[ァ-ヶー]*$/.test(maybeKana) ? maybeKana : ''
}

/**
 * 文字列から、指定したフォーマットの文字列の日付を取得する
 * @param dateString 文字列yyyymmdd
 * @param format パース対象のフォーマット デフォルトyyyy年m月d日
 * @param format 変換後のフォーマット デフォルトyyyy年m月d日
 */
export const stringDateToFormattedString = (
  dateString: string,
  format = 'yyyyMMdd',
  toFormat = 'yyyy年M月d日',
) => {
  const date = stringToDate(dateString, format)
  return dateFormat(date, toFormat, { locale: ja })
}

export const stringToDate = (dateString: string, format = 'yyyyMMdd') => {
  return parse(dateString, format, new Date())
}
/**
 *  zipCodeを〒127-0001の形式で返す
 *
 * @param zipCode 7桁ハイフンなしの郵便番号
 */
export const buildZipCode = (zipCode: string) => {
  const firstThreeDigit = zipCode.substr(0, 3)
  const lastFourDigit = zipCode.substr(3, 4)
  return `〒${firstThreeDigit}-${lastFourDigit}`
}
/**
 * カードの有効期限を返却する
 */
export const getSelectExpirationYear = () => {
  const presentYear = new Date().getFullYear()

  const empty = [{ value: '', label: '' }]

  const options = [...Array(8)].map((_, index) => ({
    value: `${index + (presentYear - 2000)}`,
    label: `${index + (presentYear - 2000)}`,
  }))

  return empty.concat(options)
}

/**
 * 名前を生成する
 * @param familyName
 * @param firstName
 */
export const genName = (familyName: string, firstName: string) => {
  return `${familyName} ${firstName}`
}

/**
 * YMDを結合する
 * @param year yyyy
 * @param month mm
 * @param day dd
 */
export const concatDay = (year: string, month: string, day: string) => {
  return `${year}${month}${day}`
}

/**
 * YMDを分割する
 */
export const splitDay = (ymd: string) => {
  return {
    y: ymd.slice(0, 4),
    m: ymd.slice(4, 6),
    d: ymd.slice(6, 8),
  }
}

/**
 * 半角スペース区切りの姓名を分割する
 */
export const splitName = (name: string) => {
  const SEPARATOR = ' '
  return name.split(SEPARATOR)
}

/**
 * 年/月/日を年月日に生成する
 * @param dateOfBirthYear yyyy
 * @param dateOfBirthMonth mm
 * @param dateOfBirthDay dd
 */
export const genBirthDay = ({
  dateOfBirthYear,
  dateOfBirthMonth,
  dateOfBirthDay,
}: {
  dateOfBirthYear: string
  dateOfBirthMonth: string
  dateOfBirthDay: string
}) => {
  return concatDay(dateOfBirthYear, dateOfBirthMonth, dateOfBirthDay)
}
