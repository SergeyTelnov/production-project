import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title example",
  text: "Text example"
};

export const Error = Template.bind({});
Error.args = {
  title: "Title example",
  text: "Text example",
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title example"
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Text example"
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Title example",
  text: "Text example"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title example"
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Text example"
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
