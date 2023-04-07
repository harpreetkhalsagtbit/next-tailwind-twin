import React, { useRef, useMemo, Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';

import ListItem from './ListItem';
import ListButton from './ListButton';
import { comparator } from '../../../helpers/utils';

import StyledDropdownContainer, { StyledListBox } from './MultiSelect.style';

const MultiSelectBox = ({
	options = [],
	placeHolder = 'Select All',
	type = 'normal',
	onChange,
	defaultValue,
	...props
}) => {
	const refListButton = useRef(null); // DOM ref for List Button
	const refList = useRef(null); // DOM ref for List Container

	// sort items by position mentioned in the options
	const sortedOptions = useMemo(() => comparator(options, 'position'), [options]);

	// Note: need default item in an array
	const getDefault = () => defaultValue || sortedOptions.filter((option) => option.isDefault);

	// get and set default valuee if any
	// Note: we can have multiple default selected values
	const [selectedItem, setSelectedItem] = useState(getDefault);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (onChange && typeof onChange === 'function') {
			onChange(selectedItem);
		}
	}, [selectedItem]);

	// check if current list item is already selected
	const isSelected = (value) => !!selectedItem.find((item) => item === value);

	// handler when an item is selected
	const handleSelect = (value) => {
		const selectedItemUpdated = [
			// fresh selected from prev selection
			...selectedItem.filter((item) => item !== value),
		];

		if (!isSelected(value)) {
			// add new selection
			selectedItemUpdated.push(value);
			setSelectedItem(selectedItemUpdated);
		} else {
			handleDeselect(value);
		}

		setIsOpen(true);
	};

	// handler when an item is deselected
	const handleDeselect = (value) => {
		const selectedItemUpdated = selectedItem.filter((item) => item !== value);

		setSelectedItem(selectedItemUpdated);
		setIsOpen(true);
	};

	// handler to reset selcted list items
	const resetButtonHandler = (evt) => {
		evt.stopPropagation();

		setIsOpen(false);
		setSelectedItem(defaultValue);
	};

	// handler to close the list container when clicked outside of List container
	const handleClickOutside = (e) => {
		const isChildOfButton = refListButton.current && refListButton.current.contains(e.target);
		const isChildOfList = refList.current && refList.current.contains(e.target);
		if (isChildOfButton === false && isChildOfList === false) {
			setIsOpen(false);
		}
	};

	// custom hook to detect if clicked outside the list container
	useOnClickOutside(refListButton, handleClickOutside);

	return (
		<Listbox value={selectedItem.value} onChange={handleSelect} open={isOpen} {...props}>
			{() => (
				<StyledDropdownContainer>
					{/* Styled Listbox.Button */}
					<StyledListBox.Button
						ref={refListButton}
						$open={isOpen}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<ListButton
							type={type}
							isOpen={isOpen}
							selectedItem={selectedItem}
							placeHolder={placeHolder}
							resetButtonHandler={resetButtonHandler}
						/>
					</StyledListBox.Button>

					<Transition
						show={isOpen}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{/* Styled Listbox.Options */}
						<StyledListBox.Options ref={refList}>
							{options.map((option) => {
								const selected = isSelected(option);
								const { name, isDisabled, display_name = '' } = option;

								return (
									<>
										{/* Styled Listbox.Option */}
										<StyledListBox.Option
											key={name}
											value={option}
											disabled={isDisabled}
										>
											{({ active }) => (
												<ListItem
													active={active}
													selected={selected}
													value={display_name}
													disabled={isDisabled}
												/>
											)}
										</StyledListBox.Option>
									</>
								);
							})}
						</StyledListBox.Options>
					</Transition>
				</StyledDropdownContainer>
			)}
		</Listbox>
	);
};

export default MultiSelectBox;
