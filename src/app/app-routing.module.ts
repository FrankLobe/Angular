import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CertificationComponent } from "./pages/certification/certification.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CoverLetterComponent } from "./pages/coverletter/coverletter.component";
import { EducationComponent } from "./pages/education/education.component";
import { EmploymentComponent } from "./pages/employment/employment.component";
import { ErrorComponent } from "./pages/error/error.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { HomeComponent } from "./pages/home/home.component";
import { SkillComponent } from "./pages/skill/skill.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "certification", component: CertificationComponent},
  {path: "contact", component: ContactComponent},
  {path: "coverletter", redirectTo: "/contact", pathMatch: "full"},
  {path: "coverletter/:contactId", component: CoverLetterComponent},
  {path: "education", component: EducationComponent},
  {path: "employment", component: EmploymentComponent},
  {path: "error", component: ErrorComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "home", component: HomeComponent},
  {path: "skill", component: SkillComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
