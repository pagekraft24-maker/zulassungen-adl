import { useEffect } from 'react';
import { buildGraph, OG_IMAGE, SITE_URL } from '@/seo/site';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogLocale?: string;
  noindex?: boolean;
  schema?: object | object[];
}

const BASE_URL = SITE_URL;

const useSEO = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, ogLocale, noindex, schema }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    const abs = (u: string) => (u.startsWith('http') ? u : `${BASE_URL}${u.startsWith('/') ? '' : '/'}${u}`);
    const image = abs(ogImage ?? OG_IMAGE);
    const path = canonical ? (canonical.startsWith('http') ? new URL(canonical).pathname : canonical) : window.location.pathname;
    const fullUrl = `${BASE_URL}${path === '/' ? '/' : path}`;

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', ogTitle ?? title, true);
    setMeta('og:description', ogDescription ?? description, true);
    setMeta('og:type', ogType ?? 'website', true);
    setMeta('og:image', image, true);
    setMeta('og:image:alt', ogTitle ?? title, true);
    setMeta('og:locale', ogLocale ?? 'de_DE', true);
    setMeta('og:site_name', 'Zulassungsdienst an der Lippe', true);
    setMeta('og:url', fullUrl, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle ?? title);
    setMeta('twitter:description', ogDescription ?? description);
    setMeta('twitter:image', image);
    setLink('canonical', fullUrl);

    if (noindex) {
      setMeta('robots', 'noindex, follow');
    } else {
      setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Schema.org JSON-LD (auf jeder Seite: Unternehmen, Website, Seite, Breadcrumb + Seiteninhalte)
    const schemaId = 'json-ld-seo-dynamic';
    document.querySelectorAll(`#${schemaId}`).forEach((n) => n.remove());
    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(buildGraph({ path, title, description, image, pageSchema: schema }));
    document.head.appendChild(script);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, ogLocale, noindex, schema]);
};

export default useSEO;
