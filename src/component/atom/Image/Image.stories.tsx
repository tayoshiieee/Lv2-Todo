import { ComponentMeta, Story } from '@storybook/react';
import { Image, ImageProps } from '.';
// import sampleImage from '~/img/shizuku.jpg';

export default {
  title: 'atom/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = { src: '/img/shizuku.jpg', alt: 'sample image', width: 601, height: 600 };
