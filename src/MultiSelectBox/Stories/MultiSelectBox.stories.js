import React from 'react';

import MultiSelectBox from '../index';
import {
	adpushupDropdownDataFormat,
	adpushupDropdownDataFormatWithDefaultSelection,
	disabledItem,
	adpushupDropdownDataFormatWithMultipleDefaultSelections,
} from './data';

export default {
	title: 'MultiSelectBox/Default',
	component: MultiSelectBox,
	argTypes: {},
};

const Template = (args) => (
	<div style={{ width: '50%' }}>
		<MultiSelectBox {...args} />
	</div>
);

export const MultiSelectBoxComponentWithoutPlaceHolder = Template.bind({});
MultiSelectBoxComponentWithoutPlaceHolder.storyName = 'Normal With default Placeholder';
MultiSelectBoxComponentWithoutPlaceHolder.args = {
	options: adpushupDropdownDataFormat,
};

export const MultiSelectBoxComponentWithPlaceHolder = Template.bind({});
MultiSelectBoxComponentWithPlaceHolder.storyName = 'Normal With Placeholder';
MultiSelectBoxComponentWithPlaceHolder.args = {
	options: adpushupDropdownDataFormat,
	placeHolder: 'All',
};

export const MultiSelectBoxComponentWithHover = Template.bind({});
MultiSelectBoxComponentWithHover.storyName = ':hover';
MultiSelectBoxComponentWithHover.args = {
	options: adpushupDropdownDataFormat,
	placeHolder: 'With Hover Enabled',
};

MultiSelectBoxComponentWithHover.parameters = {
	pseudo: {
		hover: true,
	},
};

export const MultiSelectBoxComponentWithDefaultAndDisabled = Template.bind({});
MultiSelectBoxComponentWithDefaultAndDisabled.storyName = 'With Default and Disabled Item';
MultiSelectBoxComponentWithDefaultAndDisabled.args = {
	options: [...adpushupDropdownDataFormatWithDefaultSelection, disabledItem],
	placeHolder: 'All',
};

export const MultiSelectBoxComponentWithMultipleDefaultItems = Template.bind({});
MultiSelectBoxComponentWithMultipleDefaultItems.storyName = 'With Multiple Default Selection';
MultiSelectBoxComponentWithMultipleDefaultItems.args = {
	options: adpushupDropdownDataFormatWithMultipleDefaultSelections,
	placeHolder: 'All',
};

export const MultiSelectBoxComponentTypeChevron = Template.bind({});
MultiSelectBoxComponentTypeChevron.storyName = 'Type Chevron';
MultiSelectBoxComponentTypeChevron.args = {
	options: adpushupDropdownDataFormat,
	type: 'chevron',
	placeHolder: 'All',
};

export const MultiSelectBoxComponentTypeChevronLight = Template.bind({});
MultiSelectBoxComponentTypeChevronLight.storyName = 'Type Chevron Light';
MultiSelectBoxComponentTypeChevronLight.args = {
	options: adpushupDropdownDataFormat,
	type: 'chevron-light',
	placeHolder: 'All',
};

export const MultiSelectBoxComponentTypeChevronWithGroup = Template.bind({});
MultiSelectBoxComponentTypeChevronWithGroup.storyName = 'Type Chevron with Default Selection';
MultiSelectBoxComponentTypeChevronWithGroup.args = {
	options: [...adpushupDropdownDataFormatWithDefaultSelection],
	type: 'chevron',
	placeHolder: 'With Default Selection',
};

export const MultiSelectBoxComponentTypeChevronLightWithGroup = Template.bind({});
MultiSelectBoxComponentTypeChevronLightWithGroup.storyName =
	'Type Chevron Light with Default and Disabled Item';
MultiSelectBoxComponentTypeChevronLightWithGroup.args = {
	options: [...adpushupDropdownDataFormatWithDefaultSelection, disabledItem],
	type: 'chevron-light',
	placeHolder: 'All',
};
