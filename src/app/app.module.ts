import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AddressComponent } from "./components/address/address.component";
import { HeaderComponent } from "./components/header/header.component";
import { LinkComponent } from "./components/links/link.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PhotoComponent } from "./components/photo/photo.component";

import { CertificationComponent } from "./pages/certification/certification.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CoverLetterComponent } from "./pages/coverletter/coverletter.component";
import { EducationComponent } from "./pages/education/education.component";
import { EmploymentComponent } from "./pages/employment/employment.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { HomeComponent } from "./pages/home/home.component";
import { SkillComponent } from "./pages/skill/skill.component";

@NgModule({
  declarations: [
    AddressComponent,
    AppComponent,
    CertificationComponent,
    ContactComponent,
    CoverLetterComponent,
    EducationComponent,
    EmploymentComponent,
    ExperienceComponent,
    HeaderComponent,
    HomeComponent,
    LinkComponent,
    NavigationComponent,
    PhotoComponent,
    SkillComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
