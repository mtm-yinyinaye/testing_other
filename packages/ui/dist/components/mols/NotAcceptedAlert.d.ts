/// <reference types="react" />
declare type Props = {
    onClick: () => void;
    children?: React.ReactNode;
    message?: string;
    buttonText: string | React.ReactNode;
    showBackToLP?: boolean;
    lpUrl?: string;
    linkText?: string;
    className?: string;
};
declare const NotAcceptedAlert: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default NotAcceptedAlert;
