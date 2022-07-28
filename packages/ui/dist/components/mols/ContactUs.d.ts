/// <reference types="react" />
declare type Props = {
    deskName: string;
    deskTelNo: string;
    deskReceptionTime: string;
    deskReceptionNote: string;
    title?: string;
    faqButton?: React.ReactNode;
    className?: string;
};
declare const ContactUs: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ContactUs;
