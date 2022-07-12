import { ComponentMeta, Story } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <button className='btn-primary btn-base'>btn-primary</button>,
};

export const Orange = Template.bind({});
Orange.args = {
  children: <button className='btn-orange btn-base'>btn-orange</button>,
};

export const Pink = Template.bind({});
Pink.args = {
  children: <button className='btn-pink btn-base'>btn-pink</button>,
};
