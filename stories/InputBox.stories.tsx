import React from "react";
import { Story, Meta } from "@storybook/react";
import { InputBox as InputBoxComponent, InputBoxProps } from "../components/InputBox";

export default {
  title: "Components",
  component: InputBoxComponent,
  argTypes: {},
} as Meta;

const Template: Story<InputBoxProps> = (args) => <InputBoxComponent {...args} />;

export const InputBox = Template.bind({});
InputBox.args = {};
