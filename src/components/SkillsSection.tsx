import React from 'react';
import { FadeIn } from './FadeIn';

export const SkillsSection: React.FC = () => {
  return (
    <div className="section-container">
      <FadeIn className="padding-y-5 order-swap-text">
        <h2 className="section-title">
          Frontend & Other Technologies
        </h2>
        <p className="section-description">
          I’m developing my experience in frontend development and have been working with different tools, frameworks, and libraries as I continue learning and improving my skills.
        </p>
      </FadeIn>

      <FadeIn delay={200} className="hero-image-container order-swap-image">
        <img
          src="/skills.png"
          alt="Tech Stack"
          className="hero-image"
        />
      </FadeIn>
    </div>
  );
};