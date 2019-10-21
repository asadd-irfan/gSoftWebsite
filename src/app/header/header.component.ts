import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  navbarHide() {
    $(function() {
      var navMain = $("#navbarNavDropdown");
      navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse("hide");
      });
    });
  }

  ngOnInit() {
    this.navbarHide();
  }
}
