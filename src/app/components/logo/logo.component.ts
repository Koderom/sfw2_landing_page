import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="flex items-center space-x-3">
      <!-- SVG Logo -->
      <svg
        class="w-10 h-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Fondo circular del logo -->
        <circle cx="50" cy="50" r="48" fill="#10b981" opacity="0.1" stroke="#10b981" stroke-width="2"/>
        
        <!-- Símbolo de salud - corazón con cruz -->
        <g transform="translate(50, 50)">
          <!-- Cruz (símbolo médico) -->
          <rect x="-8" y="-24" width="16" height="48" fill="#10b981"/>
          <rect x="-24" y="-8" width="48" height="16" fill="#10b981"/>
          
          <!-- Corazón envolvente -->
          <path
            d="M 0,-8 C -12,-20 -28,-15 -28,-2 C -28,15 0,30 0,30 C 0,30 28,15 28,-2 C 28,-15 12,-20 0,-8 Z"
            fill="none"
            stroke="#10b981"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
        </g>
      </svg>

      <!-- Nombre de la empresa -->
      <div class="flex flex-col">
        <span class="text-xl font-bold text-emerald-100">HAMO</span>
        <span class="text-xs text-emerald-300 leading-none">Digital Health</span>
      </div>
    </div>
  `,
  styles: []
})
export class LogoComponent {}
