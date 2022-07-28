/// <reference types="react" />
declare type Props = {
    no: number;
    isDone: boolean;
    isCurrent: boolean;
    children: React.ReactNode;
    className?: string;
};
declare const Step: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Step;
