import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type LikedProductsProviderProps = {
  children: ReactNode;
};

type LikedProducts = {
  id: number;
  quantity: number;
};

export type LikedProductsContext = {
  toggleLike: (id: number) => void;
  likedProducts: LikedProducts[];
  likesQuantity: number;
  isLiked: boolean;
};

export const LikedProductsContext = createContext({} as LikedProductsContext);

export const useLikedProductsContext = () => {
  return useContext(LikedProductsContext);
};

const LikedProductsProvider = ({ children }: LikedProductsProviderProps) => {
  const [likedProducts, setLikedProducts] = useState<LikedProducts[]>(() => {
    const stored = localStorage.getItem("liked");
    return stored ? JSON.parse(stored) : [];
  });
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const likesQuantity = likedProducts.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const toggleLike = (id: number) => {
    setLikedProducts((currItems) => {
      const existingItems = currItems.find((item) => item.id === id);
      if (existingItems == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.filter((item) => item.id !== id);
      }
    });
    setIsLiked((prev) => !prev);
  };

  return (
    <LikedProductsContext.Provider
      value={{ toggleLike, likedProducts, likesQuantity, isLiked }}
    >
      {children}
    </LikedProductsContext.Provider>
  );
};

export default LikedProductsProvider;
