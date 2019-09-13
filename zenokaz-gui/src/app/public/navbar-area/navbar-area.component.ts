import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';
@Component({
  selector: 'app-navbar-area',
  templateUrl: './navbar-area.component.html',
  styleUrls: ['./navbar-area.component.scss']
})
export class NavbarAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

       $('.video').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: function (url) {
              var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
              if (!m || !m[1]) return null;
              return m[1];
            },
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          }
        }
      }
    });
  }

}
