import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { LoginModal } from "./LoginModal";

export default {
  title: "feature/LoginModal",
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true
};
Primary.decorators = [
  StoreDecorator({ loginForm: { username: "Username", password: "12345678" } })
];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true
};
Dark.decorators = [
  StoreDecorator({ loginForm: { username: "Username", password: "12345678" } }),
  ThemeDecorator(Theme.DARK)
];
