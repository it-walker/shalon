/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyRadioProps } from "./MyRadio";
import { CardProps, FlexProps, HeadingProps, RadioProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyGroupOverridesProps = {
    MyGroup?: PrimitiveOverrideProps<FlexProps>;
    MyRadio?: MyRadioProps;
    Card?: PrimitiveOverrideProps<CardProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Radio?: PrimitiveOverrideProps<RadioProps>;
} & EscapeHatchProps;
export declare type MyGroupProps = React.PropsWithChildren<Partial<FlexProps> & {
    SlotMyLabel?: React.ReactNode;
} & {
    overrides?: MyGroupOverridesProps | undefined | null;
}>;
export default function MyGroup(props: MyGroupProps): React.ReactElement;
