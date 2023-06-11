import { Meta, StoryObj } from "@storybook/react";

import { Link } from ".";

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
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
  component: Link,
  tags: ["autodocs"],
  title: "UI/Link",
};

export const _Link: Story = {};

export default meta;
