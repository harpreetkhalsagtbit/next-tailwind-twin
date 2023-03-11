import React from 'react';
import { StyledListItem } from './Dropdown.style';

const ListItem = ({ value, ...props }) => {
	return (
		<StyledListItem.Container {...props}>
			<StyledListItem.Text>{value}</StyledListItem.Text>
		</StyledListItem.Container>
	);
};

export default ListItem;
