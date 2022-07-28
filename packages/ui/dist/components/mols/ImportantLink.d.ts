/// <reference types="react" />
declare type Props = {
    children: React.ReactNode;
    to?: string;
    checked: boolean;
    handleClick?: () => void;
    className?: string;
};
declare const ImportantLink: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ImportantLink;
