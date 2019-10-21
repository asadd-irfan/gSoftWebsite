import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SitedataService {
  constructor(private http: HttpClient) {}

  siteData() {
    return this.http.get("https://api.myjson.com/bins/va5oo");
  }
}
