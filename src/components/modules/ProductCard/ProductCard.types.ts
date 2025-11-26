export type ProductCardProps = {
  id: number;
  title: string;
  key: number;
  description?: string;
  price: number;
  discont_price?: number | null;
  categoryId: number;
  image: string;
  children?: React.ReactNode;
  discount?: number;
  className?: string;
};
