import { ComponentMeta, Story } from '@storybook/react';
import { Form } from '.';

export default {
  title: 'atom/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story = (args) => <Form {...args} />;

export const From = Template.bind({});
From.args = {
  children: <input className='form-base w-[300px]' placeholder='' />,
};
