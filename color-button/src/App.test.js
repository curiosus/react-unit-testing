import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and text', () => {
  render(<App />);
	const button = screen.getByRole('button', {name: 'Change to blue'});
	expect(button).toHaveStyle({backgroundColor: 'red'});

});


test('button turns blue and has correct text when clicked', () => {
  render(<App />);
	const button = screen.getByRole('button', {name: 'Change to blue'});
	fireEvent.click(button);
	expect(button).toHaveStyle({backgroundColor: 'blue'});
	expect(button.textContent).toBe('Change to red');
	
});

test('initial conditions button enabled and checkbox unchecked', () => {
	render(<App />);
	const button = screen.getByRole('button', {name: 'Change to blue'});
	expect(button).toBeEnabled();
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('when checkbox is checked button should be disabled', () => {
	render(<App />);
	const button = screen.getByRole('button', {name: 'Change to blue'});
	const checkbox = screen.getByRole('checkbox'); 
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
});
