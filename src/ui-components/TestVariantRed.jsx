/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, View, useBreakpointValue } from "@aws-amplify/ui-react";
export default function TestVariantRed(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        "Rectangle 11651492727": {},
        Header: {},
        "Rectangle 11651492734": {},
        Main: {},
        "Rectangle 11651492731": {},
        Footer: {},
        TestVariantRed: {},
      },
    },
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        "Rectangle 11651492727": {},
        Header: {},
        "Rectangle 11651492734": {},
        Main: {},
        "Rectangle 11651492731": {},
        Footer: {},
        TestVariantRed: {},
      },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="column"
      width="185px"
      height="326px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="8px 8px 8px 8px"
      display="flex"
      {...getOverrideProps(overrides, "TestVariantRed")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        display="flex"
        {...getOverrideProps(overrides, "Header")}
      >
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 11651492727")}
        ></View>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        display="flex"
        {...getOverrideProps(overrides, "Main")}
      >
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 11651492734")}
        ></View>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        display="flex"
        {...getOverrideProps(overrides, "Footer")}
      >
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 11651492731")}
        ></View>
      </Flex>
    </Flex>
  );
}
