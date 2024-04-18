'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>({ username: 'demo user' });

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <header>
      <div className="mx-auto max-w-6xl px-8 flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              LogOut
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link href={'/login'}>Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href={'/register'}>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
