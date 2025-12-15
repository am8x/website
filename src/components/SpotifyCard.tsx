import React, { useEffect, useState, useCallback } from 'react';
import { Music } from 'lucide-react';
import { LanyardResponse, SpotifyData } from '../types';

const LANYARD_ID = '933788835052126258';

export const SpotifyCard: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fetchLanyard = useCallback(async () => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${LANYARD_ID}`);
      const json: LanyardResponse = await res.json();

      if (json.data && json.data.listening_to_spotify && json.data.spotify) {
        setSpotifyData(json.data.spotify);
      } else {
        setSpotifyData(null);
      }
    } catch (e) {
      console.error("Lanyard Fetch Error", e);
      setSpotifyData(null);
    }
  }, []);

  useEffect(() => {
    fetchLanyard();
    const interval = setInterval(fetchLanyard, 10000);
    return () => clearInterval(interval);
  }, [fetchLanyard]);

  useEffect(() => {
    if (!spotifyData) return;

    const updateProgress = () => {
      const now = Date.now();
      const start = spotifyData.timestamps.start;
      const end = spotifyData.timestamps.end;
      const total = end - start;
      const current = now - start;
      
      const newProgress = Math.min(100, Math.max(0, (current / total) * 100));
      
      setProgress(newProgress);
      setCurrentTime(current);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [spotifyData]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!spotifyData) {
    return (
      <div className="spotify-wrapper">
        <div className="spotify-idle">
          <div className="spotify-icon-placeholder">
            <Music size={32} />
          </div>
          <div className="spotify-idle-text">
            <p className="spotify-idle-title">Not playing anything</p>
            <p className="spotify-idle-subtitle">Spotify is currently silent.</p>
          </div>
        </div>
      </div>
    );
  }

  const totalDuration = spotifyData.timestamps.end - spotifyData.timestamps.start;

  return (
    <div className="spotify-wrapper">
      <div className="spotify-active-header">
        <img 
          src={spotifyData.album_art_url} 
          alt="Album Art" 
          className="spotify-album-art"
        />
        <div className="spotify-info">
          <p className="spotify-label">
            Listening to Spotify
          </p>
          <p 
            className="spotify-song" 
            title={spotifyData.song}
          >
            {spotifyData.song}
          </p>
          <p 
            className="spotify-artist" 
            title={spotifyData.artist}
          >
            by {spotifyData.artist}
          </p>
        </div>
      </div>
      <div className="progress-container">
        <div className="spotify-progress-track">
          <div 
            className="spotify-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="spotify-timestamps">
          <span>{formatTime(Math.max(0, currentTime))}</span>
          <span>{formatTime(totalDuration)}</span>
        </div>
      </div>
    </div>
  );
};