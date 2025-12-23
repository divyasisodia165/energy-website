import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Component initialization logic here
  }

  // Method to handle JOIN NOW button click
  onJoinNow(): void {
    console.log('Join Now clicked');
    // Add navigation or modal logic here
  }

  // Method to handle GET IN TOUCH button click
  onGetInTouch(): void {
    console.log('Get In Touch clicked');
    // Add navigation or modal logic here
  }

}