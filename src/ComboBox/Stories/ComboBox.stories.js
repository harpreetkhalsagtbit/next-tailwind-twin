import React from 'react';

import ComboBox from '../index';
import { nestedOptions, nestedOptions2, nestedOptions3 } from './data';

export default {
	title: 'ComboBox/Default',
	component: ComboBox,
	argTypes: {},
};

const Template = (args) => (
	<div style={{ width: '50%' }}>
		<ComboBox {...args} />
	</div>
);

export const ComboBoxComponentWithoutPlaceHolder = Template.bind({});
ComboBoxComponentWithoutPlaceHolder.storyName = 'Normal Without Placeholder';
ComboBoxComponentWithoutPlaceHolder.args = {
	options: nestedOptions,
};

export const ComboBoxComponentWithPlaceHolder = Template.bind({});
ComboBoxComponentWithPlaceHolder.storyName = 'Normal With Placeholder';
ComboBoxComponentWithPlaceHolder.args = {
	options: nestedOptions,
	placeHolder: 'All',
};

export const ComboBoxComponentWithDefaultSelection = Template.bind({});
ComboBoxComponentWithDefaultSelection.storyName = 'With Default Selection';
ComboBoxComponentWithDefaultSelection.args = {
	options: nestedOptions2,
	placeHolder: 'All',
};

export const ComboBoxComponentWithDisabledItem = Template.bind({});
ComboBoxComponentWithDisabledItem.storyName = 'With Disabled Item';
ComboBoxComponentWithDisabledItem.args = {
	options: nestedOptions3,
	placeHolder: 'All',
};
