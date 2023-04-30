import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import { FaEnvelope } from 'react-icons/fa';

import Button, { IconButton } from '../../index';

afterEach(() => {
	cleanup();
});

describe('Tertiary Button Tests', () => {
	test('should render Tertiary button', async () => {
		render(<Button data-testid="tertiaryButton" tertiary />);
		const TertiaryButton = screen.getByTestId('tertiaryButton');

		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});
});

describe('Icon Tertiary Button Tests', () => {
	test('should render by icon Tertiary button', () => {
		render(<IconButton data-testid="iconButton" icon={<FaEnvelope />} tertiary></IconButton>);
		const TertiaryButton = screen.getByTestId('iconButton');
		const firstChild = TertiaryButton.firstElementChild.tagName;
		const numberOfChild = TertiaryButton.children.length;
		expect(firstChild).toEqual('svg');
		expect(numberOfChild).toEqual(1);
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});

	test('should render by left icon Tertiary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Tertiary with Text"
				icon={<FaEnvelope />}
				tertiary
			></IconButton>
		);
		const TertiaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = TertiaryButton.firstElementChild.innerHTML;
		const secondChild = TertiaryButton.lastElementChild.tagName;
		const numberOfChild = TertiaryButton.children.length;
		expect(firstChild).toEqual('Icon Tertiary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});

	test('should render by right icon Tertiary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left={false}
				text="Icon Tertiary with Text"
				icon={<FaEnvelope />}
				tertiary
			></IconButton>
		);
		const TertiaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = TertiaryButton.firstElementChild.innerHTML;
		const secondChild = TertiaryButton.lastElementChild.tagName;
		const numberOfChild = TertiaryButton.children.length;
		expect(firstChild).toEqual('Icon Tertiary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});
});

describe('Full width tertiary button tests', () => {
	test('should render by full width Tertiary button', () => {
		render(
			<Button wide tertiary>
				I'm Wide Tertiary
			</Button>
		);
		const TertiaryButton = screen.getByRole('button', { name: /I'm Wide Tertiary/i });

		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        width: 100%;
        `);
		expect(TertiaryButton).not.toHaveStyle(`
        width: 80%;
        `);
	});

	test('should render by full width icon Tertiary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Tertiary with Text"
				icon={<FaEnvelope />}
				wide
				tertiary
			></IconButton>
		);
		const TertiaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = TertiaryButton.firstElementChild.innerHTML;
		const secondChild = TertiaryButton.lastElementChild.tagName;
		const numberOfChild = TertiaryButton.children.length;
		expect(firstChild).toEqual('Icon Tertiary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        borderColor: "rgb(221, 221, 221)";
        width: 100%;
        `);
	});
});

describe('different states of tertiary button like hover, disabled, focus, active tests', () => {
	test('should render by disabled full width icon Tertiary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Tertiary with Text"
				icon={<FaEnvelope />}
				wide
				disabled
				tertiary
			></IconButton>
		);
		const TertiaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = TertiaryButton.firstElementChild.innerHTML;
		const secondChild = TertiaryButton.lastElementChild.tagName;
		const numberOfChild = TertiaryButton.children.length;
		expect(firstChild).toEqual('Icon Tertiary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(TertiaryButton).toBeDisabled();
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        width: 100%;
        opacity: 0.65;
        `);
	});

	test('should render focused Tertiary button', () => {
		render(<Button tertiary>I'm Wide Tertiary</Button>);
		const TertiaryButton = screen.getByRole('button', { name: /I'm Wide Tertiary/i });
		TertiaryButton.focus(); // boxShadow class to be added
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(245, 245, 245)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});

	test('should render active Tertiary button', () => {
		render(<Button tertiary>I'm Wide Tertiary</Button>);
		const TertiaryButton = screen.getByRole('button', { name: /I'm Wide Tertiary/i });
		TertiaryButton.click();
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(245, 245, 245)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});

	test('should render hovered Tertiary button', () => {
		render(<Button tertiary>I'm Wide Tertiary</Button>);
		const TertiaryButton = screen.getByRole('button', { name: /I'm Wide Tertiary/i });
		userEvent.hover(TertiaryButton);
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(245, 245, 245)";
        borderColor: "rgb(221, 221, 221)";
        `);
	});

	test('should render disabled Tertiary button', () => {
		render(
			<Button disabled tertiary>
				I'm Tertiary
			</Button>
		);
		const TertiaryButton = screen.getByRole('button', { name: /I'm Tertiary/i });
		expect(TertiaryButton).toBeDisabled();
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(245, 245, 245)";
        opacity: 0.65;
        `);
	});

	test('should render disabled Icon Tertiary button', () => {
		render(
			<IconButton
				data-testid="iconButton"
				icon={<FaEnvelope />}
				disabled
				tertiary
			></IconButton>
		);
		const TertiaryButton = screen.getByTestId('iconButton');
		const firstChild = TertiaryButton.firstElementChild.tagName;
		expect(TertiaryButton).toBeDisabled();
		expect(firstChild).toEqual('svg');
		expect(TertiaryButton).toHaveStyle(`
        backgroundColor: "rgb(245, 245, 245)";
        opacity: 0.65;
        `);
	});
});
