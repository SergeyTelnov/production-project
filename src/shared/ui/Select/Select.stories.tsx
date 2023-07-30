import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Enter value:",
  options: [
    { value: "1", content: "example text 1" },
    { value: "2", content: "example text 2" },
    { value: "3", content: "example text 3" }
  ]
};
