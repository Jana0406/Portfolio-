import { Component, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MatIconModule } from '@angular/material/icon';
import { ToastService } from './toast.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
    template: `
    <section id="contact" class="py-24 bg-transparent relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" #contactSection>
        <div class="text-center mb-16 contact-header opacity-0">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div class="w-20 h-1 bg-primary-green mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="contact-item opacity-0 space-y-8">
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow duration-300">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <mat-icon>email</mat-icon>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                    <a href="mailto:mrjana2003@gmail.com" class="text-lg font-medium text-slate-900 dark:text-white hover:text-primary-green transition-colors">mrjana2003&#64;gmail.com</a>
                  </div>
                </div>

                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <mat-icon>location_on</mat-icon>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                    <p class="text-lg font-medium text-slate-900 dark:text-white">Available Worldwide (Remote)</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Connect with me</h4>
                <div class="flex gap-4">
                  <a href="https://github.com" target="_blank" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-green hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0A66C2] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#25D366] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-item opacity-0">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow duration-300">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              
              <div class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input type="text" id="name" formControlName="name" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors text-slate-900 dark:text-white" placeholder="John Doe">
                  @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Name is required</p>
                  }
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input type="email" id="email" formControlName="email" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors text-slate-900 dark:text-white" placeholder="john@example.com">
                  @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Valid email is required</p>
                  }
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input type="text" id="subject" formControlName="subject" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors text-slate-900 dark:text-white" placeholder="Project Inquiry">
                  @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Subject is required</p>
                  }
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea id="message" formControlName="message" rows="4" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors text-slate-900 dark:text-white resize-none" placeholder="Tell me about your project..."></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <p class="text-red-500 text-xs mt-1">Message is required</p>
                  }
                </div>

                <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="w-full py-4 rounded-lg bg-primary-green text-white font-medium hover:bg-primary-green/90 transition-all shadow-md shadow-primary-green/20 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2">
                  @if (isSubmitting) {
                    <mat-icon class="animate-spin">autorenew</mat-icon>
                    Sending...
                  } @else {
                    <mat-icon>send</mat-icon>
                    Send Message
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {

  @ViewChild('contactSection') contactSectionRef!: ElementRef;

  private platformId = inject(PLATFORM_ID);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private http = inject(HttpClient);   // ✅ FIX ADDED

  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      const header = this.contactSectionRef.nativeElement.querySelectorAll('.contact-header');
      const items = this.contactSectionRef.nativeElement.querySelectorAll('.contact-item');

      gsap.fromTo(
        [...header, ...items],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: this.contactSectionRef.nativeElement,
            start: 'top 80%',
          }
        }
      );
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const loadingId = this.toastService.loading('Sending message...');

      this.http.post<{ success: boolean }>(
        'https://portkaviapi.techtigers.in/api/contact',
        this.contactForm.value
      ).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.toastService.dismiss(loadingId);

          if (response.success) {
            this.toastService.success('Message sent successfully!');
            this.contactForm.reset();
          } else {
            this.toastService.error('Failed to send message.');
          }
        },
        error: (error: unknown) => {
          this.isSubmitting = false;
          this.toastService.dismiss(loadingId);
          console.error('API Error:', error);
          this.toastService.error('Server error. Please try again.');
        }
      });

    } else {
      this.contactForm.markAllAsTouched();
      this.toastService.error('Please fill in all required fields correctly.');
    }
  }
}