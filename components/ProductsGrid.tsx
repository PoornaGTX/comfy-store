import { Card, CardContent } from '@/components/ui/card';
import { formatAsDollars } from '@/utils/formatAsDollars';
import { fetchProducts } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const ProductsGrid = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });
  const products = data?.data || [];

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatAsDollars(price);

        return (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className="p-4">
                <img src={image} alt={title} className="rounded-md h-64 md:h-48 w-full object-cover" />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="text-primary font-light mt-2">{dollarsAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
