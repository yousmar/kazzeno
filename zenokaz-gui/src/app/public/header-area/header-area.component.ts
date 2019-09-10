import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
import * as $ from 'jquery';
import 'magnific-popup';


@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.scss']
})
export class HeaderAreaComponent implements OnInit {


  constructor() {

  }


  ngOnInit() {
    var typed = new Typed('#typed', {
      strings: [
        "Ne vous faites plus rouler <i class='fas fa-exclamation ml-2'></i>",
        "<i class='fas fa-mouse-pointer mr-2'></i>Réservez un garagiste",
        "<i class='fas fa-map-marked-alt mr-2'></i> Il se déplace sur place ",
        "<i class='fas fa-car-side mr-2'></i> Il contrôle le vé​hicule",
        "<i class='fas fa-sort-amount-down mr-2'></i>Réduisez les risques",
        "<i class='far fa-handshake mr-2'></i> Négociez mieux"],
      typeSpeed: 40,
      backSpeed: 5,
      showCursor: true,
      cursorChar: '',
      loop: true
    });

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
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
