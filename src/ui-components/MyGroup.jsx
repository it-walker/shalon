/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyRadio from "./MyRadio";
import { Card, Flex, Heading, Radio } from "@aws-amplify/ui-react";
export default function MyGroup(props) {
  const { SlotMyLabel, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="22px 13px 22px 13px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MyGroup")}
      {...rest}
    >
      <MyRadio
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="4px 10px 4px 10px"
        backgroundColor="rgba(255,255,255,1)"
        state="off"
        label="っっっy"
        {...getOverrideProps(overrides, "MyRadio")}
      ></MyRadio>
      <Card
        width="unset"
        height="unset"
        shrink="0"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="6"
        children="やったー"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Radio
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="start"
        children="あほ"
        {...getOverrideProps(overrides, "Radio")}
      ></Radio>
    </Flex>
  );
}
