/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBar02OverridesProps = {
    SideBar02?: PrimitiveOverrideProps<FlexProps>;
    Main?: PrimitiveOverrideProps<ViewProps>;
    ORGANIZATION?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBar02Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBar02OverridesProps | undefined | null;
}>;
export default function SideBar02(props: SideBar02Props): React.ReactElement;
