import { api } from '@/lib/api';
import FooterClient from './FooterClient';

export default async function Footer() {
  let footerItems = [];
  let newsItems = [];

  try {
    const apiPath = '/footer';
    const data = await api.get(apiPath);
    footerItems = data['footer'] || [];
    newsItems = data['news'] || [];
  } catch (err) {
    console.warn('Footer: API call failed:', err?.message || err);
  }

  return (
    <FooterClient
      footerItems={footerItems}
      newsItems={newsItems}
    />
  );
}