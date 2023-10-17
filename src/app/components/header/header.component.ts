import { Component, OnInit } from '@angular/core';
import { country, standingsResponse } from '../../interfaces/interfaces';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = "Football Updates";
  currentSeason: number = new Date().getFullYear();
  standingsResponseData!: standingsResponse;
  countries: country[] = [
    { id: 1, name: 'England', topLeagueId: 39 },
    { id: 2, name: 'Spain', topLeagueId: 140 },
    { id: 3, name: 'France', topLeagueId: 61 },
    { id: 4, name: 'Germany', topLeagueId: 78 },
    { id: 5, name: 'Italy', topLeagueId: 135 },
  ];
  currentItemSelected!: number;

  constructor(private standingsService: StandingsService) {}
  ngOnInit(): void {
    const temp: string | null = localStorage.getItem('selectedLeague') ?? null;
    const selectedCountryLeague: number = temp === null ? 0 : JSON.parse(temp) ;
    selectedCountryLeague && selectedCountryLeague !== null
      ? this.getTopStandingLeaguesForCountry(
          selectedCountryLeague,
          this.countries[selectedCountryLeague]
        )
      : this.getTopStandingLeaguesForCountry(0, this.countries[0]);
  }

  getTopStandingLeaguesForCountry(
    selectedIndex: number,
    countryInfo: country
  ): void {
    this.standingsService
      .getStandings(countryInfo.topLeagueId, this.currentSeason)
      .subscribe((data: standingsResponse) => {
        this.currentItemSelected = selectedIndex;
        this.standingsResponseData = data;
        this.standingsService.setGlobalState(this.standingsResponseData);
        localStorage.setItem(
          'selectedLeague',
          JSON.stringify(this.currentItemSelected)
        );
      });
  }
}
