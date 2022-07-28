import { RefObject } from 'react';
/**
 * 画面のスクロール位置からページトップへの表示条件に該当するかを判断する
 */
declare const usePageTop: (targetRef: RefObject<HTMLDivElement>) => {
    showPageTop: boolean;
    handleClickPageTop: () => void;
};
export default usePageTop;
