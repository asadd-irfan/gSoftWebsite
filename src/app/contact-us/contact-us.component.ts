import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  contactUsData: any;
  contactInfo: any;
  constructor(private siteDataService: SitedataService) {}

  contactUs() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.contactUsData = res;
        this.contactUsData = this.contactUsData.contactUs;

        this.contactInfo = this.contactUsData.contactInfo;
      },
      err => {
        console.log("Could'nt get contact us data");
      }
    );
  }

  ngOnInit() {
    this.contactUs();
  }
}
