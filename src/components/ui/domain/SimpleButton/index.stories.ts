import { Meta, StoryObj } from "@storybook/react";

import { SimpleButton } from ".";

type Story = StoryObj<typeof SimpleButton>;

const meta: Meta<typeof SimpleButton> = {
  args: {
    children: "ボタン",
  },
  argTypes: {
    className: { control: { type: "text" } },
  },
  component: SimpleButton,
  tags: ["autodocs"],
  title: "UI/SimpleButton",
};

export const _SimpleButton: Story = {};

export default meta;
