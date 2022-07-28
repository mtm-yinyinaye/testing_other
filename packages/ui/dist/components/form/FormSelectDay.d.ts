import { ComponentProps } from 'react';
import FormSelectBox from './FormSelectBox';
declare type Props = {
    name: string;
    yearOptions: {
        value: number | string;
        label: string;
    }[];
    className?: string;
} & Omit<ComponentProps<typeof FormSelectBox>, 'items'>;
declare const SelectDay: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectDay;
