/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Flex } from "@aws-amplify/ui-react";
export default function Page01(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(230,238,254,1)"
      {...getOverrideProps(overrides, "Page01")}
      {...rest}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Main")}
      >
        <SideBar
          display="flex"
          gap="10px"
          direction="row"
          width="385px"
          height="762px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="32px 0px 32px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "SideBar")}
        ></SideBar>
      </Flex>
    </Flex>
  );
}
