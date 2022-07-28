/// <reference types="react" />
declare type Props = {
    children: React.ReactNode;
    variant?: 'default' | 'outlined';
    className?: string;
    arrowPosition?: 'default' | 'middle';
    arrowDirection?: 'top' | 'bottom';
};
declare const SpeechBubble: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SpeechBubble;
