import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-certification", templateUrl: "./certification.component.html", providers: [ ApiService ] })
export class CertificationComponent implements OnInit {

    certification_content: any[];

    constructor(private apiService: ApiService, private titleService: Title) { }

    ngOnInit(): void {
        this.apiService.getCertifications().subscribe((response) => {

            this.certification_content = response.certification_content;
            this.titleService.setTitle(response.page_title);

        });
    }
}