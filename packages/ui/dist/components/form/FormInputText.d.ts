import { ComponentProps } from 'react';
import InputText from '@/components/atoms/InputText';
declare type Props = ComponentProps<typeof InputText> & {
    name: string;
    inputRef?: any;
};
declare const FormInputText: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FormInputText;
