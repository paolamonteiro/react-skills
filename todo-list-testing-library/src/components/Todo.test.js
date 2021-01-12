import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('Tests for Todo component', () => {
	it('Should add new task when form has been submitted', async () => {
		// 1. Render the component
		const { getByTestId } = render(<TodoList />);
		const newTask = 'testing';
		const inputTaskField = await waitFor(() => getByTestId('input-task-field'));
		// 2. Type in the input
		fireEvent.change(
			inputTaskField,
			{ target: { value: newTask } }
		)
		expect(inputTaskField.value).toEqual(newTask)

		// 3. Get the button
		const submitFormBtn = await waitFor(() => getByTestId('submit-form-btn'))
		// 4. Click the button
		fireEvent.click(submitFormBtn)

		// 5. Get the table
		const tdNode = screen.getByText(newTask)
		// 6. Verify if the task has been added in the table
		expect(tdNode).toBeDefined()
	});
})