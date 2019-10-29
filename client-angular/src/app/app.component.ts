import { Component } from '@angular/core';
import { Products } from './products';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products';
  prodotto:Products[];
  private BASE_URL:string = '/api';

  constructor(private http: HttpClient) {}

     ngOnInit(): void {

      this.http.get('http://GITPOD_SERVER_URL/api').subscribe(data => {
        this.prodotto = data['products'];
      });
    }

}
