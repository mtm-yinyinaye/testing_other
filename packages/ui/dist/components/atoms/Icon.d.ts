/// <reference types="react" />
declare const ICON_MAP: {
    arrow: any;
    calc: any;
    close: any;
    couple: any;
    keyboard: any;
    member: any;
    otherTab: any;
    pdf: (props: {
        className?: string;
    }) => import("@emotion/react/jsx-runtime").JSX.Element;
    speecheBallon: any;
    spouse: any;
    questionCircle: any;
};
declare type IconProps = JSX.IntrinsicElements['svg'] & {
    name: keyof typeof ICON_MAP;
};
declare const Icon: (props: IconProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Icon;
