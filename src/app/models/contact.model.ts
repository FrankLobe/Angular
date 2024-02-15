interface contactData {
    city: string;
    companyAddress: string;
    companyName: string;
    companyWebsite: string;
    contactId: string;
    country: string;
    emailAddress: string;
    errorMessages: string[];
    firstName: string;    
    jobPosting: string;
    jobType: string;
    lastName: string;
    onlineProfile: string;
    positionTitle: string;
    postalCode: string;
    province: string;
    telephoneNumber: string;
    title: string;
  }

export class Contact implements contactData {
    public city: string;
    public companyAddress: string;
    public companyName: string;
    public companyWebsite: string;
    public contactId: string;
    public country: string;
    public emailAddress: string;
    public errorMessages: string[];
    public firstName: string;    
    public jobPosting: string;
    public jobType: string;
    public lastName: string;
    public onlineProfile: string;
    public positionTitle: string;
    public postalCode: string;
    public province: string;
    public telephoneNumber: string;
    public title: string;

    constructor() {
        this.city = "";
        this.companyAddress = "";
        this.companyName = "";
        this.companyWebsite = "";
        this.contactId = "";
        this.country = "Canada";
        this.emailAddress = "";
        this.firstName = "";        
        this.jobPosting = "";
        this.jobType = "Progress OpenEdge 4GL/ABL Application Development";
        this.lastName = "";
        this.onlineProfile = "";
        this.positionTitle = "";
        this.postalCode ="";
        this.province = "";
        this.telephoneNumber = "";
        this.title = "";
    }
}