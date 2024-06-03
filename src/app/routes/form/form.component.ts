import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanComponentDeactivate } from '../../core/auth/guards/isDirty.guard';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoadingService } from '../../features/loading/loading.service';
import { LoadingOverlayComponent } from '../../features/loading/loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingOverlayComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormComponent implements CanComponentDeactivate {

onInputChange() {
throw new Error('Method not implemented.');

}
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private loadingService: LoadingService) {
    this.myForm = this.fb.group({
      name: [''],
      email: ['']
    });

    // Formda değişiklik olduğunda formDirty'yi güncelle
    this.myForm.valueChanges.subscribe(() => {
      this.formDirty = true;
    });
  }

  formDirty: boolean = false; // Formun durumunu takip eden değişken

  canDeactivate(): boolean {
    if (this.formDirty) {
      return confirm('Formda yaptığınız değişiklikler kaybolacak. Devam etmek istiyor musunuz?')
    }
    return true;
  }

  onSubmit() {
    // Formu submit ettiğinizde formu işleyin ve formu resetleyin
    this.loadingService.showLoading(); // Loading başlat

    console.log('Form submitted:', this.myForm.value);
    setTimeout(() => { // Simüle edilen bir backend işlemi için setTimeout kullanıldı
      this.formDirty = false;
      this.myForm.reset();
      this.loadingService.hideLoading(); // Loading gizle
    }, 2000); // Simüle edilen backend işlemi için 2 saniye bekletildi
  }
}
