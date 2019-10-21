import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CountUpModule } from "countup.js-angular2";
// import { CountoModule } from "angular2-counto";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamComponent } from "./team/team.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { HttpClientModule } from "@angular/common/http";
import { SitedataService } from "./sitedata.service";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    PortfolioComponent,
    TeamComponent,
    ContactUsComponent,
    TestimonialsComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    // CountoModule,
    BrowserAnimationsModule,
    CountUpModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [SitedataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
