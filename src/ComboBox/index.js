import React, { useMemo, useRef, Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { FaChevronDown } from 'react-icons/fa';

import ListItem from './ListItem';
import GroupHeading from './GroupHeading';
import { parseNestedOptions } from './helper';
import { comparator } from '../helpers/utils';

import StyledComboBoxContainer, {
	StyledComboBox,
	FlexContainer,
	StyledComboBoxButtonIcons,
} from './ComboBox.style';

export default function ComboBox({ options = [], placeHolder = 'Select All' }) {
	const refListButton = useRef(null); // DOM ref for List Button
	const refList = useRef(null); // DOM ref for List Container
	const refInput = useRef(null); // DOM ref for List Input

	// parse combobox input - nested options
	const parsedOptions = useMemo(() => parseNestedOptions(options));

	// sort items by position mentioned in the option list provided
	const sortedOptions = useMemo(() => comparator(parsedOptions, 'position'), [parsedOptions]);

	const getDefault = () => sortedOptions.find((option) => option.isDefault) || [];

	// get and set default value if any
	const [selectedItem, setSelectedItem] = useState(getDefault);

	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');

	// filter out matching items based on search input
	const filteredParsedOptions =
		query === ''
			? parsedOptions
			: parsedOptions.filter((option) => {
					return ((option && option.value) || '')
						.toLowerCase()
						.includes(query.toLowerCase());
			  });

	// handler when an item is selected
	const handleSelect = (item) => {
		setSelectedItem(item);
		setIsOpen(!isOpen);
	};

	// close list container when clicked outside
	const handleClickOutside = (e) => {
		const isChildOfInput = refInput.current && refInput.current.contains(e.target);
		const isChildOfList = refList.current && refList.current.contains(e.target);
		if (isChildOfInput === false && isChildOfList === false) {
			setIsOpen(false);
		}
	};
	// handler to close the list container when clicked outside of List container
	useOnClickOutside(refListButton, handleClickOutside);

	return (
		<Combobox value={selectedItem} onChange={handleSelect} open={isOpen} nullable>
			{() => (
				<StyledComboBoxContainer>
					<FlexContainer>
						{/* Styled Combobox.Input */}
						<StyledComboBox.Input
							ref={refInput}
							placeholder={placeHolder}
							displayValue={(selectedItem) =>
								(selectedItem && selectedItem.value) || ''
							}
							onChange={(event) => setQuery(event.target.value || '')}
							onClick={() => {
								// trigger open the list container when clicked on input box
								setIsOpen(true);
							}}
						/>
						{/* Styled Combobox.Button */}
						<StyledComboBox.Button ref={refListButton}>
							<StyledComboBoxButtonIcons.ChevronLight
								$open={isOpen}
								onClick={() => {
									// force click inout box to trigger open the list container when clicked on icon
									refInput.current.click();
								}}
							>
								<FaChevronDown />
							</StyledComboBoxButtonIcons.ChevronLight>
						</StyledComboBox.Button>
					</FlexContainer>

					<Transition
						show={isOpen}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{/* Styled Combobox.Options */}
						<StyledComboBox.Options ref={refList}>
							{filteredParsedOptions.map((option) => {
								const { type, isDisabled, count, display_name } = option;

								return (
									<>
										{type && <GroupHeading type={type} count={count} />}
										{/* Styled Combobox.Option */}
										<StyledComboBox.Option
											key={option}
											value={option}
											disabled={isDisabled}
										>
											{({ active = false }) => (
												<ListItem
													active={active}
													disabled={isDisabled}
													selected={
														selectedItem &&
														selectedItem.value === option.value
													}
													value={display_name}
												/>
											)}
										</StyledComboBox.Option>
									</>
								);
							})}
						</StyledComboBox.Options>
					</Transition>
				</StyledComboBoxContainer>
			)}
		</Combobox>
	);
}
