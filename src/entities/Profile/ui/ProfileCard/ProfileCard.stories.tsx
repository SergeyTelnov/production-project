import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";
import avatarIcon from "shared/ui/Avatar/storybook.jpg";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: "Иван",
    lastname: "Иванов",
    age: 22,
    city: "Москва",
    username: "admin",
    currency: Currency.RUB,
    country: Country.Russia,
    avatar: avatarIcon
  }
};

export const WithError = Template.bind({});
WithError.args = { error: "true" };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
