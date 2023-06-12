/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function SideBar02(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="385px"
      height="528px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 32px 0px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SideBar02")}
      {...rest}
    >
      <View
        width="140px"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Main")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ORGANIZATION"
          {...getOverrideProps(overrides, "ORGANIZATION")}
        ></Text>
      </View>
    </Flex>
  );
}
