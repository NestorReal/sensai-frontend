/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Entradas',
  value: 0,
  upDown: 5,
};
