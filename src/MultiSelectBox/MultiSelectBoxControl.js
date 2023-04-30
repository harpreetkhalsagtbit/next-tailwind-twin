import React from 'react';
import { Controller } from 'react-hook-form';

import MultiSelectBox from './MultiSelectBoxComponent';

// For React Hook Form only
const MultiSelectBoxControl = ({
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
				<MultiSelectBox
					{...formRegisterProps}
					onChange={(selectedValues) => {
						// onChange's arg will send value into hook form
						onChange(selectedValues);
					}}
					{...props}
				></MultiSelectBox>
			);
		}}
		name={name}
		control={formControl}
		defaultValue={defaultValue}
	/>
);

export default MultiSelectBoxControl;
