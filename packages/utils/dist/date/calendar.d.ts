export declare const GENGO: {
    readonly TAISYO: "大正";
    readonly SYOWA: "昭和";
    readonly HEISEI: "平成";
    readonly REIWA: "令和";
};
/**
 * 西暦を和暦に変換する
 * eg) 1987 → 昭和62年
 *     1987 → 昭和62年
 */
export declare const convertToWareki: (year: number) => string;
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
