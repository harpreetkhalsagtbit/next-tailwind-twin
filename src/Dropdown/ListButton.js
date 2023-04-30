import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { StyledListButtonContainer } from './Dropdown.style';

const ListButton = ({ value, placeHolder }) => {
	return (
		<>
			<StyledListButtonContainer.TextContainer>
				{value || placeHolder}
			</StyledListButtonContainer.TextContainer>
			<StyledListButtonContainer.IconContainer>
				<FaCaretDown></FaCaretDown>
			</StyledListButtonContainer.IconContainer>
		</>
	);
};

export default ListButton;
