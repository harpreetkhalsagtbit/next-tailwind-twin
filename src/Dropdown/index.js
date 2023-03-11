import React from 'react';
import { Fragment, useState, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import ListItem from './ListItem';
import ListButton from './ListButton';
import { comparator } from '../helpers/utils';

import StyledDropdownContainer, { StyledListbox } from './Dropdown.style';

const DropDown = ({ options = [], onChange, placeHolder = 'Select All' }) => {
	// sort items by position mentioned in the option list provided
	const sortedOptions = useMemo(() => comparator(options, 'position'), [options]);

	const getDefault = () => sortedOptions.find((option) => option.isDefault) || {};
	// get and set default value if any
	const [selectedItem, setSelectedItem] = useState(getDefault);

	// Listbox change handler
	const onListBoxChange = (index) => {
		if (onChange && typeof onChange === 'function') {
			onChange(index);
		}
		setSelectedItem(index);
	};

	return (
		<Listbox value={selectedItem.value || ''} onChange={onListBoxChange}>
			{({ open }) => (
				<>
					<StyledDropdownContainer>
						{/* Styled - Listbox.Button */}
						<StyledListbox.Button $open={open}>
							<ListButton
								value={selectedItem.display_name}
								placeHolder={placeHolder}
							/>
						</StyledListbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							{/* Styled Listbox.Options */}
							<StyledListbox.Options>
								{sortedOptions.map((option) => {
									const { name, isDisabled, display_name = '' } = option;

									return (
										<>
											{/* Styled Listbox.Option */}
											<StyledListbox.Option
												key={name}
												value={option}
												disabled={isDisabled}
											>
												{({ active }) => (
													<ListItem
														active={active}
														selected={selectedItem.name === option.name}
														value={display_name}
														disabled={isDisabled}
													/>
												)}
											</StyledListbox.Option>
										</>
									);
								})}
							</StyledListbox.Options>
						</Transition>
					</StyledDropdownContainer>
				</>
			)}
		</Listbox>
	);
};

export default DropDown;
