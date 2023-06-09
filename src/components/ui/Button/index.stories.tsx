import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Example/ex",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const _Button: Story = {};
