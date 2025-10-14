export type CartItemProps = {
  id?: string;
  title: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  count?: number;
  onRemove?: () => void;
  onMinus?: () => void;
  onPlus?: () => void;
};
