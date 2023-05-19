/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StandardCardProps } from "./StandardCard";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCardOverridesProps = {
    HomeCard?: PrimitiveOverrideProps<FlexProps>;
    StandardCard?: StandardCardProps;
} & EscapeHatchProps;
export declare type HomeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomeCardOverridesProps | undefined | null;
}>;
export default function HomeCard(props: HomeCardProps): React.ReactElement;
