import tw, { styled } from 'twin.macro';

const defaultButtonStyle = tw`
	flex
	justify-center
	items-center

	rounded
	text-sm
	px-5
	py-2
	cursor-pointer
	border-solid
`;

const primaryStyle = tw`
	text-white
	bg-adp-primary
	border-none

	hover:shadow-adp
	hover:border-adp-border

	active:bg-adp-primary-active
	active:shadow-none

	focus:bg-adp-primary-active
	focus:shadow-none

	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const secondaryStyle = tw`
	bg-white
	border
	border-adp-red
	text-adp-red 

	hover:bg-adp-secondary
	hover:shadow-adp

	active:bg-adp-secondary
	active:shadow-adp

	focus:bg-adp-secondary
	focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const tertiaryStyle = tw`
	bg-white
	border
	border-adp-tertiary
	text-adp-text-tertiary

	hover:bg-adp-secondary
	hover:shadow-adp

	active:bg-adp-secondary
	active:shadow-adp

	focus:bg-adp-secondary
	focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const quarternaryStyle = tw`
	bg-white
	border-none
	text-adp-text-tertiary

	hover:bg-adp-quarternary

	active:bg-adp-quarternary

	focus:bg-adp-quarternary

	disabled:bg-adp-quarternary
	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const fullWidthStyle = tw`
	w-full
`;

const ButtonType = ({ primary, secondary, tertiary, quarternary }) => [
	defaultButtonStyle,
	primary && primaryStyle,
	secondary && secondaryStyle,
	tertiary && tertiaryStyle,
	quarternary && quarternaryStyle,
	!primary && !secondary && !tertiary && !quarternary && primaryStyle, // default primary
];
const ButtonFullWidth = ({ wide = false }) => [wide && fullWidthStyle];

const iconRowReverse = tw`
	flex-row-reverse
`;
const IconButton = ({ left = false }) => [left && iconRowReverse];

const StyledButton = styled.button(() => [ButtonType, ButtonFullWidth, IconButton]);

const iconStyleLeft = tw`
	ml-1
`;
const iconStyleRight = tw`
	mr-1
`;
const IconAlignment = ({ left = false }) => [left ? iconStyleLeft : iconStyleRight];
export const StyledSpanContainerForIcon = styled.span(() => [IconAlignment]);

export default StyledButton;
