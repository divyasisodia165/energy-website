import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ✅ Add this

@Component({
  selector: 'app-footer',
  standalone: true, // ✅ Make it standalone
  imports: [RouterModule], // ✅ Import RouterModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl: string = 'assets/images/logo.png';

  constructor() { }
}
