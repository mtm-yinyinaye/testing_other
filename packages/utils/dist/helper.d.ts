/**
 * 1月から12月までのセレクトボックスの選択肢を返却する
 */
export declare const genBirthMonthOptions: () => {
    value: string;
    label: string;
}[];
/**
 * 1日から31日までのセレクトボックスの選択肢を返却する。
 * yearとmonthを渡すと、うるう年等を考慮した日数を返す。
 * @param year
 * @param month
 */
export declare const genBirthDayOptions: ({ year, month, }?: {
    year?: string | number | undefined;
    month?: string | number | undefined;
}) => {
    value: string;
    label: string;
}[];
/**
 * ひらがなをカタカタに変換したものを返す。ひらがな以外が含まれている場合スペースを返す
 * @param hiragana  ひらがな
 * @returns {String} カタカナ
 */
export declare const toKana: (hiragana: string) => string;
/**
 * 文字列から、指定したフォーマットの文字列の日付を取得する
 * @param dateString 文字列yyyymmdd
 * @param format パース対象のフォーマット デフォルトyyyy年m月d日
 * @param format 変換後のフォーマット デフォルトyyyy年m月d日
 */
export declare const stringDateToFormattedString: (dateString: string, format?: string, toFormat?: string) => string;
export declare const stringToDate: (dateString: string, format?: string) => Date;
/**
 *  zipCodeを〒127-0001の形式で返す
 *
 * @param zipCode 7桁ハイフンなしの郵便番号
 */
export declare const buildZipCode: (zipCode: string) => string;
/**
 * カードの有効期限を返却する
 */
export declare const getSelectExpirationYear: () => {
    value: string;
    label: string;
}[];
/**
 * 名前を生成する
 * @param familyName
 * @param firstName
 */
export declare const genName: (familyName: string, firstName: string) => string;
/**
 * YMDを結合する
 * @param year yyyy
 * @param month mm
 * @param day dd
 */
export declare const concatDay: (year: string, month: string, day: string) => string;
/**
 * YMDを分割する
 */
export declare const splitDay: (ymd: string) => {
    y: string;
    m: string;
    d: string;
};
/**
 * 半角スペース区切りの姓名を分割する
 */
export declare const splitName: (name: string) => string[];
/**
 * 年/月/日を年月日に生成する
 * @param dateOfBirthYear yyyy
 * @param dateOfBirthMonth mm
 * @param dateOfBirthDay dd
 */
export declare const genBirthDay: ({ dateOfBirthYear, dateOfBirthMonth, dateOfBirthDay, }: {
    dateOfBirthYear: string;
    dateOfBirthMonth: string;
    dateOfBirthDay: string;
}) => string;
