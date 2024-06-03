import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class AppButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#007bff');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
 }
