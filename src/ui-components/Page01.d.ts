/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarProps } from "./NavBar";
import { SideBarProps } from "./SideBar";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Page01OverridesProps = {
    Page01?: PrimitiveOverrideProps<FlexProps>;
    NavBar?: NavBarProps;
    Main?: PrimitiveOverrideProps<FlexProps>;
    SideBar?: SideBarProps;
} & EscapeHatchProps;
export declare type Page01Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Page01OverridesProps | undefined | null;
}>;
export default function Page01(props: Page01Props): React.ReactElement;
