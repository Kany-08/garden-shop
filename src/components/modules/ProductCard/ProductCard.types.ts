export interface ProductCardProps {
  id?: string;
  title: string;
  description?: string;
  price: number;
  salePrice?: number;
  salePercent?: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isFavorite?: boolean;
  onAddToCart?: (productId: number) => void;
  onViewDetails?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
  children?: React.ReactNode;
  className?: string;
}
