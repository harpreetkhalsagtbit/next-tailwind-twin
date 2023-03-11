import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import { FaEnvelope } from 'react-icons/fa';

import Button, { IconButton } from '../../index';

afterEach(() => {
	cleanup();
});

describe('Quartenary Button Tests', () => {
	test('should render Quartenary button', async () => {
		render(<Button data-testid="quartenaryButton" quartenary />);
		const QuartenaryButton = screen.getByTestId('quartenaryButton');

		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        `);
	});
});
describe('Quartenary Icon Button Tests', () => {
	test('should render by icon Quartenary button', () => {
		render(<IconButton data-testid="iconButton" icon={<FaEnvelope />} quartenary></IconButton>);
		const QuartenaryButton = screen.getByTestId('iconButton');
		const firstChild = QuartenaryButton.firstElementChild.tagName;
		const numberOfChild = QuartenaryButton.children.length;
		expect(firstChild).toEqual('svg');
		expect(numberOfChild).toEqual(1);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        `);
	});

	test('should render by left icon Quartenary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Quartenary with Text"
				icon={<FaEnvelope />}
				quartenary
			></IconButton>
		);
		const QuartenaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = QuartenaryButton.firstElementChild.innerHTML;
		const secondChild = QuartenaryButton.lastElementChild.tagName;
		const numberOfChild = QuartenaryButton.children.length;
		expect(firstChild).toEqual('Icon Quartenary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        `);
	});
	test('should render by left icon Quartenary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left={false}
				text="Icon Quartenary with Text"
				icon={<FaEnvelope />}
				quartenary
			></IconButton>
		);
		const QuartenaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = QuartenaryButton.firstElementChild.innerHTML;
		const secondChild = QuartenaryButton.lastElementChild.tagName;
		const numberOfChild = QuartenaryButton.children.length;
		expect(firstChild).toEqual('Icon Quartenary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        `);
	});
});
describe('Full width Quartenary Button', () => {
	test('should render by full width Quartenary button', () => {
		render(
			<Button wide quartenary>
				I'm Wide Quartenary
			</Button>
		);
		const QuartenaryButton = screen.getByRole('button', { name: /I'm Wide Quartenary/i });

		expect(QuartenaryButton).toHaveStyle(`
        width: 100%;
        `);
		expect(QuartenaryButton).not.toHaveStyle(`
        width: 80%;
        `);
	});

	test('should render by full width icon Quartenary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Quartenary with Text"
				icon={<FaEnvelope />}
				wide
				quartenary
			></IconButton>
		);
		const QuartenaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = QuartenaryButton.firstElementChild.innerHTML;
		const secondChild = QuartenaryButton.lastElementChild.tagName;
		const numberOfChild = QuartenaryButton.children.length;
		expect(firstChild).toEqual('Icon Quartenary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        width: 100%;
        `);
	});
});

describe('Different States of Quartnery like focus, hover, active, disabled', () => {
	test('should render by disabled full width icon Quartenary button with text', () => {
		render(
			<IconButton
				data-testid="iconButtonWithText"
				left
				text="Icon Quartenary with Text"
				icon={<FaEnvelope />}
				wide
				disabled
				quartenary
			></IconButton>
		);
		const QuartenaryButton = screen.getByTestId('iconButtonWithText');
		const firstChild = QuartenaryButton.firstElementChild.innerHTML;
		const secondChild = QuartenaryButton.lastElementChild.tagName;
		const numberOfChild = QuartenaryButton.children.length;
		expect(firstChild).toEqual('Icon Quartenary with Text');
		expect(secondChild).toEqual('svg');
		expect(numberOfChild).toEqual(2);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(255, 255, 255)";
        width: 100%;
        `);
		expect(QuartenaryButton).toBeDisabled();
		expect(QuartenaryButton).toHaveStyle(`
        opacity: 0.65;
        `);
	});

	test('should render focused Quartenary button', () => {
		render(<Button quartenary>I'm Wide Quartenary</Button>);
		const QuartenaryButton = screen.getByRole('button', { name: /I'm Wide Quartenary/i });
		QuartenaryButton.focus();
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(217, 217, 217)";
        `);
	});

	test('should render active Quartenary button', () => {
		render(<Button quartenary>I'm Wide Quartenary</Button>);
		const QuartenaryButton = screen.getByRole('button', { name: /I'm Wide Quartenary/i });
		QuartenaryButton.click();
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(217, 217, 217)";
        `);
	});

	test('should render hovered Quartenary button', () => {
		render(<Button quartenary>I'm Wide Quartenary</Button>);
		const QuartenaryButton = screen.getByRole('button', { name: /I'm Wide Quartenary/i });
		userEvent.hover(QuartenaryButton);
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(217, 217, 217)";
        `);
	});

	test('should render disabled Quartenary button', () => {
		render(
			<Button disabled quartenary>
				I'm Wide Quartenary
			</Button>
		);
		const QuartenaryButton = screen.getByRole('button', { name: /I'm Wide Quartenary/i });
		expect(QuartenaryButton).toBeDisabled();
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(217, 217, 217)";
        opacity: 0.65;
        `);
	});

	test('should render disabled Icon Quartenary button', () => {
		render(
			<IconButton
				data-testid="iconButton"
				icon={<FaEnvelope />}
				disabled
				quartenary
			></IconButton>
		);
		const QuartenaryButton = screen.getByTestId('iconButton');
		const firstChild = QuartenaryButton.firstElementChild.tagName;
		expect(QuartenaryButton).toBeDisabled();
		expect(firstChild).toEqual('svg');
		expect(QuartenaryButton).toHaveStyle(`
        backgroundColor: "rgb(217, 217, 217)";
        opacity: 0.65;
        `);
	});
});
