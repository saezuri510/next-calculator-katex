import { Meta, StoryObj } from "@storybook/react";

import { FormInput } from ".";

type Story = StoryObj<typeof FormInput>;

const meta: Meta<typeof FormInput> = {
  argTypes: {
    className: { control: { type: "text" } },
  },
  component: FormInput,
  tags: ["autodocs"],
  title: "UI/FormInput",
};

export const _FormInput: Story = {};

export default meta;
