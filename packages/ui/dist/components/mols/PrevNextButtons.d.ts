declare type Props = {
    type?: 'button' | 'submit';
    className?: string;
    hasNext?: boolean;
    onNext?: () => void;
    onPrev?: () => void;
    isDisabledNextButton?: boolean;
    buttonMessage?: string;
};
declare const PrevNextButtons: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default PrevNextButtons;
