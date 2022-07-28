/// <reference types="react" />
declare type Props = {
    children: React.ReactNode;
    setIsShow: (isShow: boolean) => void;
    isShow?: boolean;
    className?: string;
};
declare const KeyBoardContainer: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default KeyBoardContainer;
