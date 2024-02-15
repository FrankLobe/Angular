import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-employment", templateUrl: "./employment.component.html", providers: [ ApiService ] })
export class EmploymentComponent implements OnInit {

    employment_content: any[];

    constructor(private apiService: ApiService, private titleService: Title) { }

    ngOnInit(): void {
        this.apiService.getEmployments().subscribe((response) => {

            this.employment_content = response.employment_content;
            this.titleService.setTitle(response.page_title);

        });
    }
}