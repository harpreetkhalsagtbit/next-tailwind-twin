import React from 'react';

import Dropdown from '../index';
import {
	adpushupDropdownDataFormat,
	adpushupDropdownDataFormatWithDefaultSelection,
	disabledItem,
} from './data';

export default {
	title: 'Dropdown/Default',
	component: Dropdown,
	argTypes: {},
};

const Template = (args) => (
	<div style={{ width: '50%' }}>
		<Dropdown {...args} />
	</div>
);

export const DropdownComponentWithDefaultPlaceHolder = Template.bind({});
DropdownComponentWithDefaultPlaceHolder.storyName = 'Normal With default Placeholder';
DropdownComponentWithDefaultPlaceHolder.args = {
	options: adpushupDropdownDataFormat,
};

export const DropdownComponentWithPlaceHolder = Template.bind({});
DropdownComponentWithPlaceHolder.storyName = 'Normal With Placeholder';
DropdownComponentWithPlaceHolder.args = {
	options: adpushupDropdownDataFormat,
	placeHolder: 'All',
};

export const DropdownComponentWithHover = Template.bind({});
DropdownComponentWithHover.storyName = ':hover';
DropdownComponentWithHover.args = {
	options: adpushupDropdownDataFormat,
	placeHolder: 'With Hover Enabled',
};

DropdownComponentWithHover.parameters = {
	pseudo: {
		hover: true,
	},
};

export const DropdownComponentWithAdpushupDataFormat = Template.bind({});
DropdownComponentWithAdpushupDataFormat.storyName = 'With Disabled and Sorted Item';
DropdownComponentWithAdpushupDataFormat.args = {
	options: [...adpushupDropdownDataFormat, disabledItem],
	placeHolder: 'With disabled Item',
};

export const DropdownComponentWithDefaultItem = Template.bind({});
DropdownComponentWithDefaultItem.storyName = 'With Default Items';
DropdownComponentWithDefaultItem.args = {
	options: adpushupDropdownDataFormatWithDefaultSelection,
	placeHolder: 'With Default Items',
};

export const DropdownComponentWithDefaultAndDisabledItem = Template.bind({});
DropdownComponentWithDefaultAndDisabledItem.storyName = 'With Default and Disabled Items';
DropdownComponentWithDefaultAndDisabledItem.args = {
	options: [...adpushupDropdownDataFormatWithDefaultSelection, disabledItem],
	placeHolder: 'With Default and Disabled Items',
};
