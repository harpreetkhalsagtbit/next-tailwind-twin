import React from 'react';
import { StyledComboBoxListItem } from './ComboBox.style';

const ListItem = ({ value, ...props }) => {
	return (
		<StyledComboBoxListItem.Container {...props}>
			<StyledComboBoxListItem.Text>{value}</StyledComboBoxListItem.Text>
		</StyledComboBoxListItem.Container>
	);
};

export default ListItem;
