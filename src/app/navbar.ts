import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <nav 
      class="fixed w-full z-50 transition-all duration-300"
      [class.py-4]="!scrolled()"
      [class.py-2]="scrolled()"
      [class.bg-white/80]="scrolled() && !themeService.isDarkMode()"
      [class.bg-slate-950/80]="scrolled() && themeService.isDarkMode()"
      [class.backdrop-blur-md]="scrolled()"
      [class.shadow-sm]="scrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0 cursor-pointer group" (click)="scrollTo('home')" (keydown.enter)="scrollTo('home')" tabindex="0">
            <span class="font-display font-bold text-2xl tracking-tight text-primary-green inline-block transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">Dev_Janas</span>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              @for (item of navItems; track item.id) {
                <button 
                  (click)="scrollTo(item.id)"
                  class="text-sm font-medium transition-colors hover:text-primary-green"
                  [class.text-slate-900]="!themeService.isDarkMode()"
                  [class.text-slate-300]="themeService.isDarkMode()"
                >
                  {{ item.label }}
                </button>
              }
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <button 
              (click)="themeService.toggleTheme()" 
              class="p-2 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:rotate-12 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              <mat-icon>{{ themeService.isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
            </button>
            
            <div class="md:hidden">
              <button 
                (click)="mobileMenuOpen.set(!mobileMenuOpen())"
                class="p-2 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <mat-icon>{{ mobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            @for (item of navItems; track item.id) {
              <button 
                (click)="scrollTo(item.id); mobileMenuOpen.set(false)"
                class="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {{ item.label }}
              </button>
            }
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
