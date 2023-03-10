import tw, { styled, css } from 'twin.macro';
import { Listbox } from '@headlessui/react';
import { FaPlus } from 'react-icons/fa';

const defaultDropdownStyle = tw`
    rounded
    relative

    border
    border-solid
    border-adp-list-active

    w-full
    hover:border-adp-list-hover
`;
const StyledDropdownContainer = styled.div(() => [defaultDropdownStyle]);
export default StyledDropdownContainer;

const listItemStyle = tw`
    flex
    items-center
    py-1.5
    border-none
    text-adp-list-text
    pl-3
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

/** MultiSelect List Item Style */
const StyledListItemContainer = styled.div(({ active, selected, disabled }) => [
	listItemStyle,
	active && listItemHoverStyle,
	selected && listItemSelectedStyle,
	disabled && listItemDisabledStyle,
]);
/** MultiSelect List Item Text Style */
const StyledListItemText = styled.span(() => [listItemTextStyle]);

export const StyledListItem = {
	Container: StyledListItemContainer,
	Text: StyledListItemText,
};

const listItemTextStyle = tw`
    ml-2
`;

const listButtonContainerStyle = tw`
    flex
    items-center
`;

/** for ellipses in child in case of text overflow */
const listButtonTextOverflow = tw`
    overflow-hidden whitespace-nowrap
`;

/** MultiSelect Button Text Container Style */
const StyledListButtonTextContainer = styled.span(() => [
	listButtonContainerStyle,
	listButtonTextOverflow,
]);

const listControlIconContainerStyle = tw`
    inset-y-0
    right-0
    flex
    items-center

    overflow-ellipsis
`;

/** MultiSelect Button Icon Container Style */
const StyledListControlIconContainerStyle = styled.div(() => [listControlIconContainerStyle]);

/** MultiSelect Cross Icon Container Style */
const StyledListResetControlIconContainerStyle = styled(FaPlus)(() => [
	listResetControlIconContainerStyle,
	// tailwind rotate is not working with storybook - added css style here
	css`
		rotate: 45deg;
	`,
]);

export const StyledListButtonContainer = {
	TextContainer: StyledListButtonTextContainer,
	IconContainer: StyledListControlIconContainerStyle,
	ResetIcon: StyledListResetControlIconContainerStyle,
};

const listResetControlIconContainerStyle = tw`
    mx-2
    scale-75
`;

const normalListContrlIconStyle = tw`
    pr-5
`;
/** MultiSelect Normal Icon Container Style */
const StyledNormalListControlIconStyle = styled.div(() => [normalListContrlIconStyle]);

const chevronListContrlIconStyle = tw`
    pl-2
    pr-5
`;
/** MultiSelect Chevron Icon Container Style */
const StyledChevronListControlIconStyle = styled.div(() => [chevronListContrlIconStyle]);

const chevronLightListControlIconStyle = tw`
    text-adp-list-active
    border-0
    border-l-2
    border-solid
    border-adp-list-active
    pl-2
    pr-5

    hover:border-adp-list-chevron-hover
    hover:text-adp-list-chevron-hover
`;

const openChevronLightListControlIconStyle = tw`
    !border-adp-list-chevron-hover
    !text-adp-list-chevron-hover
`;

/** MultiSelect Chevron-Light Icon Container Style */
const StyledChevronLightListControlIconStyle = styled.div(({ $open }) => [
	$open && openChevronLightListControlIconStyle,
	chevronLightListControlIconStyle,
]);

export const ListButtonIcons = {
	Normal: StyledNormalListControlIconStyle,
	Chevron: StyledChevronListControlIconStyle,
	ChevronLight: StyledChevronLightListControlIconStyle,
};

const listButtonStyle = tw`
    flex
    justify-between
    items-center

    px-0
    w-full
    pl-5
    py-1.5
    text-sm
    rounded
    bg-white
    text-adp-list-text

    border-0
    bg-white


    hover:shadow-adp
    hover:bg-adp-secondary
`;

const openContainerStyle = tw`
    !bg-adp-list-active
    !border-adp-list-border
    !shadow-none
`;

/** MultiSelect Button Style */
const StyledListButton = styled(Listbox.Button)(({ $open }) => [
	listButtonStyle,
	$open && openContainerStyle,
]);

const optionsContainerStyle = tw`
    z-10
    p-0
    absolute

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

/** MultiSelect Option Container Style */
const StyledListOptions = styled(Listbox.Options)(() => [optionsContainerStyle]);

/** MultiSelect Option Style */
const StyledListBoxOption = styled(Listbox.Option)(() => [
	tw`
        relative
        list-none
    `,
]);

// for better naming convention
// styling all the Listbox child component using a single main object
// to resemble normal usage of the component without styles
export const StyledListBox = {
	Button: StyledListButton, // Listbox.Button
	Options: StyledListOptions, // Listbox.Options
	Option: StyledListBoxOption, // Listbox.Option
};
