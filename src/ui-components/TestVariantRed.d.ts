/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestVariantRedOverridesProps = {
    TestVariantRed?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 11651492727"?: PrimitiveOverrideProps<ViewProps>;
    Main?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 11651492734"?: PrimitiveOverrideProps<ViewProps>;
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 11651492731"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TestVariantRedProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TestVariantRedOverridesProps | undefined | null;
}>;
export default function TestVariantRed(props: TestVariantRedProps): React.ReactElement;
