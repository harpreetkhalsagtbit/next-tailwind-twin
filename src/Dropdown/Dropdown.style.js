import tw, { styled } from 'twin.macro';
import { Listbox } from '@headlessui/react';

const defaultDropdownStyle = tw`
    rounded
    relative
    border
    border-solid
    border-adp-list-active

    w-full
    hover:border-adp-list-hover
`;

/** List Main Container */
const StyledDropdownContainer = styled.div(() => [defaultDropdownStyle]);
export default StyledDropdownContainer;

/** List Button Text Container Style */
const listButtonTextContainerStyle = tw`
    flex
    items-center
`;
const StyledListTextContainerStyle = styled.span(() => [listButtonTextContainerStyle]);

/** List Button Icon Container Style */
const listButtonIconContainerStyle = tw`
    inset-y-0
    right-0
    flex
    items-center
`;
const StyledListIconContainerStyle = styled.span(() => [listButtonIconContainerStyle]);

export const StyledListButtonContainer = {
	TextContainer: StyledListTextContainerStyle,
	IconContainer: StyledListIconContainerStyle,
};

/** List Item Style */
const listItemStyle = tw`
    flex
    items-center
    py-1.5
    border-none
    text-adp-list-text
    px-3
`;
const listItemHoverStyle = tw`
    bg-gray-100
`;
const listItemSelectedStyle = tw`
    text-white
    bg-adp-list-highlight
`;
const listItemDisabledStyle = tw`
    text-adp-list-disabled
`;
const ListItemContainer = styled.div(({ active, selected, disabled }) => [
	listItemStyle,
	active && listItemHoverStyle,
	selected && listItemSelectedStyle,
	disabled && listItemDisabledStyle,
]);
/** Styled List Item Text */
const ListItemText = styled.span(() => [
	tw`
    block
`,
]);
export const StyledListItem = {
	Container: ListItemContainer,
	Text: ListItemText,
};

/** List Button Styles */
const listButtonStyle = tw`
    flex
    justify-between
    items-center

    w-full
    px-5
    py-1.5
    text-sm
    text-adp-list-text

    rounded
    bg-white

    border-0
    bg-white

    hover:shadow-adp
    hover:bg-adp-secondary
    hover:border-adp-list-border
`;
const openContainerStyle = tw`
    !bg-adp-list-active
    !border-adp-list-border
    !shadow-none
`;
const StyledListButton = styled(Listbox.Button)(({ $open }) => [
	listButtonStyle,
	$open && openContainerStyle,
]);

/** List Box Container Style */
const optionsContainerStyle = tw`
    z-10
    absolute
    p-0

    border
    border-solid
    border-adp-list-active

    right-0
    mt-1
    w-full
    bg-white
    shadow-lg
    rounded-md
    py-1
    text-sm
    min-w-max
`;
const StyledListOptions = styled(Listbox.Options)(() => [optionsContainerStyle]);

/** List Item Container Style */
const StyledListOption = styled(Listbox.Option)(() => [
	tw`
        relative
        list-none
    `,
]);

// for better naming convention
// styling all the Listbox child component using a single main object
// to resemble normal usage of the component without styles
export const StyledListbox = {
	Button: StyledListButton, // Listbox.Button
	Options: StyledListOptions, // Listbox.Options
	Option: StyledListOption, // Listbox.Option
};
