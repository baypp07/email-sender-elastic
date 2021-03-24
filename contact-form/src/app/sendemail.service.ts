import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SendemailService {
  test = "how are you?";

  constructor(private http:HttpClient) { }


SendEmail(url, data){
  return this.http.post(url,data);
}
}
