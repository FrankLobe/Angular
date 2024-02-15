import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-education", templateUrl: "./education.component.html", providers: [ ApiService ] })
export class EducationComponent implements OnInit {
    
    education_content: any[];

    constructor(private apiService: ApiService, private titleService: Title) { }

    ngOnInit(): void {
        this.apiService.getEducations().subscribe((response) => {

            this.education_content = response.education_content;
            this.titleService.setTitle(response.page_title);

        });
    }
}