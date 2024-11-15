import { Category } from '../types';

export const isCategoryComplete = (category: Category): boolean => {
  return category.tasks.every((task) => task.checked);
};

export const toggleTaskCheckbox = (prevTasks: Category[], categoryIndex: number, taskIndex: number): Category[] => {
  return prevTasks.map((category, catIdx) => {
    if (catIdx !== categoryIndex) return category;
    return {
      ...category,
      tasks: category.tasks.map((task, taskIdx) => {
        if (taskIdx === taskIndex) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    };
  });
};

export const calculateProgress = (tasks: Category[]): number => {
  const totalValue = tasks.reduce(
    (total, category) => total + category.tasks.reduce((sum, task) => sum + task.value, 0),
    0
  );
  const completedValue = tasks.reduce(
    (total, category) => total + category.tasks.reduce((sum, task) => sum + (task.checked ? task.value : 0), 0),
    0
  );

  return totalValue > 0 ? Math.round((completedValue * 100) / totalValue) : 0;
};
