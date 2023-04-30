import React from 'react';
import { Controller } from 'react-hook-form';

import DropDown from './DropdownComponent';

// For React Hook Form only
const DropdownControl = ({
	options = [],
	name,
	placeHolder,
	defaultValue,
	// react hook form specific props
	formRegisterProps,
	formControl,
}) => (
	<Controller
		render={({ field: { onChange, value } }) => {
			const props = {
				placeholder: placeHolder,
				options,
				value,
				defaultValue,
			};
			return (
				<DropDown
					{...formRegisterProps}
					onChange={(selectedValue) => {
						// onChange's arg will send value into hook form
						onChange(selectedValue);
					}}
					{...props}
				></DropDown>
			);
		}}
		name={name}
		control={formControl}
		defaultValue={defaultValue}
	/>
);

export default DropdownControl;
