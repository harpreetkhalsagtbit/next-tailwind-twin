import React from 'react';
import StyledTextArea from './TextArea.style';

export default function TextArea({ rows = '10', cols = '50', ...props }) {
	return <StyledTextArea rows={rows} cols={cols} {...props} />;
}
