import { Component, OnInit } from '@angular/core';
import { StandingsService } from 'src/app/services/standings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error, fixtures, lastTenResults } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  lastTenResults!: [fixtures];

  constructor(private standingsServices: StandingsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const teamId: number = this.route.snapshot.params['id'];
    const season: number = new Date().getFullYear();
    const lastTenResultsNumber: number = 10;
    this.standingsServices
      .getLastTenResults(season, teamId, lastTenResultsNumber).subscribe((data: lastTenResults) => {
        this.lastTenResults = data?.response;
      })
  }

  goBackToHome(): void {
    this.router.navigateByUrl("/home");
  }
}
