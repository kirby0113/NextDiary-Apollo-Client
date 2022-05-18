import React from "react";
import { Story, Meta } from "@storybook/react";
import { PrimaryButton as PrimaryButtonComponent,PrimaryButtonProps } from "../components/PrimaryButton";

export default {
  title: "Components",
  component: PrimaryButtonComponent,
  argTypes: {},
} as Meta;

const Template: Story<PrimaryButtonProps> = (args) => <PrimaryButtonComponent {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  purpose:"purpose",
};
