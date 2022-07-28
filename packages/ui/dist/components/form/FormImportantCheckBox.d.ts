/// <reference types="react" />
declare type Props = {
    name: string;
    children: React.ReactNode;
    handleClick?: (e: React.FormEvent<HTMLElement>) => void;
    className?: string;
};
declare const FormImportantCheckBox: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FormImportantCheckBox;
