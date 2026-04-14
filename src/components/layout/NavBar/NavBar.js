import { api } from '@/lib/api';
import NavBarClient from './NavBarClient';

export default async function NavBar() {
  let menuItems = [];
  let subscription = false;

  try {
    const apiPath = '/menu/';
    const data = await api.get(apiPath);
    menuItems = data['menu'] || [];
    subscription = data['subscription'] || false;
  } catch (err) {
    console.warn('NavBar: API call failed:', err?.message || err);
  }

  return <NavBarClient menuItems={menuItems} subscription={subscription} />;
}