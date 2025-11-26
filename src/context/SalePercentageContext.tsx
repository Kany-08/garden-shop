import { createContext, useContext, useMemo, type ReactNode } from "react";

type SalePercentageProviderProps = {
  children: ReactNode;
  price: number;
  discont_price: number;
};

export type SalePercentageContext = {
  percentage: number;
};

export const SalePercentageContext =
  createContext<SalePercentageContext | null>(null);

export const useSalePercentageContext = () => {
  const salePercentageContext = useContext(SalePercentageContext);
  if (!salePercentageContext) {
    throw new Error(
      "useSalePercentageContext has to be used within a <SalePercentageContext.Provider>"
    );
  }
  return salePercentageContext;
};

export const SalePercentageProvider = ({
  children,
  price,
  discont_price,
}: SalePercentageProviderProps) => {
  const calcSalePercentage = (price: number, discont_price: number) => {
    if (!discont_price) return 0;

    return Math.round(((price - discont_price) / price) * 100);
  };

  const percentage = useMemo(
    () => calcSalePercentage(price, discont_price),
    [price, discont_price]
  );

  return (
    <SalePercentageContext.Provider value={{ percentage }}>
      {children}
    </SalePercentageContext.Provider>
  );
};
export default SalePercentageProvider;
