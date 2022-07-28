import { ComponentProps } from 'react';
import SelectBox from '@/components/atoms/SelectBox';
declare type Props = ComponentProps<typeof SelectBox> & {
    name: string;
    defaltValue?: string | number;
    ignoreError?: boolean;
};
declare const FormSelectBox: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FormSelectBox;
