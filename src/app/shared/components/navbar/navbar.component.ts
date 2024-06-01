import { LoggedInformation } from './../../../features/auth/models/logged-information';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;
  displayUserName: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated){
      this.isLogged = true;
      this.displayUserName = this.authService.tokenPayload?.userName!;
    }

  }
}
