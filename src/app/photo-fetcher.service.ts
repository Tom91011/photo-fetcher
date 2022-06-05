import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetcherService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      params: {
        client_id: 
        'ZxKOBom24JCOKoFv08sW_tmnciZQnOWW00wRU4V97Ls'
      }
    })
  }  
}
