import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Contact } from "../../models/contact.model";
import { ApiService } from "../../api/api.service";

@Component({ selector: "app-contact", templateUrl: "./contact.component.html", providers: [ ApiService ] })
export class ContactComponent implements OnInit {

    contact = new Contact();

    constructor(
        private titleService: Title,
        private router: Router,
        private apiService: ApiService
    ) { }

    public getPostalCodeLabel () {
        
        let postalCodeLabel = "Postal Code";
        
        if (this.contact.country === "United States") {
            postalCodeLabel = "ZIP Code";
        }

        return postalCodeLabel;
    }

    public getProvinceLabel () {
        
        let provinceLabel = "Province";
        
        if (this.contact.country === "United States") {
            provinceLabel = "State";
        }

        return provinceLabel;
    }

    getErrorMessages () {

        const errorMessages: string[] = [];
        
        if (this.contact.firstName === "") {
            errorMessages.push("ERROR: First Name is a required value.");
        }

        if (this.contact.emailAddress === "" && this.contact.telephoneNumber === "") {
            errorMessages.push("ERROR: Email address or telephone number is a required value.");
        }

        if (this.contact.companyName === "") {
            errorMessages.push("ERROR: Company Name is a required value.");
        }

        return errorMessages;
    }

    ngOnInit(): void {
        this.titleService.setTitle("Frank Lobe - Contact");
    }

    onSubmit() {
        if (this.getErrorMessages().length !== 0) {
            this.contact.errorMessages = this.getErrorMessages();
        } else {
            this.apiService.postContact(this.contact).subscribe({
                next: (response) => {
                    if (response.status === "Error") {
                        this.contact = response.contact;
                        this.contact.errorMessages = response.errorMessages;
                    } else {
                        this.contact.contactId = response.contactId;
                        localStorage.setItem("contact", JSON.stringify(this.contact));
                        this.router.navigate([`/coverletter/${this.contact.contactId}`]);
                    }
                },
                error: (error) => {
                    console.error("API Error:", error);
                    this.router.navigate(["/error"]);
                }
            });
        }
    }
}