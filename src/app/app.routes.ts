import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { productsRoutes } from './routes/products/products.routes';
import { authRoutes } from './routes/auth/auth.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { PipeExamplePageComponent } from './routes/pipe-example-page/pipe-example-page.component';

export const routes: Routes = [
  {
    path: '', // Route belirtilen path ile eşleştiğinde
    component: HomePageComponent, // İlgili componenti AppComponent'ten başlayarak
    // ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirir.
  },
  ...authRoutes, // authRoutes içindeki tüm route'ları routes'a ekler.
  // ... spread operator ile bir array içindeki tüm elemanlarını tek tek ilgili yere yerleştirir..
  ...productsRoutes,
  ...categoriesRoutes,
  {
    path: 'pipe-example', // Route belirtilen path ile eşleştiğinde
    component: PipeExamplePageComponent, // İlgili componenti AppComponent'ten başlayarak
    // ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirir.
  }
];