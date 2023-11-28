import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderContainerComponent } from "./header-container/header-container.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NavbarComponent, HeaderContainerComponent]
})
export class AppComponent {
  title = 'frustys-frontend';
}
