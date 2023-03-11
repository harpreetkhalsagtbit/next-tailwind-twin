import React from 'react';

import Toggle from '../index';

export default {
	title: 'Toggle/Default',
	component: Toggle,
	argTypes: {},
};

const Template = (args) => <Toggle {...args} />;
export const ToggleComponent = Template.bind({});
ToggleComponent.args = {
	checked: false
};


export const DisabledToggleComponent = Template.bind({});
DisabledToggleComponent.args = {
	checked: false,
	disabled:true
};


export const DisabledAndCheckedToggleComponent = Template.bind({});
DisabledAndCheckedToggleComponent.args = {
	checked: true,
	disabled:true
};
