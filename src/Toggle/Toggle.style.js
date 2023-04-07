import tw, { styled, css } from 'twin.macro';
import { Switch } from '@headlessui/react';

const defaultSwitch = tw`
     rounded-sm
     relative
     inline-flex
     items-center

     p-0
     w-[100px]

     shrink-0
     cursor-pointer

     border
     border-transparent

     transition-colors
     duration-200
     ease-in-out
     focus:outline-none

     focus-visible:ring-2     
     focus-visible:ring-white
     focus-visible:ring-opacity-75

	cursor-pointer

     disabled:opacity-30
	disabled:cursor-not-allowed
`;
const enabledStyle = tw`
     bg-adp-green
`;

const disabledStyle = tw`
     bg-adp-toggle-gray
`;

export const StyledSwitch = styled(Switch)(({ enabled }) => [
	defaultSwitch,
	enabled ? enabledStyle : disabledStyle,
]);

const toggleBodyWrapper = tw`
     text-xs
`;

const StyledToggleBodyWrapper = styled.div(() => [toggleBodyWrapper]);

const supportingElementsContainer = tw`
     h-6
     absolute
     w-full
     flex
     justify-between
     text-white
`;

const StyledSupportingElements = styled.div(() => [supportingElementsContainer]);

const supportingElement = tw`
     flex
     justify-center
     items-center
     w-6/12
`;

const StyledSupportingElement = styled.span(() => [supportingElement]);

const mainToggleElement = tw`
     rounded-sm
     flex
     justify-center
     items-center

     h-6
     z-10

     pointer-events-none
     inline-block

     bg-white
     w-[50px]

     transform
     transition
     duration-100
     ease-in-out
`;

const enabledMainToggleElement = tw`
     text-adp-green
`;
const disabledMainToggleElement = tw`
     text-adp-toggle-gray
`;
const StyledMainToggleElement = styled.span(({ enabled }) => [
	mainToggleElement,
	enabled ? enabledMainToggleElement : disabledMainToggleElement,
	// tailwind trnasofmr is not working with storybook - added css style here
	enabled
		? css`
				transform: translateX(3rem);
		  `
		: css`
				transform: translateX(0px);
		  `,
]);

export const StyledToggle = {
	BodyWrapper: StyledToggleBodyWrapper,
	SupportingElementsContainer: StyledSupportingElements,
	SupportingElement: StyledSupportingElement,
	MainToggleElement: StyledMainToggleElement,
};
