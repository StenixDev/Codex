'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  {
    id: 1,
    menu: 'Dashboard',
    href: '/dashboard',
  },

  {
    id: 2,
    menu: 'Settings',
    href: '/settings',
  },
];

function Navigation() {
  const path = usePathname();

  console.log(path);
  return (
    <div className='flex gap-5'>
      {Links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={`bg-blue-400 p-5 text-white ${path === link.href && 'bg-blue-800'}`}
        >
          {link.menu}
        </Link>
      ))}
    </div>
  );
}
export default Navigation;
