import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-experience", templateUrl: "./experience.component.html", providers: [ ApiService ] })
export class ExperienceComponent implements OnInit {

    experience_content: any[];

    constructor(private apiService: ApiService, private titleService: Title) { }

    ngOnInit():void {
        this.apiService.getExperiences().subscribe((response) => {

            this.experience_content = response.experience_content;
            this.titleService.setTitle(response.page_title);

        });
    }
}