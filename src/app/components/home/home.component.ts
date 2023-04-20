import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor() {}

  ngOnInit() {

    document.addEventListener('DOMContentLoaded', (event: Event) => {
      const showNavbar = (
        toggleId: string,
        navId: string,
        bodyId: string,
        headerId: string
      ) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
          toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('bx-x');
            // add padding to body
            bodypd.classList.toggle('body-pd');
            // add padding to header
            headerpd.classList.toggle('body-pd');
          });
        }
      };

      showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll('.nav_link');

      function colorLink(this: Element) {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove('active'));
          this.classList.add('active');
        }
      }

      linkColor.forEach((l) => l.addEventListener('click', colorLink));

      // Your code to run since DOM is loaded and ready
    });

  }


}
