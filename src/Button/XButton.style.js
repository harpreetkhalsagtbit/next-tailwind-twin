import tw, { styled } from 'twin.macro';

const defaultButtonStyle = tw`
	rounded
	text-sm
	px-5
	py-2
	hover:shadow-lg
`;

const primary = tw`
	text-white
	bg-adp-red
	inline-block
`;

const secondary = tw`
	bg-transparent
	border
	border-adp-red
	text-adp-red 
`;

const tertiary = tw`
	bg-transparent
	border
`;

const StyledButton = styled.button(({ variant, size }) => [
	defaultButtonStyle,
	variant === 'primary' && primary,
	variant === 'secondary' && secondary,
	variant === 'tertiary' && tertiary,
	size === 'small' &&
		tw`
			px-5
			py-2
    `,
	size === 'large' &&
		tw`
			px-6
			py-3
    `,
	size === 'text-large' &&
		tw`
		    text-lg
    `,
]);

export const StyledButtonPrimary = styled(StyledButton)(secondary);

export default StyledButton;
