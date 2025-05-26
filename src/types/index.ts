export interface Match {
  id: string;
  homeTeam: {
    name: string;
    flag: string;
  };
  awayTeam: {
    name: string;
    flag: string;
  };
  location: {
    city: string;
    country: string;
  };
  date: string;
  time: string;
  ticketPrice: string;
  isHot: boolean;
  season: 'Summer' | 'Fall';
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  url: string;
  category: 'Top 5s' | 'Football Curiosities' | 'Player Spotlights' | 'Team Rankings';
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Trends' | 'Predictions' | 'Behind the Scenes' | 'Best of 2025';
  relatedVideoId?: string;
}