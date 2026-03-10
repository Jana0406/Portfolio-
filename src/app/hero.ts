import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home"
      itemscope
      itemtype="https://schema.org/Person"
      aria-label="Janarthanan M – Backend Developer Portfolio"
      class="relative min-h-screen flex items-center pt-20">

      <!-- SEO: Hidden keyword-rich text for search engine crawlers -->
      <span class="sr-only">
        Janarthanan M, also known as Jana or Dev Jana, is an experienced Backend Developer and PHP Developer based in India.
        Jana specializes in JavaScript development, Laravel, Angular, Node.js, MySQL, AI Automation, and enterprise ERP &amp; CRM systems.
        Jana developer portfolio – backend developer, php developer, js developer, javascript developer.
      </span>
      <meta itemprop="name" content="Janarthanan M" />
      <meta itemprop="alternateName" content="Jana" />
      <meta itemprop="jobTitle" content="Backend Developer" />
      <meta itemprop="email" content="mrjana2003@gmail.com" />
      <link itemprop="url" href="https://janadev.in/" />
      <link itemprop="sameAs" href="https://github.com/jana0406" />
      <link itemprop="sameAs" href="https://www.linkedin.com/in/janarthanan0406/" />
      <!-- Background Animated SVG Lines -->
      <div class="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" class="text-primary-green"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left Content -->
          <div class="text-left" #heroContent>
            <div class="hero-item inline-flex items-center px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-medium mb-8 border border-primary-green/20 backdrop-blur-sm">
              <span class="w-2 h-2 rounded-full bg-primary-green mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 class="hero-item text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
              Hi, I'm <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-yellow">Janarthanan M</span>
            </h1>
            
            <div class="hero-item h-12 md:h-16 mb-6">
              <p class="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-300" #typingText></p>
            </div>
            
            <p class="hero-item max-w-xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Building scalable enterprise software, intelligent AI automation systems, and modern web applications with a focus on performance and user experience.
            </p>
            
            <div class="hero-item flex flex-col sm:flex-row items-start gap-4">
              <a href="#projects" class="px-8 py-4 rounded-full bg-primary-green text-white font-medium hover:bg-primary-green/90 transition-all shadow-lg shadow-primary-green/30 hover:shadow-primary-green/50 hover:-translate-y-1 text-center">
                View Projects
              </a>
              <a href="#contact" class="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-800 hover:border-primary-green transition-all shadow-sm hover:shadow-md hover:-translate-y-1 text-center">
                Contact Me
              </a>
            </div>

            <div class="hero-item mt-12 flex items-center gap-6">
              <a href="https://github.com/jana0406" target="_blank" class="text-slate-500 hover:text-primary-green transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/janarthanan0406/" target="_blank" class="text-slate-500 hover:text-primary-green transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="mailto:mrjana2003@gmail.com" class="text-slate-500 hover:text-primary-green transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Right Side: Empty space for the global orbiting circle -->
          <div class="hidden lg:block h-full min-h-[500px]">
            <!-- The orbiting circle from app.ts will appear here -->
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typingText') typingTextRef!: ElementRef;
  @ViewChild('heroContent') heroContentRef!: ElementRef;

  private platformId = inject(PLATFORM_ID);
  private typingInterval: ReturnType<typeof setTimeout> | null = null;
  private phrases = [
    "Backend Developer",
    "AI Automation",
    "ERP & CRM , CMS Architect"
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateContent();
      this.startTypingEffect();
    }
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private animateContent() {
    const items = this.heroContentRef.nativeElement.querySelectorAll('.hero-item');
    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }

  private startTypingEffect() {
    const el = this.typingTextRef.nativeElement;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = this.phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % this.phrases.length;
        typingSpeed = 500;
      }

      this.typingInterval = setTimeout(type, typingSpeed);
    };

    this.typingInterval = setTimeout(type, typingSpeed);
  }
}
