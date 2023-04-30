import React from 'react';
import { Controller } from 'react-hook-form';

import Toggle from './ToggleComponent';
// For React Hook Form only
const ToggleControl = ({
	name,
	defaultValue,
	// react hook form specific props
	formRegisterProps,
	formControl,
}) => (
	<Controller
		render={({ field: { onChange } }) => {
			return (
				<Toggle
					{...formRegisterProps}
					checked={defaultValue}
					onChange={(value) => {
						// onChange's arg will send value into hook form
						onChange(value);
					}}
				></Toggle>
			);
		}}
		name={name}
		control={formControl}
		defaultValue={defaultValue}
	/>
);

export default ToggleControl;
