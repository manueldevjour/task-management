import { Category } from '../../types';
import { calculateProgress, isCategoryComplete, toggleTaskCheckbox } from '../../utils/utils';

describe('Utils Functions', () => {
  it('calculates progress correctly', () => {
    const mockTasks: Category[] = [
      {
        name: 'Category 1',
        tasks: [
          { description: 'Task 1', value: 10, checked: true },
          { description: 'Task 2', value: 20, checked: false }
        ]
      }
    ];

    const progress = calculateProgress(mockTasks);
    expect(progress).toBe(33);
  });

  it('checks if a category is complete', () => {
    const completeCategory = {
      name: 'Complete Category',
      tasks: [
        { description: 'Task 1', value: 10, checked: true },
        { description: 'Task 2', value: 20, checked: true }
      ]
    };
    const incompleteCategory = {
      name: 'Incomplete Category',
      tasks: [
        { description: 'Task 1', value: 10, checked: true },
        { description: 'Task 2', value: 20, checked: false }
      ]
    };

    expect(isCategoryComplete(completeCategory)).toBe(true);
    expect(isCategoryComplete(incompleteCategory)).toBe(false);
  });

  it('toggles task checkbox correctly', () => {
    const tasksBeforeToggle = [
      {
        name: 'Category 1',
        tasks: [
          { description: 'Task 1', value: 10, checked: false },
          { description: 'Task 2', value: 20, checked: true }
        ]
      }
    ];

    const updatedTasks = toggleTaskCheckbox(tasksBeforeToggle, 0, 0);
    expect(updatedTasks[0].tasks[0].checked).toBe(true);
    expect(updatedTasks[0].tasks[1].checked).toBe(true);
  });
});
