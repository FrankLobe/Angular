import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

interface contactData {
  city: string;
  companyAddress: string;
  companyName: string;
  companyWebsite: string;
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

@Injectable()
export class ApiService {

  private apiUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  getPageParagraphs(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getCertifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/certification`);
  }

  getContact(contactId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact/${contactId}`);
  }

  getEducations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/education`);
  }

  getEmployments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employment`);
  }

  getExperiences(): Observable<any> {
    return this.http.get(`${this.apiUrl}/experience`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/skill`);
  }

  postContact(contactData: contactData): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<contactData>(`${this.apiUrl}/contact`, { contact: contactData } , { headers });
  }
}
