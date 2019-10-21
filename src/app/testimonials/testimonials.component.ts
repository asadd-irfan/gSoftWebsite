import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";
declare var $: any;

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent implements OnInit {
  testimonialsData: any;
  allTestimonials: any[];
  constructor(private siteDataService: SitedataService) {}

  testimonials() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.testimonialsData = res;
        this.testimonialsData = this.testimonialsData.testimonials;
        this.allTestimonials = this.testimonialsData.testimonials;
      },
      err => {
        console.log("Could'nt get the testimonials data");
      }
    );
  }

  ngOnInit() {
    this.testimonials();
  }
}
