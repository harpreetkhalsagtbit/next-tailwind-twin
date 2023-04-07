import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DropDown from '../index';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { generateImage } from 'jsdom-screenshot';

expect.extend({ toMatchImageSnapshot });

const options = [
	{
		display_name: 'Daily',
		name: 'Daily',
		position: 1,
		value: 'daily',
	},
	{
		display_name: 'Monthly',
		name: 'Monthly',
		position: 2,
		value: 'monthly',
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

describe('Dropdown Tests', () => {
	it('should render Dropdown', async () => {
		render(<DropDown options={options} placeHolder="All" />);
		let ButtonElement = screen.getByRole('button', { display_name: 'All' });
		expect(ButtonElement).toBeInTheDocument();
		expect(ButtonElement.tagName).toBe('BUTTON');
		expect(ButtonElement.firstElementChild.innerHTML).toBe('All'); //by default button text
		// button style when it's not clicked
		expect(ButtonElement).toHaveStyle(`
            backgroundColor: "rgb(255, 255, 255)";
        `);
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
	});
	it('should change Dropdown Button on user actions', async () => {
		render(<DropDown options={options} placeHolder="All" />);
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
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
	});
	it('should change Dropdown List on user actions', async () => {
		render(<DropDown options={options} placeHolder="All" />);
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
		expect(firstOption.firstElementChild.innerHTML).toBe('Daily');
		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();
		//first option is selected
		act(() => {
			fireEvent.click(firstOption);
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
		// hover styles check
		expect(LastOption).toHaveStyle(`
            backgroundColor: "rgb(243, 244, 246)";
        `);
		// selected option styles
		expect(firstOption).toHaveStyle(`
            backgroundColor: "rgb(51, 122, 184)";
        `);
	});
});
