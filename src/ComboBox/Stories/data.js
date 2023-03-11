export const nestedOptions = [
	{
		type: 'apLite',
		options: [
			{ display_name: 'Today', value: 'Today' },
			{ display_name: 'Yesterday', value: 'Yesterday' },
		],
		display_name: 'Ap Lite',
	},
	{
		type: 'layout',
		options: [
			{
				display_name: 'Last 7 Days',
				value: '24aed3e5-a376-4a96-bf0a-fa3a3f1c70a3',
			},
			{ display_name: 'Last 30 Days', value: 'Last 30 Days' },
			{ display_name: 'Custom Date Range', value: 'Custom Date Range' },
		],
		display_name: 'Layout',
	},
];

export const nestedOptions2 = [
	{
		type: 'apLite',
		options: [
			{ display_name: 'Today', value: 'Today' },
			{ display_name: 'Yesterday', value: 'Yesterday' },
		],
		display_name: 'Ap Lite',
	},
	{
		type: 'layout',
		options: [
			{
				display_name: 'Last 7 Days',
				value: '24aed3e5-a376-4a96-bf0a-fa3a3f1c70a3',
			},
			{ display_name: 'Last 30 Days', value: 'Last 30 Days', isDefault: true },
			{ display_name: 'Custom Date Range', value: 'Custom Date Range' },
		],
		display_name: 'Layout',
	},
];

export const nestedOptions3 = [
	{
		type: 'apLite',
		options: [
			{ display_name: 'Today', value: 'Today' },
			{ display_name: 'Yesterday', value: 'Yesterday' },
		],
		display_name: 'Ap Lite',
	},
	{
		type: 'layout',
		options: [
			{
				display_name: 'Last 7 Days',
				value: '24aed3e5-a376-4a96-bf0a-fa3a3f1c70a3',
				isDisabled: true,
			},
			{ display_name: 'Last 30 Days', value: 'Last 30 Days', isDefault: true },
			{ display_name: 'Custom Date Range', value: 'Custom Date Range' },
		],
		display_name: 'Layout',
	},
];