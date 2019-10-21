import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"]
})
export class OurServicesComponent implements OnInit {
  servicesData: any;
  allServices: any[];
  constructor(private siteDataService: SitedataService) {}

  services() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.servicesData = res;
        this.servicesData = this.servicesData.ourServices;
        this.allServices = this.servicesData.services;
      },
      err => {
        console.log("could'nt get services data");
      }
    );
  }

  ngOnInit() {
    this.services();
  }
}
