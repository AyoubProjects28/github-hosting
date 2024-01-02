import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faMagnifyingGlass, faUser, faUserPlus, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  iconEnvelope = faEnvelope;

  iconInstagram = faInstagram;
  iconFacebook = faFacebook;
  iconLinkedin = faLinkedin;
  iconTwitter = faTwitter;

  iconSearch = faMagnifyingGlass;
  iconUser = faUser;
  iconSeller = faUserPlus;
  iconLikedClothes = faHeart;
  iconCart = faCartShopping;

  numClothesCart: number = 0;
  numClothesLikes: number = 0;

  constructor(private router: Router) { }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
