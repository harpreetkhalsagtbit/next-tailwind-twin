import tw, { styled } from 'twin.macro';
import { Combobox } from '@headlessui/react';

const defaultDropdownStyle = tw`
    relative
    border-none

    h-9
    w-full
`;
/** Combobox Main Container Style */
const StyledComboBoxContainer = styled.div(() => [defaultDropdownStyle]);
export default StyledComboBoxContainer;

/** List Item Styles */
const comboBoxStyle = tw`
    flex
    items-center
    py-0.5
    px-3

    border-none
    text-adp-list-text
`;
const comboBoxHoverStyle = tw`
    bg-gray-100
`;
const comboBoxSelectedStyle = tw`
    text-white
    bg-adp-list-highlight
`;
const comboBoxDisabledStyle = tw`
    text-adp-list-disabled
`;
const StyledComboBoxListContainer = styled.div(({ active, selected, disabled }) => [
	comboBoxStyle,
	active && comboBoxHoverStyle,
	selected && comboBoxSelectedStyle,
	disabled && comboBoxDisabledStyle,
]);
/** List Item Text Styles */
const comboBoxTextStyle = tw`
`;
const StyledListItemText = styled.span(() => [comboBoxTextStyle]);

export const StyledComboBoxListItem = {
	Container: StyledComboBoxListContainer,
	Text: StyledListItemText,
};

/** Group Heading Styles */
const groupHeadingContainerStyle = tw`
    flex
    items-center
    mb-2
    mx-3
    text-xs

    border-0
    border-b-2
    border-solid
    border-adp-primary-active
`;
const StyledGroupHeadingContainer = styled.div(() => [groupHeadingContainerStyle]);

const groupTextStyle = tw`
    uppercase
    text-adp-primary-active
    m-0
`;
const StyledGroupTextContainer = styled.p(() => [groupTextStyle]);

const groupCountCircleStyle = tw`
    ml-2
    flex
    justify-center
    items-center
    border
    rounded-full
    bg-adp-primary-active

    text-white
    py-0.5
    px-1.5
    mb-0.5
    w-fit
    h-fit
`;
const StyledGroupCountCircle = styled.div(() => [groupCountCircleStyle]);

export const StyledGroupHeading = {
	Container: StyledGroupHeadingContainer,
	Text: StyledGroupTextContainer,
	CountCircle: StyledGroupCountCircle,
};

/** List Control Icon Style */
const chevronLightListContrlIconStyle = tw`
    text-adp-list-active
    border-0
    border-l
    border-solid
    border-adp-list-active
    px-2
`;
const openChevronLightListControlIconStyle = tw`
    !border-adp-list-chevron-hover
    !text-adp-list-chevron-active
`;
const StyledChevronLightListIconControl = styled.div(({ $open }) => [
	$open && openChevronLightListControlIconStyle,
	chevronLightListContrlIconStyle,
]);

export const StyledComboBoxButtonIcons = {
	ChevronLight: StyledChevronLightListIconControl,
};

/** Combobox Inputbox Style */
const comboBoxInputStyle = tw`
    border-none
    rounded
    py-1
    px-3
    h-combobox-input

    text-sm
    text-adp-list-text
    w-full
`;
const StyledComboBoxInput = styled(Combobox.Input)(() => [comboBoxInputStyle]);

/** List Combobox Option Style Container */
const StyledComboBoxOption = styled(Combobox.Option)(({ disabled }) => [
	tw`
        list-none
    `,
	disabled &&
		tw`
            text-adp-list-disabled
        `,
]);

/** Combobox Button Style */
const comboBoxButtonStyle = tw`
    absolute
    inset-y-0
    right-0
    flex
    items-center

    border-0
    bg-white
    p-0
    m-0.5
`;
const StyledComboBoxButton = styled(Combobox.Button)(() => [comboBoxButtonStyle]);

/** Combobox Options Container Style */
const optionsContainerStyle = tw`
    z-50
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
    text-adp-list-text
`;
const StyledComboBoxOptions = styled(Combobox.Options)(() => [optionsContainerStyle]);

// for better naming convention
// styling all the ComboBox child component using a single main object
// to resemble normal usage of the component without styles
export const StyledComboBox = {
	Button: StyledComboBoxButton, // ComboBox.Button
	Options: StyledComboBoxOptions, // ComboBox.Options
	Option: StyledComboBoxOption, // ComboBox.Option
	Input: StyledComboBoxInput, // ComboBox.Input
};

export const FlexContainer = styled.div(() => [
	tw`
        flex
        items-center
        justify-center
        rounded

        border
        border-solid
        border-adp-list-active

        hover:border-adp-list-hover
    `,
]);
