import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MultiSelectBox from '../index';
import { adpushupDropdownDataFormat } from '../Stories/data';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { generateImage } from 'jsdom-screenshot';

expect.extend({ toMatchImageSnapshot });

describe('MultiSelectBox Tests', () => {
	it('should render MultiSelectBox', async () => {
		render(<MultiSelectBox options={adpushupDropdownDataFormat} placeHolder="All" />);
		let ButtonElement = screen.getByRole('button', { display_name: 'All' });
		expect(ButtonElement).toBeInTheDocument();
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.innerHTML).toBe('All'); //by default button text

		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();

		// button style when it's not clicked
		expect(ButtonElement).toHaveStyle(`
		    backgroundColor: "rgb(255, 255, 255)";
		`);
		act(() => {
			fireEvent.click(ButtonElement);
		});
		// dropdown opens after button is clicked
		const ListElement = ButtonElement.nextElementSibling;
		expect(ListElement.tagName).toBe('UL');
		const firstOption = ListElement.firstElementChild.firstElementChild;
		expect(firstOption.firstElementChild.tagName).toBe('INPUT');
		expect(firstOption.lastElementChild.tagName).toBe('SPAN');
		expect(firstOption.lastElementChild.innerHTML).toBe('Daily');
		expect(firstOption).toHaveStyle(`
            color: "rgb(85, 85, 85)";
		`);
	});
	it('should change MultiSelectBox Button on user actions', async () => {
		render(<MultiSelectBox options={adpushupDropdownDataFormat} placeHolder="All" />);
		let ButtonElement = screen.getByRole('button', { display_name: 'All' });
		expect(ButtonElement).toBeInTheDocument();
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.innerHTML).toBe('All'); //by default button text
		// button style when it's not clicked
		expect(ButtonElement).toHaveStyle(`
	            backgroundColor: "rgb(255, 255, 255)";
	        `);
		act(() => {
			fireEvent.click(ButtonElement);
		});
		// button style after clicked
		expect(ButtonElement).toHaveStyle(`
	            backgroundColor: "rgb(230, 230, 230)";
	    `);
	});
	it('should change MultiSelectBox List on user actions', async () => {
		render(<MultiSelectBox options={adpushupDropdownDataFormat} placeHolder="All" />);
		let ButtonElement = screen.getByRole('button', { display_name: 'All' });
		expect(ButtonElement).toBeInTheDocument();
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.innerHTML).toBe('All'); //by default button text
		act(() => {
			fireEvent.click(ButtonElement);
		});
		// dropdown opens after button is clicked
		const ListElement = ButtonElement.nextElementSibling;
		expect(ListElement.tagName).toBe('UL');
		const firstOption = ListElement.firstElementChild.firstElementChild;
		expect(firstOption.firstElementChild.tagName).toBe('INPUT');
		expect(firstOption.lastElementChild.tagName).toBe('SPAN');
		expect(firstOption.lastElementChild.innerHTML).toBe('Daily');
		expect(firstOption).toHaveStyle(`
            color: "rgb(85, 85, 85)";
		`);
		//first option is selected
		act(() => {
			fireEvent.click(firstOption);
		});
		// to make dropdown list close again
		act(() => {
			fireEvent.click(ButtonElement);
		});
		// button text should be first option now
		expect(ButtonElement.firstElementChild.innerHTML).toBe('Daily');
		act(() => {
			fireEvent.click(ButtonElement);
		});
		const LastOption = ListElement.lastElementChild.lastElementChild;
		expect(LastOption.lastElementChild.innerHTML).toBe('Cumulative');
		act(() => {
			fireEvent.mouseOver(LastOption);
		});
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
		// hover styles check
		expect(LastOption).toHaveStyle(`
		        backgroundColor: "rgb(243, 244, 246)";
		`);
		// multiselected the options
		act(() => {
			fireEvent.click(LastOption);
		});
		// again close the dropdown list
		act(() => {
			fireEvent.click(ButtonElement);
		});
	});
});
