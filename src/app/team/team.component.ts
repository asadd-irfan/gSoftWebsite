import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  teamData: any;
  allteam: any[];
  constructor(private siteDataService: SitedataService) {}

  team() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.teamData = res;
        this.teamData = this.teamData.team;
        this.allteam = this.teamData.members;
      },
      err => {
        console.log("The error here is ");
      }
    );
  }

  ngOnInit() {
    this.team();
  }
}
