import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { error, standings, standingsResponse } from 'src/app/interfaces/interfaces';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  currentTeamStandings!: undefined | standings[];
  errorMessage!: string;
  accessString: string = "access";
  requestString: string = "requests";
  constructor(private standingsService: StandingsService, private router: Router) {}
  ngOnInit(): void {
    this.standingsService.globalState$.subscribe((data) => {
      let errorObjectData: error | string = data.errors === undefined ? "": data?.errors;
      if(errorObjectData !== undefined && errorObjectData !== "" && data?.errors?.access !== undefined) {
        if(errorObjectData.hasOwnProperty(this.accessString)){
          this.errorMessage = data.errors.access;
        }
      } else if (errorObjectData !== undefined && errorObjectData !== "" && data?.errors?.requests !== undefined) {
        if(errorObjectData.hasOwnProperty(this.requestString)){
          this.errorMessage = data.errors.requests;
        }
      } else {
        this.currentTeamStandings = data?.response[0]?.league?.standings[0];
      }
    });
  }

  goToResults(teamId: number): void {
    this.router.navigateByUrl(`/team/${teamId}`);
  }
}
