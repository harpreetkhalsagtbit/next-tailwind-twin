import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ComboBox from '../index';
import { nestedOptions } from '../Stories/data';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { generateImage } from 'jsdom-screenshot';

expect.extend({ toMatchImageSnapshot });

describe('ComboBox Tests', () => {
	it('should render ComboBox', async () => {
		render(<ComboBox options={nestedOptions} placeHolder="All" />);
		let InputElement = screen.getByRole('combobox', { value: 'Today' });
		expect(InputElement).toBeInTheDocument();
		expect(InputElement.tagName).toBe('INPUT');
		expect(InputElement).toHaveStyle(`
			color: "rgb(85, 85, 85)";
		`);

		let ButtonElement = InputElement.nextElementSibling;
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.firstElementChild.tagName).toBe('svg');
		expect(ButtonElement).toHaveStyle(`
		    backgroundColor: "rgb(255, 255, 255)";
		`);
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
	});
	it('should change ComboBox Input on user actions', async () => {
		render(<ComboBox options={nestedOptions} placeHolder="All" />);
		let InputElement = screen.getByRole('combobox', { value: 'Today' });
		expect(InputElement).toBeInTheDocument();
		expect(InputElement.tagName).toBe('INPUT');
		expect(InputElement).toHaveStyle(`
			color: "rgb(85, 85, 85)";
		`);

		let ButtonElement = InputElement.nextElementSibling;
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.firstElementChild.tagName).toBe('svg');
		expect(ButtonElement).toHaveStyle(`
		    backgroundColor: "rgb(255, 255, 255)";
		`);
		act(() => {
			fireEvent.click(InputElement);
		});
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
		// dropdown opens after input is clicked
		const ListElement = ButtonElement.parentElement.nextElementSibling;
		expect(ListElement.tagName).toBe('UL');
		const firstType = ListElement.firstElementChild.firstElementChild;
		expect(firstType.innerHTML).toBe('apLite');
		const secondOption = ListElement.children[2].firstElementChild.firstElementChild;
		expect(secondOption.innerHTML).toBe('Yesterday');
		act(() => {
			fireEvent.click(secondOption);
		});
		expect(InputElement.value).toBe('Yesterday');
	});
	it('should change ComboBox List on user actions', async () => {
		render(<ComboBox options={nestedOptions} placeHolder="All" />);
		let InputElement = screen.getByRole('combobox', { value: 'Today' });
		expect(InputElement).toBeInTheDocument();
		expect(InputElement.tagName).toBe('INPUT');
		expect(InputElement).toHaveStyle(`
			color: "rgb(85, 85, 85)";
		`);

		let ButtonElement = InputElement.nextElementSibling;
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.firstElementChild.tagName).toBe('svg');
		expect(ButtonElement).toHaveStyle(`
		    backgroundColor: "rgb(255, 255, 255)";
		`);
		act(() => {
			fireEvent.click(InputElement);
		});
		// dropdown opens after input is clicked
		const ListElement = ButtonElement.parentElement.nextElementSibling;
		expect(ListElement.tagName).toBe('UL');
		const firstType = ListElement.firstElementChild.firstElementChild;
		expect(firstType.innerHTML).toBe('apLite');
		const secondOption = ListElement.children[2].firstElementChild.firstElementChild;
		expect(secondOption.innerHTML).toBe('Yesterday');
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
		act(() => {
			fireEvent.click(secondOption);
		});
		expect(InputElement.value).toBe('Yesterday');
		act(() => {
			fireEvent.click(InputElement);
		});
		expect(secondOption).toHaveStyle(`
		    backgroundColor: "rgb(51, 122, 184)";
		`);
		act(() => {
			fireEvent.click(secondOption);
		});
	});
});
