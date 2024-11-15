import { render, screen } from '@testing-library/react';
import Widget from '../../../components/Widget/Widget';
import useFetchTasks from '../../../hooks/useFetchTasks';

vi.mock('../../../hooks/useFetchTasks');

describe('Widget Component', () => {
  beforeEach(() => {
    useFetchTasks.mockReturnValue({
      tasks: [
        {
          name: 'Category 1',
          tasks: [
            { description: 'Task 1', value: 10, checked: true },
            { description: 'Task 2', value: 20, checked: false }
          ]
        },
        {
          name: 'Category 2',
          tasks: [
            { description: 'Task 3', value: 30, checked: true },
            { description: 'Task 4', value: 40, checked: true }
          ]
        }
      ],
      setTasks: vi.fn(),
      error: null
    });
  });

  it('renders the Widget component without crashing', () => {
    render(<Widget />);
    const widgetElement = screen.getByTestId('widget');
    expect(widgetElement).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    useFetchTasks.mockReturnValueOnce({
      tasks: [],
      setTasks: vi.fn(),
      error: 'Error fetching tasks'
    });
    render(<Widget />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Error: Error fetching tasks');
  });
});
