import React from 'react';
import Checkbox from '../Checkbox';
import { StyledListItem } from './MultiSelect.style';

const ListItem = ({ value, disabled, selected, ...props }) => {
	return (
		<StyledListItem.Container {...props}>
			<Checkbox disabled={disabled} checked={selected} />
			<StyledListItem.Text>{value}</StyledListItem.Text>
		</StyledListItem.Container>
	);
};

export default ListItem;
