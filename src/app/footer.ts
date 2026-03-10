import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-white dark:bg-slate-950 border-t-4 border-primary-green pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex flex-col items-center md:items-start group cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
            <span class="font-display font-bold text-2xl tracking-tight text-primary-green mb-2 inline-block transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">Dev_Jana</span>
            <p class="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left max-w-sm transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
              Building scalable enterprise software, intelligent AI automation systems, and modern web applications.
            </p>
          </div>
          
          <div class="flex gap-6">
            <a href="https://github.com/jana0406" target="_blank" class="text-slate-400 hover:text-primary-green transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/janarthanan0406/" target="_blank" class="text-slate-400 hover:text-primary-green transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            &copy; {{ currentYear }} Janarthanan M. All rights reserved.
          </p>
          <div class="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" class="hover:text-primary-green transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-primary-green transition-colors">Terms of Service</a>
          </div>
        </div>

        <!-- SEO: Machine-readable contact / identity info (visually hidden) -->
        <address class="sr-only" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">Janarthanan M</span> –
          <span itemprop="alternateName">Jana</span>,
          <span itemprop="jobTitle">Backend Developer</span>,
          PHP Developer, JavaScript Developer, Laravel Developer, Angular Developer, Node.js Developer.
          Contact: <a itemprop="email" href="mailto:mrjana2003@gmail.com">mrjana2003@gmail.com</a>.
          GitHub: <a itemprop="sameAs" href="https://github.com/jana0406">github.com/jana0406</a>.
          LinkedIn: <a itemprop="sameAs" href="https://www.linkedin.com/in/janarthanan0406/">linkedin.com/in/janarthanan0406</a>.
        </address>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
