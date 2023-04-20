import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    let offcanvasElementList = [].slice.call(
      document.querySelectorAll('.offcanvas')
    );
    let offcanvasList = offcanvasElementList.map(function (offcanvasEl: any) {
      return new bootstrap.Offcanvas(offcanvasEl);
    });
  }
}
