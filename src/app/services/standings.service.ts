import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { lastTenResults, standingsResponse } from '../interfaces/interfaces';
import initialResponse from '../state/response';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private globalState = new BehaviorSubject<standingsResponse>(initialResponse);
  globalState$: Observable<standingsResponse> = this.globalState.asObservable();
  baseApiUrl:string = "https://v3.football.api-sports.io";
  
  constructor(private http: HttpClient) {}

  setGlobalState(state: standingsResponse) {
    this.globalState.next(state);
  }

  getStandings(league: number, season: number): Observable<standingsResponse> {
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', 'a2d15438b2d3851414b5935843551f0b');
    const options = {
      headers: headers,
    };
    const apiUrl: string = `${this.baseApiUrl}/standings?league=${league}&season=${season}`;
    return this.http.get<standingsResponse>(apiUrl, options);
  }

  getLastTenResults(season: number, teamId: number, last: number): Observable<lastTenResults> {
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', 'a2d15438b2d3851414b5935843551f0b');
      const options = {
        headers: headers,
      };
      const apiUrl: string = `${this.baseApiUrl}/fixtures?season=${season}&team=${teamId}&last=${last}`;
      return this.http.get<lastTenResults>(apiUrl, options);
  }
}
