import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <span className='tag-base tag-primary'>tag-primary</span>,
};

export const Pink = Template.bind({});
Pink.args = {
  children: <span className='tag-base tag-pink'>tag-pink</span>,
};
