import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetcherService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 
        'client-ID ZxKOBom24JCOKoFv08sW_tmnciZQnOWW00wRU4V97Ls'
      }
    })
  }  
}
