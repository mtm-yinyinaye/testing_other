declare type Props = {
    name: string;
    className?: string;
    visibleOnTouch?: boolean;
    visibleCondition?: (error: any, isTouched: boolean, errors: any) => boolean;
};
declare const FormErrorMessage: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export default FormErrorMessage;
