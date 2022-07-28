import React from 'react';
declare type Props = JSX.IntrinsicElements['button'] & {
    name?: string;
    variant?: 'contained' | 'outlined';
    prev?: boolean;
    next?: boolean;
    children: React.ReactNode;
};
declare const Button: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Button;
