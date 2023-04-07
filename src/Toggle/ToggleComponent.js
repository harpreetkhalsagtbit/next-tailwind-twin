import React, { useState } from 'react';

import { StyledSwitch, StyledToggle } from './Toggle.style';

const Toggle = ({ checked = false, onChange, ...props }) => {
	const [enabled, setEnabled] = useState(checked);
	const onToggle = (value) => {
		if (onChange && typeof onChange === 'function') {
			onChange(value);
		}
		setEnabled(value);
	};
	return (
		<StyledSwitch checked={enabled} onChange={onToggle} enabled={enabled} {...props}>
			<StyledToggle.BodyWrapper>
				<StyledToggle.SupportingElementsContainer>
					{/* to maintain proper spacing between options kepping the span in dom and removing their content*/}
					<StyledToggle.SupportingElement>
						{enabled ? 'No' : ''}
					</StyledToggle.SupportingElement>
					<StyledToggle.SupportingElement>
						{!enabled ? 'Yes' : ''}
					</StyledToggle.SupportingElement>
				</StyledToggle.SupportingElementsContainer>
				<StyledToggle.MainToggleElement aria-hidden="true" enabled={enabled}>
					{!enabled ? 'No' : 'Yes'}
				</StyledToggle.MainToggleElement>
			</StyledToggle.BodyWrapper>
		</StyledSwitch>
	);
};

export default Toggle;
