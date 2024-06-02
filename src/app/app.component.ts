import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true, //Angular 17 sonrasında için varsayılan haline geldi. Standalone componentler herhangi bir module yapısına bağlı kalmadan var olabilirler.
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
 
  ngOnInit(): void {
    this.authService.test().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.authService.testAdmin().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

// Angular 17 öncesinde varsayılan olarak componentler Module yapısında tanımlanıyorlardı.
// Angular Module Örneği
// @NgModule({
//   declarations: [AppComponent], // Component, Directive ve Pipe'ları tanımlar.
//   imports: [], // Dışarıdan alınan modülleri ekler.
//   providers: [], // Servisleri ekler.
//   bootstrap: [AppComponent], // Uygulamanın başlangıç componentini belirler.
// })
// export class AppModule {}