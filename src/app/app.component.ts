import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from './shared/menubar/menubar.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private meta = inject(Meta);

  title = 'app-angular-sin-ssr';

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Página de prueba LytaSoft 1234',
    });
  }
}
