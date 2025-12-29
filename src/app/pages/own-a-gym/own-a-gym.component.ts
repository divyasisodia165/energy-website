import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-own-a-gym',
  standalone: true,   // ✅ MOST IMPORTANT
  imports: [
    CommonModule,
    RouterModule      // ✅ routerLink fix
  ],
  templateUrl: './own-a-gym.component.html',
  styleUrls: ['./own-a-gym.component.css']
})
export class OwnAGymComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
