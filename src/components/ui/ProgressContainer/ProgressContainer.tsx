import React from 'react';
import './ProgressContainer.css';

interface ProgressContainerProps {
  progress: number;
}

const ProgressContainer: React.FC<ProgressContainerProps> = ({ progress }) => {
  return (
    <div
      className="progress-container"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar" style={{ width: `${progress < 5 ? '7' : progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressContainer;
