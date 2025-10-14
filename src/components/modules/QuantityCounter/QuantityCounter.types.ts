export type QuantytyCounterProps = {
  value: number;
  onChange?: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
};
