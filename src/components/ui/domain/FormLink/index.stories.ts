import { Meta, StoryObj } from "@storybook/react";

import { FormLink } from ".";

type Story = StoryObj<typeof FormLink>;

const meta: Meta<typeof FormLink> = {
  args: {
    children: "test",
    href: "/test",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
  component: FormLink,
  tags: ["autodocs"],
  title: "UI/FormLink",
};

export const _FormLink: Story = {};

export default meta;
