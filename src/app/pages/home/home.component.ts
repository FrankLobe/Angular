import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-home", templateUrl: "./home.component.html", providers: [ ApiService ] })
export class HomeComponent implements OnInit {

    page_content: [string];

    constructor(private apiService: ApiService, private titleService: Title) { }

    ngOnInit():void {
        this.apiService.getPageParagraphs().subscribe((response) => {

            this.page_content = response.page_content;
            this.titleService.setTitle(response.page_title);

        });
    }
}