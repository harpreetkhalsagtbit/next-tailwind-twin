import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function DropDown({
	options = [{ id: 0, value: 'All' }],
	onChange,
	selectedIndex = 0,
}) {
	const [selected, setSelected] = useState(options[selectedIndex]);
	function onListBoxChange(index) {
		setSelected(index);
		onChange(index);
	}
	return (
		<Listbox value={selected.value} onChange={onListBoxChange}>
			{({ open }) => (
				<>
					<div className="relative">
						<Listbox.Button className="relative w-full bg-white border border-gray-300 rounded hover:shadow-lg pl-2 pr-10 py-2 focus:bg-gray-100 text-sm">
							<span className="flex items-center">
								<span className="ml-3">{selected.value}</span>
							</span>
							<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 ">
								<FaCaretDown></FaCaretDown>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="z-10 absolute border right-0 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-sm min-w-max">
								{options.map((option) => (
									<Listbox.Option
										key={option.id}
										value={option}
										className={({ active, selected }) =>
											classNames(
												selected
													? 'text-white bg-accent-blue'
													: active
													? 'bg-gray-100'
													: 'text-gray-700',
												'relative pl-3 pr-9'
											)
										}
									>
										<>
											<div className="flex items-center py-0.5">
												<span className="ml-3 block">{option.value}</span>
											</div>
										</>
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
