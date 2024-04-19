'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';

import { fetchProducts } from '@/utils/actions';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function Home() {
  const { name } = useAppSelector((state) => state.userState);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['Products'],
    queryFn: () => fetchProducts(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <FeaturedProducts />
      </HydrationBoundary>
    </>
  );
}
