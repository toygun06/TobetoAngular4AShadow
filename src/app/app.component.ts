import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*title = 'Northwind Market';

  cartCount: number = 0;

  products: { name: string; price: number; discontinued: boolean }[] =[
    {
      name: "Çay",
      price: 100,
      discontinued: false
    },
    {
      name: "Kahve",
      price: 200,
      discontinued: true
    },
    {
      name: "Su",
      price: 50,
      discontinued: false
    },
    {
      name: "Meyve Suyu",
      price: 20,
      discontinued: false
    },
    {
      name: "Maden Suyu",
      price: 7.5,
      discontinued: true
    }
  ]

  onAddProductToCart(): void {
    this.cartCount += 1;

    console.log('Ürün sepete eklendi.');
  }
  */
}
