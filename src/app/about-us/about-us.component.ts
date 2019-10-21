import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any;
  ourTechnologies: any[];
  constructor(private siteDataService: SitedataService) {}

  aboutUs() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.aboutUsData = res;
        this.aboutUsData = this.aboutUsData.aboutUs;
        this.ourTechnologies = this.aboutUsData.ourTechnologies;
      },
      err => {
        console.log("could'nt get about us data.");
      }
    );
  }

  ngOnInit() {
    this.aboutUs();
  }
}
