import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-header-container',
    standalone: true,
    templateUrl: './header-container.component.html',
    styleUrl: './header-container.component.scss',
    imports: [CommonModule, HeaderComponent, NavbarComponent]
})
export class HeaderContainerComponent {

}
