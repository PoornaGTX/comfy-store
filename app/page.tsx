'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';

export default function Home() {
  const { name } = useAppSelector((state) => state.userState);
  return <h2 className="text-6xl">Home Page</h2>;
}
