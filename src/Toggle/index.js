import React, { useState } from 'react';

import { StyledSwitch, StyledToggle } from './Toggle.style';

function Toggle({ checked = false, ...props }) {
	const [enabled, setEnabled] = useState(checked);

	return (
		<StyledSwitch checked={enabled} onChange={setEnabled} enabled={enabled} {...props}>
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
}

export default Toggle;
