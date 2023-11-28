import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  nav_link_1!: string;
  nav_link_2!: string;
  nav_link_3!: string;
  nav_link_4!: string;



  ngOnInit() {
    this.nav_link_1 = "https://google.com";  // créer des ancres plus tard pour rediriger vers la section souhaitée
    this.nav_link_2 = "https://google.com";
    this.nav_link_3 = "https://sites.google.com/view/gouguelesiteseo/cr%C3%A9er-un-site/cr%C3%A9er-une-page-mentions-l%C3%A9gales";
    this.nav_link_4 = "https://google.com";
  }
}
