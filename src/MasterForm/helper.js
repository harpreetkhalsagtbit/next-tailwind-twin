import InputText from '../../../components/commons/Input';
import { ToggleControl } from '../../../components/commons/Toggle';
import { DropdownControl } from '../../../components/commons/Dropdown';
import { MultiSelectBoxControl } from '../../../components/commons/MultiSelectBox';
import { ComboBoxControl } from '../../../components/commons/ComboBox';

import { StyledFlexLayout } from '../../../components/Layouts/Columns.style';

const options = [
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
		isDefault: true,
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

const adpushupDropdownDataFormat = [
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
		display_name: 'Cumulative Disabled',
		isDisabled: true,
		name: 'Cumulative',
		position: 3,
		value: 'cumulative',
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
		isDefault: true,
	},
];

const nestedOptions = [
	{
		type: 'apLite',
		options: [
			{ display_name: 'Today', value: 'Today', isDefault: true },
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
				isDisabled: false,
			},
			{ display_name: 'Last 30 Days', value: 'Last 30 Days' },
			{ display_name: 'Custom Date Range', value: 'Custom Date Range' },
		],
		display_name: 'Layout',
	},
];

export const renderFormElements = ({
	name,
	type,
	placeHolder,
	widgetOptions,
	register,
	errors,
	errorMessage,
	commonProps,
}) => {
	console.log(type, 'type');
	switch (type) {
		case 'input': {
			return (
				<StyledFlexLayout>
					<label>{placeHolder || name}</label>
					<InputText
						placeholder={placeHolder}
						{...register(name, widgetOptions)}
						// aria-invalid={errors.firstName ? 'true' : 'false'}
					></InputText>
					<span>{errors[name]?.type === 'required' && errorMessage}</span>
				</StyledFlexLayout>
			);
		}
		case 'dropdown': {
			return (
				<StyledFlexLayout>
					<label>{placeHolder || name}</label>
					<DropdownControl options={options} {...commonProps}></DropdownControl>
					<span>{errors[name]?.type === 'required' && errorMessage}</span>
				</StyledFlexLayout>
			);
		}
		case 'MultiSelectBox': {
			return (
				<StyledFlexLayout>
					<label>{placeHolder || name}</label>
					<MultiSelectBoxControl
						options={adpushupDropdownDataFormat}
						{...commonProps}
					></MultiSelectBoxControl>
					<span>{errors[name]?.type === 'required' && errorMessage}</span>
				</StyledFlexLayout>
			);
		}
		case 'ComboBox': {
			return (
				<StyledFlexLayout>
					<label>{placeHolder || name}</label>
					<ComboBoxControl options={nestedOptions} {...commonProps}></ComboBoxControl>
					<span>{errors[name]?.type === 'required' && errorMessage}</span>
				</StyledFlexLayout>
			);
		}
		case 'toggle': {
			return (
				<StyledFlexLayout row>
					<ToggleControl options={options} {...commonProps}></ToggleControl>
					<label>{placeHolder || name}</label>
				</StyledFlexLayout>
			);
		}
	}
};
