import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FadeInProps } from '../types';

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  threshold = 0.1 
}) => {
  const { elementRef, isVisible } = useIntersectionObserver(threshold);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={style}
      className={`fade-in-wrapper ${
        isVisible 
          ? 'fade-in-visible' 
          : 'fade-in-hidden'
      } ${className}`}
    >
      {children}
    </div>
  );
};