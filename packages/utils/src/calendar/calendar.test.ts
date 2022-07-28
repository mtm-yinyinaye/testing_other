import { convertToWareki } from './calendar'

describe('日付Utilのテスト', () => {
  it('西暦→和暦変換が行われること', () => {
    expect(convertToWareki(1912)).toBe('大正元年')
    expect(convertToWareki(1925)).toBe('大正14年')
    expect(convertToWareki(1926)).toBe('昭和元年')
    expect(convertToWareki(1988)).toBe('昭和63年')
    expect(convertToWareki(1989)).toBe('平成元年')
    expect(convertToWareki(2018)).toBe('平成30年')
    expect(convertToWareki(2019)).toBe('令和元年')
    expect(convertToWareki(2020)).toBe('令和2年')
  })
  it('対象外の西暦はエラーになること', () => {
    expect(() => {
      convertToWareki(1911)
    }).toThrow()
  })
})
