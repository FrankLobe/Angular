import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";
import { Contact } from "../../models/contact.model";

@Component({ selector: "app-skill", templateUrl: "./skill.component.html", providers: [ ApiService ] })
export class SkillComponent implements OnInit {

    skill_content_all: [string];    
    skill_content_ml: [string];
    skill_content_oe: [string];
    skill_content_wd: [string];

    contact: Contact;

    public getSkills () {
        let skills = this.skill_content_all;

        if (this.contact) {
            if (this.contact.jobType === "Machine Learning Engineering") {
                skills = this.skill_content_ml;
            } else if (this.contact.jobType === "Progress OpenEdge 4GL/ABL Application Development") {
                skills = this.skill_content_oe;
            } else if (this.contact.jobType === "Website Development") {
                skills = this.skill_content_wd;
            }
        }

        return skills;
    }

    constructor(private apiService: ApiService, private titleService: Title) {
        this.contact = JSON.parse(localStorage.getItem("contact"));
    }

    ngOnInit():void {
        this.apiService.getSkills().subscribe((response) => {

            this.skill_content_all = response["All"];
            this.skill_content_ml = response["Machine Learning Engineering"];
            this.skill_content_oe = response["Progress OpenEdge 4GL/ABL Application Development"];
            this.skill_content_wd = response["Website Development"];
            this.titleService.setTitle(response.page_title);
        });
    }
}