import { Component, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="about" class="py-24 bg-transparent relative">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-green/5 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-yellow/5 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" #aboutSection>
        <div class="text-center mb-16 about-item opacity-0">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div class="w-20 h-1 bg-primary-green mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="about-item opacity-0">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Janarthanan M" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              
              <!-- Floating badge -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 z-20 flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div class="w-12 h-12 rounded-full bg-primary-green/20 flex items-center justify-center text-primary-green">
                  <mat-icon>workspace_premium</mat-icon>
                </div>
                <div>
                  <p class="font-bold text-slate-900 dark:text-white">5+ Years</p>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Professional Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-display font-bold text-slate-800 dark:text-slate-100 about-item opacity-0">
              Innovating at the intersection of <span class="text-primary-green">Software</span> & <span class="text-primary-yellow">AI</span>
            </h3>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed about-item opacity-0">
              I am a passionate Backend Developer and AI Automation Engineer with over 5 years of experience building scalable enterprise solutions. My expertise lies in architecting robust CRM and ERP systems that drive business efficiency.
            </p>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed about-item opacity-0">
              Recently, I've been pioneering the integration of AI agents and workflow automation (n8n) into traditional SaaS platforms, helping businesses transition into the intelligent era.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 about-item opacity-0">
              <div class="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <mat-icon class="text-primary-green mt-0.5">code</mat-icon>
                <div>
                  <h4 class="font-semibold text-slate-900 dark:text-white">Backend Dev</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">React, Angular, Node.js</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <mat-icon class="text-primary-yellow mt-0.5">smart_toy</mat-icon>
                <div>
                  <h4 class="font-semibold text-slate-900 dark:text-white">AI & Automation</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Agents, n8n, Chatbots</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <mat-icon class="text-primary-green mt-0.5">domain</mat-icon>
                <div>
                  <h4 class="font-semibold text-slate-900 dark:text-white">Enterprise Arch</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">ERP & CRM Systems</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <mat-icon class="text-primary-yellow mt-0.5">api</mat-icon>
                <div>
                  <h4 class="font-semibold text-slate-900 dark:text-white">API Integration</h4>
                  <p class="text-sm text-slate-500 dark:text-slate-400">REST, GraphQL, Webhooks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSectionRef!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      const items = this.aboutSectionRef.nativeElement.querySelectorAll('.about-item');

      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.aboutSectionRef.nativeElement,
            start: "top 80%",
          }
        }
      );
    }
  }
}
