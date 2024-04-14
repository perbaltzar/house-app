import React from 'react';
import './Heading.css';

type HeadingProps = {
  children: React.ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({ children, size }: HeadingProps) => {
  const Component = size ?? 'h1';

  return (
    <div className="heading">
      <Component>{children}</Component>
    </div>
  );
};
