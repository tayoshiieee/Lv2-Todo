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

export const Pink = Template.bind({});
Pink.args = {
  children: <button className='btn-pink btn-base'>btn-pink</button>,
};

export const Small = Template.bind({});
Small.args = {
  children: <button className='btn-sm'>btn-sm</button>,
};

export const Base = Template.bind({});
Base.args = {
  children: <button className='btn-base'>btn-base</button>,
};

export const Large = Template.bind({});
Large.args = {
  children: <button className='btn-lg'>btn-lg</button>,
};
