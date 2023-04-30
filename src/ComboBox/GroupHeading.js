import React from 'react';
import { StyledGroupHeading } from './ComboBox.style';

const GroupHeading = ({ type, count }) => {
	return (
		<StyledGroupHeading.Container>
			<StyledGroupHeading.Text>{type}</StyledGroupHeading.Text>
			{count > 0 ? (
				<StyledGroupHeading.CountCircle>{count}</StyledGroupHeading.CountCircle>
			) : (
				''
			)}
		</StyledGroupHeading.Container>
	);
};

export default GroupHeading;
