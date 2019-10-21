import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homeData: any;
  carousel: any[];

  constructor(
    private siteDataService: SitedataService,
    private config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  // images = [1, 2, 3, 4].map(
  //   () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  // );

  home() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.homeData = res;
        this.homeData = this.homeData.home;
        this.carousel = this.homeData.carousel;
      },
      err => {
        console.log("could'nt get home data");
      }
    );
  }

  ngOnInit() {
    this.home();
  }
}
