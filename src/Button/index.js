import React from 'react';
import StyledButton, { StyledSpanContainerForIcon } from './Button.style';

function Button({ children, ...props }) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export const IconButton = ({ text, icon, left = false, ...props }) => {
	return (
		<StyledButton left={left} {...props}>
			{text && <StyledSpanContainerForIcon left={left}>{text}</StyledSpanContainerForIcon>}
			{typeof icon === 'function' ? icon() : icon}
		</StyledButton>
	);
};

export default Button;
