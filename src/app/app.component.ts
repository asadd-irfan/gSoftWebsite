import { Component } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "gsoftconsulting";
  installEvent: any;
  choice: any;
  constructor() {
    window.addEventListener("beforeinstallprompt", event => {
      this.installEvent = event;
      this.installEvent.prompt();

      console.log("The install event is", this.installEvent);
    });
  }
}
