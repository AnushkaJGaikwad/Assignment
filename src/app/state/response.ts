import { standingsResponse } from '../interfaces/interfaces';

const initialResponse: standingsResponse = {
  get: 'standings',
  parameters: {
    league: '39',
    season: '2019',
  },
  errors: {
    requests: "",
    access: ""
  },
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media-4.api-sports.io/football/leagues/39.png',
        flag: 'https://media-4.api-sports.io/flags/gb.svg',
        season: 2019,
        standings: [
          [
            {
              rank: 1,
              team: {
                id: 40,
                name: 'Liverpool',
                logo: 'https://media-4.api-sports.io/football/teams/40.png',
              },
              points: 99,
              goalsDiff: 52,
              group: 'Premier League',
              form: 'WWLDW',
              status: 'same',
              description: 'Promotion - Champions League (Group Stage)',
              all: {
                played: 38,
                win: 32,
                draw: 3,
                lose: 3,
                goals: {
                  for: 85,
                  against: 33,
                },
              },
              home: {
                played: 19,
                win: 18,
                draw: 1,
                lose: 0,
                goals: {
                  for: 52,
                  against: 16,
                },
              },
              away: {
                played: 19,
                win: 14,
                draw: 2,
                lose: 3,
                goals: {
                  for: 33,
                  against: 17,
                },
              },
              update: '2020-07-26T00:00:00+00:00',
            },
          ],
        ],
      },
    },
  ],
};

export default initialResponse;
