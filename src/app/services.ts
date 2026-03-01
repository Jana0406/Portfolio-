import { Component, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MatIconModule } from '@angular/material/icon';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="services" class="py-24 bg-transparent relative overflow-hidden">
      <!-- Decorative background elements -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-green/5 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" #servicesSection>
        <div class="text-center mb-16 service-header opacity-0">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">What I Do</h2>
          <div class="w-20 h-1 bg-primary-green mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Providing end-to-end software solutions, from conceptualization to deployment, focusing on scalability and user experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <div class="service-card opacity-0 group bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary-green/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              
              <!-- Hover Gradient Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  <mat-icon class="text-3xl w-8 h-8">{{ service.icon }}</mat-icon>
                </div>
                
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-green transition-colors">{{ service.title }}</h3>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('servicesSection') servicesSectionRef!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  services: Service[] = [
    {
      title: 'Backend Web Development',
      description: 'Building responsive, high-performance web applications using modern frameworks like React and Angular, backed by robust Node.js or PHP architectures.',
      icon: 'web'
    },
    {
      title: 'Enterprise Software Development',
      description: 'Architecting scalable, secure, and maintainable software solutions tailored for large organizations, ensuring high availability and data integrity.',
      icon: 'business'
    },
    {
      title: 'AI Automation Solutions',
      description: 'Integrating intelligent AI agents and automating complex workflows using tools like n8n to optimize business processes and reduce manual effort.',
      icon: 'smart_toy'
    },
    {
      title: 'Custom CRM & ERP',
      description: 'Designing and developing specialized Customer Relationship Management and Enterprise Resource Planning systems to fit unique business needs.',
      icon: 'dashboard'
    },
    {
      title: 'API Development',
      description: 'Creating secure, well-documented RESTful and GraphQL APIs for seamless integration between diverse systems and third-party services.',
      icon: 'api'
    },
    {
      title: 'Blockchain Research',
      description: 'Exploring and implementing Web3 technologies, smart contracts, and decentralized applications to future-proof enterprise solutions.',
      icon: 'currency_bitcoin'
    }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      const header = this.servicesSectionRef.nativeElement.querySelectorAll('.service-header');
      const cards = this.servicesSectionRef.nativeElement.querySelectorAll('.service-card');
      
      gsap.fromTo([...header, ...cards], 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.servicesSectionRef.nativeElement,
            start: "top 80%",
          }
        }
      );
    }
  }
}
