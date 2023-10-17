export interface country {
  id: number;
  name: string;
  topLeagueId: number;
}

export interface error {
  access?: string | undefined;
  requests?: string | undefined;
}

export interface standings {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  update: string;
}

export interface standingsResponse {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors?: {
    access?: string;
    requests?: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: [
    {
      league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        standings: [standings[]];
      };
    }
  ];
}

export interface fixtures {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: null;
      away: null;
    };
    penalty: {
      home: null;
      away: null;
    };
  };
}

export interface lastTenResults {
  get: string;
  parameters: {
    season: string;
    team: string;
    last: string;
  };
  errors: [];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: [fixtures];
}
