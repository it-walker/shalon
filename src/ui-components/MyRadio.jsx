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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MyRadio(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { state: "on" },
      overrides: {
        "Ellipse 1": {},
        "Ellipse 2": {
          paths: [
            {
              d: "M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z",
              fill: "rgba(64,106,191,1)",
              fillRule: "nonzero",
            },
          ],
        },
        "Frame 418": {},
        label: {},
        MyRadio: {},
      },
    },
    {
      variantValues: { state: "off" },
      overrides: {
        "Ellipse 1": {},
        "Ellipse 2": {},
        "Frame 418": {},
        label: {},
        MyRadio: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="4px 10px 4px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MyRadio")}
      {...rest}
    >
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M19 10C19 14.9706 14.9706 19 10 19L10 21C16.0751 21 21 16.0751 21 10L19 10ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM1 10C1 5.02944 5.02944 1 10 1L10 -1C3.92487 -1 -1 3.92487 -1 10L1 10ZM10 1C14.9706 1 19 5.02944 19 10L21 10C21 3.92487 16.0751 -1 10 -1L10 1Z",
              stroke: "rgba(220,222,224,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 1")}
        ></Icon>
        <Icon
          width="14px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
          paths={[
            {
              d: "M13 7C13 10.3137 10.3137 13 7 13L7 15C11.4183 15 15 11.4183 15 7L13 7ZM7 13C3.68629 13 1 10.3137 1 7L-1 7C-1 11.4183 2.58172 15 7 15L7 13ZM1 7C1 3.68629 3.68629 1 7 1L7 -1C2.58172 -1 -1 2.58172 -1 7L1 7ZM7 1C10.3137 1 13 3.68629 13 7L15 7C15 2.58172 11.4183 -1 7 -1L7 1Z",
              stroke: "rgba(239,240,240,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3px"
          left="3px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
      </View>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="初期値"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
