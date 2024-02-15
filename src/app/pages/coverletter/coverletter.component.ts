import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { ApiService } from "../../api/api.service";
import { Contact } from "../../models/contact.model";

@Component({ selector: "app-coverletter", templateUrl: "./coverletter.component.html", providers: [ ApiService ] })
export class CoverLetterComponent implements OnInit {

    contact = new Contact();

    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private apiService: ApiService,) { }

    ngOnInit(): void {
        this.titleService.setTitle("Frank Lobe - Contact");
        this.contact.contactId = this.route.snapshot.params["contactId"];
        this.apiService.getContact(this.contact.contactId).subscribe((response) => {
            this.contact = response;
        });
    }

    public getDate(): string {
        return new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
   
    public getResume(): string {

        let resume = "/assets/documents/FrankLobeOE.pdf";
        
        if (this.contact.jobType === "Progress OpenEdge 4GL/ABL Application Development") {
            resume = "/assets/documents/FrankLobeOE.pdf";
        }
        else if (this.contact.jobType === "Machine Learning Engineering") {
            resume = "/assets/documents/FrankLobeML.pdf";
        }
        else if (this.contact.jobType === "Website Development") {
            resume = "/assets/documents/FrankLobeWD.pdf";
        }

        return resume;
    }
}