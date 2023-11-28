import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit {
  pictureLogo!: string;


  ngOnInit() {
    this.pictureLogo = 'assets/header/ensitech.png';
  }


}
