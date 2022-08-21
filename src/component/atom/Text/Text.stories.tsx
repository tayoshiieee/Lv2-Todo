import { ComponentMeta, Story } from '@storybook/react';
import { Cross } from '../Image/Image.stories'
import { Text } from '.';
import cross from '~/img/cross-hover.svg';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <span className='text-primary-800'>text-primary-800</span> };

export const Black = Template.bind({});
Black.args = { children: <span className='text-black'>text-black</span> };

export const Highlight = Template.bind({});
Highlight.args = { children: <span className='highlight'>highlight</span> };

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='text-xs'>text-xs</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='text-sm'>text-sm</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='text-base'>text-base</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='text-lg'>text-lg</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='text-xl'>text-xl</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = { children: <span className='text-2xl'>text-2xl</span> };

export const WithChecked = Template.bind({});
WithChecked.args = {
  children: (
    <>
      <div className='group flex items-center'>
        <input
          type='checkbox'
          className='focus:ring-0 w-[18px] h-[18px] rounded-sm border-primary-700 text-primary-700'
        />
        <label className='ml-3 text-sm text-primary-800 hover:underline'>text-sm</label>
        <div className="hidden group-hover:flex opacity-30 ml-3 items-center">
          <Cross src={cross} width={16} height={16}/>   
        </div>
      </div>
    </>
  ),
};
