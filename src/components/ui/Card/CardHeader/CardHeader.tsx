import React from 'react';
import './CardHeader.css';

interface CardHeaderProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, className, children }) => {
  return (
    <div className={`card-header ${className ? className : ''}`}>
      <h2 className="card-title" role="heading" aria-level={2}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default CardHeader;
