import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    //CommonModule,
    RouterModule,
    //BasicLayoutComponent
    SharedModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
