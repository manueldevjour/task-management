import React from 'react';
import './CardBody.css';

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return <div className={`card-body ${className ? className : ''}`}>{children}</div>;
};

export default CardBody;
