import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "UI/Button",
};

export const _Button: Story = {
  args: {
    children: "ボタン",
  },
};

export default meta;
