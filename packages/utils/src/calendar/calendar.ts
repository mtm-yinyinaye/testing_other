export const GENGO = {
  TAISYO: '大正',
  SYOWA: '昭和',
  HEISEI: '平成',
  REIWA: '令和',
} as const

const MIN_YEAR = 1912
const MAX_YAER = 9999

const GENGO_DEF = {
  [GENGO.TAISYO]: [MIN_YEAR, 1925],
  [GENGO.SYOWA]: [1926, 1988],
  [GENGO.HEISEI]: [1989, 2018],
  [GENGO.REIWA]: [2019, MAX_YAER],
} as const

/**
 * 西暦を和暦に変換する
 * eg) 1987 → 昭和62年
 *     1987 → 昭和62年
 */
export const convertToWareki = (year: number) => {
  if (year < MIN_YEAR) {
    throw new Error(`${MIN_YEAR}未満の西暦は対応していません。`)
  }

  const key = Object.keys(GENGO_DEF).find((key) => {
    const [begin, end] = GENGO_DEF[key as keyof typeof GENGO_DEF]
    return begin <= year && year <= end
  })

  if (!key) {
    throw new Error(`${year}に対応する元号が見つかりません`)
  }

  const [begin] = GENGO_DEF[key as keyof typeof GENGO_DEF]

  const waYear = year - begin + 1
  return waYear === 1 ? `${key}元年` : `${key}${waYear}年`
}
