import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from '../index';

describe('Text Area Test Cases', () => {
	it('should render default Text Area Test', async () => {
		render(<TextArea data-testid="text-area" />);
		const TextAreaElement = screen.getByTestId('text-area');
		expect(TextAreaElement).toBeInTheDocument();

		expect(TextAreaElement).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(204, 204, 204)";
		`);
	});
	it('should render Text Area in disabled state', async () => {
		render(<TextArea data-testid="text-area" disabled />);
		const TextAreaElement = screen.getByTestId('text-area');
		expect(TextAreaElement).toBeInTheDocument();

		expect(TextAreaElement).toBeDisabled();
		expect(TextAreaElement).toHaveStyle(`
		backgroundColor: "rgb(250, 250, 250)"
		`);
	});
	it('should render text area in focused state', async () => {
		render(<TextArea data-testid="text-area" focused />);
		const TextAreaElement = screen.getByTestId('text-area');
		expect(TextAreaElement).toBeInTheDocument();

		expect(TextAreaElement).not.toBeDisabled();
		expect(TextAreaElement).toHaveStyle(`
		backgroundColor: "rgb(255, 255, 255)";
		borderColor: "rgb(102, 175, 233)";
		`);
	});
	it('should render text area with value', () => {
		var text = 'This is text area with default value';
		render(<TextArea data-testid="text-area">{text}</TextArea>);
		const TextAreaElement = screen.getByTestId('text-area');
		expect(TextAreaElement.innerHTML).toBe(text);
	});
});
