import { Component, OnInit } from "@angular/core";
import { SitedataService } from "../sitedata.service";
import * as _ from "lodash";
import { trigger, style, animate, transition } from "@angular/animations";
import { fadeInOut } from "../animations";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { modalAnimation } from "../animations";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
  animations: [fadeInOut, modalAnimation]
})
export class PortfolioComponent implements OnInit {
  portfolioData: any;
  companyStates: any;
  all: any[];
  buttonClick: any = "allState";
  allApps: any[];
  allWebsites: any[];
  modalState: any;
  // isDisabled: boolean = false;
  constructor(
    private siteDataService: SitedataService,
    private modalService: NgbModal
  ) {}

  portfolio() {
    this.siteDataService.siteData().subscribe(
      res => {
        this.portfolioData = res;
        this.portfolioData = this.portfolioData.portfolio;
        this.companyStates = this.portfolioData.companyStates;
        this.all = this.portfolioData.allApps;
      },
      err => {
        console.log("could'nt get portfolio data");
      }
    );
  }

  show(data) {
    if (data == "app") {
      this.buttonClick = "appState";
      this.all = _.filter(this.portfolioData.allApps, ["category", "app"]);
    } else if (data == "web") {
      this.buttonClick = "webState";
      this.all = _.filter(this.portfolioData.allApps, ["category", "web"]);
    } else {
      this.buttonClick = "allState";
      this.all = this.portfolioData.allApps;
    }
  }
  openXl(content) {
    // this.isDisabled = true;
    this.modalState = "modalState";
    this.modalService.open(content, { size: "xl" });
  }
  closingModal() {
    this.modalState = "modalStatechanged";
    // this.isDisabled = false;
  }

  ngOnInit() {
    this.portfolio();
  }
}
