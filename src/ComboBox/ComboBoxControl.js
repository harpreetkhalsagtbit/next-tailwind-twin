import React from 'react';
import { Controller } from 'react-hook-form';

import ComboBox from './ComboBoxComponent';

// For React Hook Form only
const ComboBoxControl = ({
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
				<ComboBox
					{...formRegisterProps}
					onChange={(selectedValue) => {
						// onChange's arg will send value into hook form
						onChange(selectedValue);
					}}
					{...props}
				></ComboBox>
			);
		}}
		name={name}
		control={formControl}
		defaultValue={defaultValue}
	/>
);

export default ComboBoxControl;
