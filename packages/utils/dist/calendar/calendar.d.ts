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
