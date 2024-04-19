'use client';
import { links } from '@/utils/links';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        return (
          <Button asChild key={link.href} variant={pathname === link.href ? 'default' : 'link'}>
            <Link href={link.href} className="flex items-center gap-x-2">
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default NavLinks;
