import React from 'react';
import { FaDownload, FaBell } from 'react-icons/fa';

import Button, { IconButton } from '../index';

export default {
	title: 'Buttons/Secondary',
	component: Button,
	argTypes: {},
};

const Template = (args) => <Button secondary {...args} />;
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	children: 'Secondary',
	disabled: false,
};

const IconButtonTemplate = (args) => <IconButton secondary {...args} />;
export const IconButtonWidget = IconButtonTemplate.bind({});
IconButtonWidget.storyName = 'Icon Button';
IconButtonWidget.args = {
	icon: FaDownload,
	disabled: false,
};

export const IconButtonWidgetWithText = IconButtonTemplate.bind({});
IconButtonWidgetWithText.storyName = 'Icon Button with Text';
IconButtonWidgetWithText.args = {
	text: 'Button',
	icon: FaBell,
	left: true,
};

const FullWidthTemplate = (args) => <Button secondary {...args} />;
export const FullWidthButton = FullWidthTemplate.bind({});
FullWidthButton.storyName = 'Full-width Button';
FullWidthButton.args = {
	children: 'Save',
	wide: true,
};

const FullWidthIconTemplate = (args) => <IconButton secondary {...args} />;
export const IconButtonWideWidgetWithText = FullWidthIconTemplate.bind({});
IconButtonWideWidgetWithText.storyName = 'Full-width Icon Button with Text';
IconButtonWideWidgetWithText.args = {
	text: 'Button',
	icon: FaBell,
	wide: true,
};

export const IconButtonWideDisabledWidgetWithText = FullWidthIconTemplate.bind({});
IconButtonWideDisabledWidgetWithText.storyName = 'Disabled and Full-width Icon Button with Text';
IconButtonWideDisabledWidgetWithText.args = {
	text: 'Button',
	icon: FaBell,
	wide: true,
	disabled: true,
};

export const Focused = Template.bind({});
Focused.storyName = ':focused';
Focused.args = {
	children: 'Focused',
};

Focused.parameters = {
	pseudo: {
		focus: true,
	},
};

export const Active = Template.bind({});
Active.storyName = ':active';
Active.args = {
	children: 'Active',
};

Active.parameters = {
	pseudo: {
		active: true,
	},
};

export const Hover = Template.bind({});
Hover.storyName = ':hover';
Hover.args = {
	children: 'Hover',
};

Hover.parameters = {
	pseudo: {
		hover: true,
	},
};

export const Disabled = Template.bind({});
Disabled.storyName = ':disabled';
Disabled.args = {
	children: 'Save',
	disabled: true,
};

export const DisabledIconButtonWidget = IconButtonTemplate.bind({});
DisabledIconButtonWidget.storyName = 'Disabled Icon Button';
DisabledIconButtonWidget.args = {
	icon: FaDownload,
	disabled: true,
};
