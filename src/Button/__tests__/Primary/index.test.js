import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import { FaEnvelope } from 'react-icons/fa';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { generateImage } from 'jsdom-screenshot';

import Button, { IconButton } from '../../index';

expect.extend({ toMatchImageSnapshot });

afterEach(() => {
	cleanup();
});

describe('Primary Button Tests', () => {
	test('should render Primary button', async () => {
		render(
			<Button id="PrimaryButton" data-testid="primaryButton" primary>
				Primary
			</Button>
		);
		const PrimaryButton = screen.getByTestId('primaryButton');

		const screenshot = await generateImage();
		expect(screenshot).toMatchImageSnapshot();

		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		display: flex;
		justifyContent: center;
		borderRadius: 0.25rem;
		borderWidth: 1px;
		paddingLeft: 1.25rem;
		paddingRight: 1.25rem;
		paddingTop: 0.5rem;
		paddingBottom: 0.5rem;
		fontSize: 0.875rem;
		lineHeight: 1.25rem;
		`);
	});

	test('should render by default Primary button', () => {
		render(<Button>I'm Primary</Button>);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Primary/i });
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		display: flex;
		`);
	});
});

describe('Icon Primary Button Tests', () => {
	test('should render by icon Primary button', () => {
		render(<IconButton data-testid="iconButton" icon={<FaEnvelope />} primary></IconButton>);
		const PrimaryButton = screen.getByTestId('iconButton');
		const firstChild = PrimaryButton.firstElementChild.tagName;
		const numberOfChild = PrimaryButton.children.length;
		expect(firstChild).toEqual('svg');
		expect(numberOfChild).toEqual(1);
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		`);
	});

	test('should render by left icon Primary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Primary with Text"
				icon={<FaEnvelope />}
				primary
			></IconButton>
		);
		const PrimaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = PrimaryButton.firstElementChild.innerHTML;
		const secondChild = PrimaryButton.lastElementChild.tagName;
		const numberOfChild = PrimaryButton.children.length;
		expect(firstChild).toEqual('Icon Primary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		`);
	});

	test('should render by right icon Primary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left={false}
				text="Icon Primary with Text"
				icon={<FaEnvelope />}
				primary
			></IconButton>
		);
		const PrimaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = PrimaryButton.firstElementChild.innerHTML;
		const secondChild = PrimaryButton.lastElementChild.tagName;
		const numberOfChild = PrimaryButton.children.length;
		expect(firstChild).toEqual('Icon Primary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		`);
	});
});

describe('Full Width Primary Button Tests', () => {
	test('should render by full width Primary button', () => {
		render(
			<Button wide primary>
				I'm Wide Primary
			</Button>
		);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Wide Primary/i });

		expect(PrimaryButton).toHaveStyle(`
		width: 100%;
		`);
		expect(PrimaryButton).not.toHaveStyle(`
		width: 80%;
		`);
	});

	test('should render by full width icon Primary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Primary with Text"
				icon={<FaEnvelope />}
				wide
				primary
			></IconButton>
		);
		const PrimaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = PrimaryButton.firstElementChild.innerHTML;
		const secondChild = PrimaryButton.lastElementChild.tagName;
		const numberOfChild = PrimaryButton.children.length;
		expect(firstChild).toEqual('Icon Primary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		width: 100%;
		`);
	});

	test('should render by disabled full width icon Primary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Primary with Text"
				icon={<FaEnvelope />}
				wide
				disabled
				primary
			></IconButton>
		);
		const PrimaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = PrimaryButton.firstElementChild.innerHTML;
		const secondChild = PrimaryButton.lastElementChild.tagName;
		const numberOfChild = PrimaryButton.children.length;
		expect(firstChild).toEqual('Icon Primary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		width: 100%;
		`);
		expect(PrimaryButton).toBeDisabled();
		expect(PrimaryButton).toHaveStyle(`
		opacity: 0.65;
		`);
	});
});

describe('different states of Primary Button like focus, hover, disabled', () => {
	test('should render focused Primary button', () => {
		render(<Button primary>I'm Focused Primary</Button>);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Focused Primary/i });
		expect(PrimaryButton).toBeInTheDocument();
		PrimaryButton.focus();

		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(230, 41, 48)";
		`);
	});

	test('should render active Primary button', () => {
		render(<Button primary>I'm Active Primary</Button>);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Active Primary/i });
		PrimaryButton.click();
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(230, 41, 48)";
		`);
	});

	test('should render hovered Primary button', () => {
		render(<Button primary>I'm Hovered Primary</Button>);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Hovered Primary/i });
		userEvent.hover(PrimaryButton); // box shadow to be added
		expect(PrimaryButton).toHaveStyle(`
		backgroundColor: "rgb(234, 87, 92)";
		borderColor: "rgb(173, 173, 173)";
		`);
	});

	test('should render disabled Primary button', () => {
		render(
			<Button disabled primary>
				I'm Wide Primary
			</Button>
		);
		const PrimaryButton = screen.getByRole('button', { name: /I'm Wide Primary/i });
		expect(PrimaryButton).toBeDisabled();
		expect(PrimaryButton).toHaveStyle(`
		opacity: 0.65;
		`);
	});

	test('should render disabled Icon Primary button', () => {
		render(
			<IconButton
				data-testid="iconButton"
				icon={<FaEnvelope />}
				disabled
				primary
			></IconButton>
		);
		const PrimaryButton = screen.getByTestId('iconButton');
		const firstChild = PrimaryButton.firstElementChild.tagName;
		expect(PrimaryButton).toBeDisabled();
		expect(firstChild).toEqual('svg');
		expect(PrimaryButton).toBeDisabled();
		expect(PrimaryButton).toHaveStyle(`
		opacity: 0.65;
		`);
	});
});
