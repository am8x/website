import React from 'react';
import { FadeIn } from './FadeIn';
import { SocialLinks } from './SocialLinks';

export const HeroSection: React.FC = () => {
  return (
    <div className="section-container">
      <FadeIn className="padding-y-5">
        <h1 className="section-title">
          Hi, I’m Amir, an 18 year old <span className="text-highlight">Junior Frontend Developer</span> from Algeria.
        </h1>
        <p className="section-description">
          I’m a junior frontend developer with a strong passion for building clean and responsive web interfaces. My interest in coding began when I was 13, and at 17 I started learning seriously. I’m still learning and improving every day, focusing on modern frontend technologies and growing into a skilled, reliable developer.
        </p>
        <SocialLinks />
      </FadeIn>

      <FadeIn delay={200} className="hero-image-container">
        <img
          src="pfp.jpg"
          alt="Profile"
          className="hero-image"
        />
        
      </FadeIn>
    </div>
  );
};
