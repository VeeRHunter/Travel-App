import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// let apiurl:string = "https://www.majorcompare.com/apiserver1/";
// let apiurl:string = "http://localhost/quickstart/public/";
// let apiurl:string = "http://localhost/quickstart/public/api/";
let apiurl:string = "http://172.104.175.127/";
// let apiurl:string = "http://localhost/Thaiapp/apiserver1/";

/*
  Generated class for the ApiserverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiserverProvider {

  constructor(public http: Http) {
    console.log('Hello ApiserverProvider Provider');
  }
  postData(credentials) {
      console.log(credentials);
      return new Promise((resolve, reject) => {

        // let header:Headers = new Headers({
        //   'Access-Control-Allow-Origin' : '*',
        //   'Access-Control-Request-Method' : 'POST, GET, OPTIONS, PUT',
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json'
        // });  
        

      let headers:Headers = new Headers();
       headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      // headers.append('Access-Control-Allow-Origin','*');
      // headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT');
      // headers.append('Access-Control-Allow-Headers', 'X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET');
      // let options = new RequestOptionsArgs({ headers: headers });


      console.log(headers);
          this.http.post(apiurl, credentials).subscribe(res => {
              console.log(res);
              
              // let response = JSON.parse(res);
              resolve(res.json());
          }, (err) => {
              reject(err);
          });
        
      });
  }
  
  postData_mode2(type, credentials) {
    console.log(credentials);
    return new Promise((resolve, reject) => {
      let header = new Headers({'Content-Type': 'application/json'});  
      // headers.append('Content-Type', 'application/json' );
      // header.append('Access-Control-Allow-Origin','*');
      // header.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT');
        // let header:Headers = new Headers({
        //   // 'Access-Control-Allow-Origin' : '*',
        //   // 'Access-Control-Request-Method' : 'POST, GET, OPTIONS, PUT',
        //   'Content-Type': 'application/json',
        //   // 'Accept': 'application/json'
        // });
      // this.http.get(apiurl + type).subscribe(res => {
        this.http.post(apiurl + type, credentials, { headers: header }).subscribe(res => {
        console.log(res);
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
      
    });
  }


}
