import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tab: any[] = [1, 2];

  ngOnInit(): void {
    //document.body.style.overflow = 'hidden';
  }

  ngAfterViewInit() {
    window.addEventListener('load', function () {
      // window.scrollTo(0, 0);
    });
  }

}
