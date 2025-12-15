import React from 'react';
import { FadeIn } from './FadeIn';
import { SpotifyCard } from './SpotifyCard';

export const ActivitySection: React.FC = () => {
  return (
    <div className="section-container">
      <FadeIn className="padding-y-5">
        <h2 className="section-title">
          Currently Doing
        </h2>
        <p className="section-description">
          Below are the activities I am currently doing.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="activity-card">
          <SpotifyCard />
        </div>
      </FadeIn>
    </div>
  );
};