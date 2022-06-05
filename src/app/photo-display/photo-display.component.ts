import { Component, OnInit } from '@angular/core';
import { PhotoFetcherService } from '../photo-fetcher.service'; 

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.sass']
})
export class PhotoDisplayComponent implements OnInit {
  fetchedUrl: string = ""

  constructor(private photoFetcher: PhotoFetcherService) {
    this.photoFetcher.getPhoto().subscribe((response) => {
      console.log(response.urls.regular); 
      this.fetchedUrl = response.urls.regular     
    })
   }

  ngOnInit(): void {}
}