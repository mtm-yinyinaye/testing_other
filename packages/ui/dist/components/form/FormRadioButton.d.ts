import { ComponentProps } from 'react';
import RadioButton from '@/components/atoms/RadioButton';
declare type BaseProp = Omit<ComponentProps<typeof RadioButton>, 'checked'>;
declare type Props = BaseProp & {
    name: string;
    ignoreError?: boolean;
    defaltValue?: string | number;
};
declare const FormRadioButton: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FormRadioButton;
