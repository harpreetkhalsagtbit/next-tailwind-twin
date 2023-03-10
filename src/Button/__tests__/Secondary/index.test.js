import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import { FaEnvelope } from 'react-icons/fa';

import Button, { IconButton } from '../../index';

afterEach(() => {
	cleanup();
});

describe('Secondary Button Tests', () => {
	test('should render Secondary button', async () => {
		render(<Button data-testid="secondaryButton" secondary />);
		const SecondaryButton = screen.getByTestId('secondaryButton');

		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		`);
	});
});

describe('Icon Secondary Button Tests', () => {
	test('should render by icon Secondary button', () => {
		render(<IconButton data-testid="iconButton" icon={<FaEnvelope />} secondary></IconButton>);
		const SecondaryButton = screen.getByTestId('iconButton');
		const firstChild = SecondaryButton.firstElementChild.tagName;
		const numberOfChild = SecondaryButton.children.length;
		expect(firstChild).toEqual('svg');
		expect(numberOfChild).toEqual(1);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		`);
	});

	test('should render by left icon Secondary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Secondary with Text"
				icon={<FaEnvelope />}
				secondary
			></IconButton>
		);
		const SecondaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = SecondaryButton.firstElementChild.innerHTML;
		const secondChild = SecondaryButton.lastElementChild.tagName;
		const numberOfChild = SecondaryButton.children.length;
		expect(firstChild).toEqual('Icon Secondary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		`);
	});
	test('should render by right icon Secondary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left={false}
				text="Icon Secondary with Text"
				icon={<FaEnvelope />}
				secondary
			></IconButton>
		);
		const SecondaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = SecondaryButton.firstElementChild.innerHTML;
		const secondChild = SecondaryButton.lastElementChild.tagName;
		const numberOfChild = SecondaryButton.children.length;
		expect(firstChild).toEqual('Icon Secondary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		`);
	});
});

describe('Full Width Secondary Button Tests', () => {
	test('should render by full width Secondary button', () => {
		render(
			<Button wide secondary>
				I'm Wide Secondary
			</Button>
		);
		const SecondaryButton = screen.getByRole('button', { name: /I'm Wide Secondary/i });

		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		width: 100%;
		`);
		expect(SecondaryButton).not.toHaveStyle(`
		width: 80%;
		`);
	});

	test('should render by full width icon Secondary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Secondary with Text"
				icon={<FaEnvelope />}
				wide
				secondary
			></IconButton>
		);
		const SecondaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = SecondaryButton.firstElementChild.innerHTML;
		const secondChild = SecondaryButton.lastElementChild.tagName;
		const numberOfChild = SecondaryButton.children.length;
		expect(firstChild).toEqual('Icon Secondary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(235, 87, 92)";
		width: 100%;
		`);
	});
});

describe('Different states of secondary button like focus, active, disabled, hover', () => {
	test('should render by disabled full width icon Secondary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Secondary with Text"
				icon={<FaEnvelope />}
				wide
				disabled
				secondary
			></IconButton>
		);
		const SecondaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = SecondaryButton.firstElementChild.innerHTML;
		const secondChild = SecondaryButton.lastElementChild.tagName;
		const numberOfChild = SecondaryButton.children.length;
		expect(firstChild).toEqual('Icon Secondary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		width: 100%;
		`);
		expect(SecondaryButton).toBeDisabled();
	});

	test('should render focused Secondary button', () => {
		render(<Button secondary>I'm Wide Secondary</Button>);
		const SecondaryButton = screen.getByRole('button', { name: /I'm Wide Secondary/i });
		SecondaryButton.focus(); // boxShadow to be added in style object

		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(245, 245, 245)"
		`);
	});

	test('should render active Secondary button', () => {
		render(<Button secondary>I'm Wide Secondary</Button>);
		const SecondaryButton = screen.getByRole('button', { name: /I'm Wide Secondary/i });
		SecondaryButton.click(); // boxShadow to be added in style object

		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(245, 245, 245)"
		`);
	});

	test('should render hovered Secondary button', () => {
		render(<Button secondary>I'm Wide Secondary</Button>);
		const SecondaryButton = screen.getByRole('button', { name: /I'm Wide Secondary/i });
		userEvent.hover(SecondaryButton);
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(245, 245, 245)"
		`);
	});

	test('should render disabled Secondary button', () => {
		render(
			<Button disabled secondary>
				I'm Wide Secondary
			</Button>
		);
		const SecondaryButton = screen.getByRole('button', { name: /I'm Wide Secondary/i });
		expect(SecondaryButton).toBeDisabled();
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(245, 245, 245)";
		opacity: 0.65;
		`);
	});

	test('should render disabled Icon Secondary button', () => {
		render(
			<IconButton
				data-testid="iconButton"
				icon={<FaEnvelope />}
				disabled
				secondary
			></IconButton>
		);
		const SecondaryButton = screen.getByTestId('iconButton');
		const firstChild = SecondaryButton.firstElementChild.tagName;
		expect(SecondaryButton).toBeDisabled();
		expect(firstChild).toEqual('svg');
		expect(SecondaryButton).toHaveStyle(`
		backgroundColor: "rgb(245, 245, 245)";
		opacity: 0.65;
		`);
	});
});
