import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "widget/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...(args as object)} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthSidebarLight = Template.bind({});
AuthSidebarLight.args = {};
AuthSidebarLight.decorators = [StoreDecorator({ user: { authData: {} } })];

export const AuthSidebarDark = Template.bind({});
AuthSidebarDark.args = {};
AuthSidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } })
];
