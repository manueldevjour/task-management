import React, { useMemo } from 'react';
import Clipboard from '../../assets/svgs/clipboard.svg';
import ClipboardChecked from '../../assets/svgs/clipboard-check.svg';
import Arrow from '../../assets/svgs/arrow.svg';
import { isCategoryComplete, toggleTaskCheckbox, calculateProgress } from '../../utils/utils';
import ProgressContainer from '../ui/ProgressContainer/ProgressContainer';
import Card from '../ui/Card/Card';
import CardHeader from '../ui/Card/CardHeader/CardHeader';
import CardBody from '../ui/Card/CardBody/CardBody';
import useFetchTasks from '../../hooks/useFetchTasks';
import './Widget.css';

const Widget: React.FC = () => {
  const { tasks, setTasks, error } = useFetchTasks();

  const progress = useMemo(() => calculateProgress(tasks), [tasks]);

  if (error) {
    return (
      <div className="error" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <div data-testid="widget">
      <Card>
        <CardHeader title="Grouped Tasks">
          <ProgressContainer progress={progress} />
        </CardHeader>
        <CardBody>
          {tasks.map((category, categoryIndex) => (
            <details
              key={category.name}
              className={`widget__category ${isCategoryComplete(category) ? 'widget__category--complete' : ''}`}
              aria-expanded="false"
              aria-labelledby={`category-${categoryIndex}`}
            >
              <summary id={`category-${categoryIndex}`} role="button" aria-haspopup="true">
                <div className="widget__category-info">
                  {isCategoryComplete(category) ? (
                    <img className="icon" src={ClipboardChecked} alt="Clipboard checked icon" />
                  ) : (
                    <img className="icon" src={Clipboard} alt="Clipboard icon" />
                  )}
                  <span className="name">{category.name}</span>
                </div>
                <div className="open-info">
                  <span className="toggle-text"></span>
                  <img className="toggle-icon" alt="Arrow icon" src={Arrow} />
                </div>
              </summary>
              <div className="widget__category-task-list">
                {category.tasks.map((task, taskIndex) => (
                  <p key={task.description} className="widget__task">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={task.checked}
                        onChange={() =>
                          setTasks((prevTasks) => toggleTaskCheckbox(prevTasks, categoryIndex, taskIndex))
                        }
                        aria-label={`Toggle task ${task.description}`}
                      />
                      <span className="checkmark"></span>
                      {task.description}
                    </label>
                  </p>
                ))}
              </div>
            </details>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Widget;
