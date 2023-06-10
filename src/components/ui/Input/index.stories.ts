import { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  argTypes: {
    className: { control: { type: "text" } },
  },
  component: Input,
  tags: ["autodocs"],
  title: "UI/Input",
};

export const _Input: Story = {};

export default meta;
