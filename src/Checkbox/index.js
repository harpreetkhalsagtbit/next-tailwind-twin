import React, { useState } from 'react';

const Checkbox = ({ onChange, ...props }) => {
	const [checked, setChecked] = useState(props.checked);

	const handleChange = () => {
		setChecked(!checked);
		if (onChange && typeof onChange === 'function') {
			onChange(checked);
		}
	};

	return <input type="checkbox" checked={checked} onChange={handleChange} {...props} />;
};

export default Checkbox;
