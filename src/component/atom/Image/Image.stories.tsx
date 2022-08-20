import { ComponentMeta, Story } from '@storybook/react';
import { Image, ImageProps } from '.';
import addHover from '~/img/add-hover.svg';
import add from '~/img/add.svg';
import cross from '~/img/cross-hover.svg';
import logo from '~/img/fwywd-white.svg';

export default {
  title: 'atom/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Logo = Template.bind({});
Logo.args = { src: logo, alt: 'sample image', width: 208, height: 87 };

export const Add = Template.bind({});
Add.args = { src: add, alt: 'sample image', width: 50, height: 50 };

export const AddHover = Template.bind({});
AddHover.args = { src: addHover, alt: 'sample image', width: 50, height: 50 };

export const Cross = Template.bind({});
Cross.args = { src: cross, alt: 'sample image', width: 50, height: 50 };
