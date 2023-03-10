export const adpushupDropdownDataFormat = [
	{
		display_name: 'Daily',
		name: 'Daily',
		position: 1,
		value: 'daily',
	},
	{
		display_name: 'Monthly',
		name: 'Monthly',
		position: 2,
		value: 'monthly',
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

export const disabledItem = {
	display_name: 'Cumulative (Disabled)',
	isDisabled: true,
	name: 'Cumulative Disabled',
	position: 3,
	value: 'cumulative',
};

export const adpushupDropdownDataFormatWithDefaultSelection = [
	{
		display_name: 'Daily',
		name: 'Daily',
		position: 1,
		value: 'daily',
	},
	{
		isDefault: true,
		display_name: 'Monthly',
		name: 'Monthly',
		position: 2,
		value: 'monthly',
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

export const adpushupDropdownDataFormatWithMultipleDefaultSelections = [
	{
		display_name: 'Daily',
		name: 'Daily',
		position: 1,
		value: 'daily',
	},
	{
		isDefault: true,
		display_name: 'Monthly',
		name: 'Monthly',
		position: 2,
		value: 'monthly',
	},
	{
		isDefault: true,
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

export const nestedOptions = [
	{
		id: 0,
		options: [
			{ id: 0, value: 'Today' },
			{ id: 1, value: 'Yesterday' },
		],
		label: 'Heading 1',
	},
	{
		id: 1,
		options: [
			{ id: 2, value: 'Last 7 Days', isDisabled: true },
			{ id: 3, value: 'Last 30 Days' },
			{ id: 4, value: 'Custom Date Range' },
		],
		label: 'Heading 2',
	},
];
