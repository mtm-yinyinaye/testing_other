declare type Props = {
    steps: {
        index: number;
        path: string;
        text: string;
    }[];
    currentUrl: string;
    className?: string;
};
declare const Stepper: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Stepper;
