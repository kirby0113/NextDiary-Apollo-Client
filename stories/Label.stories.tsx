import React from "react";
import { Story, Meta } from "@storybook/react";
import { Label as LabelComponent,LabelProps } from "../components/Label";

export default {
  title: "Components",
  component: LabelComponent,
  argTypes: {},
} as Meta;

const Template: Story<LabelProps> = (args) => <LabelComponent {...args} />;

export const Label = Template.bind({});
Label.args = {
  children:"children",
};
