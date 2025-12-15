export interface LanyardResponse {
  data: {
    spotify: SpotifyData | null;
    listening_to_spotify: boolean;
  };
  success: boolean;
}

export interface SpotifyData {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}