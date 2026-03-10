import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

/**
 * ─────────────────────────────────────────────────────────────
 *  SeoService – Dynamic SEO meta-tag manager
 *  (Compatible with Angular SSR / Server-Side Rendering)
 *
 *  Usage:
 *    private seoService = inject(SeoService);
 *    this.seoService.update({ title: '...', description: '...' });
 *    // or use a preset:
 *    this.seoService.applyPortfolioDefaults();
 * ─────────────────────────────────────────────────────────────
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta  = inject(Meta);

  // ── Site-wide constants ──────────────────────────────────
  private readonly SITE_NAME   = 'Dev_Jana | janadev.in';
  private readonly BASE_URL    = 'https://janadev.in';
  private readonly DEFAULT_IMG = 'https://janadev.in/favicon.png';

  // ── Default / Portfolio keywords ─────────────────────────
  private readonly DEFAULT_KEYWORDS = [
    // Name / identity
    'jana', 'janarthanan', 'janarthanan m', 'jana developer', 'dev jana',
    // Role keywords
    'backend developer', 'backend developer india', 'full stack developer',
    'full stack laravel developer', 'full stack php developer',
    // PHP ecosystem
    'php developer', 'php web developer', 'laravel developer',
    'laravel php developer', 'laravel web development', 'laravel backend developer',
    'laravel api developer', 'laravel rest api', 'laravel eloquent',
    'laravel livewire', 'laravel filament', 'laravel inertia',
    // JavaScript ecosystem
    'js developer', 'javascript developer', 'javascript web developer',
    'angular developer', 'angular developer india', 'react developer',
    'node.js developer', 'node js backend developer',
    'next.js developer', 'typescript developer',
    // Databases
    'mysql developer', 'postgresql developer', 'mongodb developer',
    'redis developer', 'database developer',
    // DevOps / Tools
    'docker developer', 'git developer', 'api developer', 'rest api developer',
    'graphql developer',
    // AI & Automation
    'ai automation engineer', 'n8n automation', 'ai integration developer',
    // Enterprise systems
    'erp developer', 'crm developer', 'saas developer',
    // General
    'web developer', 'software engineer', 'software developer india',
    'freelance developer', 'developer'
  ].join(', ');

  // ── Default full SEO config ──────────────────────────────
  private readonly DEFAULT_CONFIG: Required<SeoConfig> = {
    title:
      'Janarthanan M | Full Stack Laravel & PHP Developer | Backend, JavaScript & AI Expert | Jana',
    description:
      'Jana (Janarthanan M) — Full Stack Laravel & PHP Developer with 5+ years building ' +
      'enterprise ERP, CRM & SaaS platforms. Expert in JavaScript, Angular, Node.js, ' +
      'React, MySQL and AI Automation. Available for freelance & full-time work.',
    keywords: this.DEFAULT_KEYWORDS,
    ogTitle:
      'Janarthanan M | Full Stack Laravel & PHP Developer | Backend & JS Expert',
    ogDescription:
      'Jana – Full Stack Laravel PHP Developer & AI Automation Engineer. ' +
      '5+ years in ERP, CRM, SaaS. PHP, JavaScript, Angular, Node.js, MySQL, Docker.',
    ogImage: this.DEFAULT_IMG,
    ogUrl: `${this.BASE_URL}/`,
    twitterTitle:
      'Janarthanan M | Laravel PHP & Backend Developer | Jana',
    twitterDescription:
      'Jana – Full Stack Laravel/PHP & JavaScript Developer. ERP, CRM, SaaS expert. ' +
      'Angular, Node.js, AI Automation. Open to opportunities.',
    twitterImage: this.DEFAULT_IMG,
    canonical: `${this.BASE_URL}/`,
  };

  /**
   * Apply full portfolio defaults — call this in AppComponent.ngOnInit()
   */
  applyPortfolioDefaults(): void {
    this.update(this.DEFAULT_CONFIG);
  }

  /**
   * Update any subset of SEO meta tags dynamically.
   * Merges with defaults so you only need to pass what changes.
   */
  update(config: SeoConfig): void {
    const c: Required<SeoConfig> = { ...this.DEFAULT_CONFIG, ...config };

    // ── Page Title ────────────────────────────────────────
    this.title.setTitle(c.title);

    // ── Standard meta ────────────────────────────────────
    this.setTag('name',        'title',         c.title);
    this.setTag('name',        'description',   c.description);
    this.setTag('name',        'keywords',      c.keywords);
    this.setTag('name',        'author',        'Janarthanan M');
    this.setTag('name',        'robots',        'index, follow, max-snippet:-1, max-image-preview:large');
    this.setTag('name',        'googlebot',     'index, follow');
    this.setTag('name',        'language',      'English');
    this.setTag('name',        'revisit-after', '7 days');
    this.setTag('name',        'theme-color',   '#00c853');

    // ── Open Graph ───────────────────────────────────────
    this.setTag('property',    'og:type',        'website');
    this.setTag('property',    'og:site_name',   this.SITE_NAME);
    this.setTag('property',    'og:url',         c.ogUrl || c.canonical);
    this.setTag('property',    'og:title',       c.ogTitle);
    this.setTag('property',    'og:description', c.ogDescription);
    this.setTag('property',    'og:image',       c.ogImage);
    this.setTag('property',    'og:locale',      'en_US');

    // ── Twitter Card ─────────────────────────────────────
    this.setTag('name',        'twitter:card',        'summary_large_image');
    this.setTag('name',        'twitter:url',         c.ogUrl || c.canonical);
    this.setTag('name',        'twitter:title',       c.twitterTitle);
    this.setTag('name',        'twitter:description', c.twitterDescription);
    this.setTag('name',        'twitter:image',       c.twitterImage);
    this.setTag('name',        'twitter:creator',     '@jana0406');

    // ── Canonical link ───────────────────────────────────
    this.updateCanonical(c.canonical);
  }

  // ── Helpers ──────────────────────────────────────────────

  private setTag(
    attrName: 'name' | 'property',
    attrValue: string,
    content: string
  ): void {
    this.meta.updateTag({ [attrName]: attrValue, content });
  }

  private updateCanonical(url: string): void {
    // Only works in browser; during SSR the canonical in index.html covers it
    if (typeof document !== 'undefined') {
      let link: HTMLLinkElement | null =
        document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }
  }
}
