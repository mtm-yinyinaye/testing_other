import { ComponentProps } from 'react';
import CheckBox from '@/components/atoms/CheckBox';
declare type BaseProp = Omit<ComponentProps<typeof CheckBox>, 'checked'>;
declare type Props = BaseProp & {
    name: string;
    ignoreError?: boolean;
    defaltValue?: string | number;
};
declare const FormCheckBox: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FormCheckBox;
