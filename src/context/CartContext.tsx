import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";

type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  product: ProductCardProps;
  quantity: number;
};

export type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  onAddToCart: (product: ProductCardProps) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  };

  // const increaseCartQuantity = (id: number) => {
  //   setCartItems((currItems) => {
  //     if (currItems.find((item) => item.id === id) == null) {
  //       return [...currItems, { id, quantity: 1 }];
  //     } else {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.product.id === id);

      if (existingItem) {
        return currItems.map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Если товара нет, это не должно происходить при increase
      return currItems;
    });
  };

  // const decreaseCartQuantity = (id: number) => {
  //   setCartItems((currItems) => {
  //     if (currItems.find((item) => item.id === id)?.quantity === 1) {
  //       return currItems.filter((item) => item.id !== id);
  //     } else {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.product.id === id);

      if (existingItem?.quantity === 1) {
        return currItems.filter((item) => item.product.id !== id);
      }

      return currItems.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // const removeFromCart = (id: number) => {
  //   setCartItems((currItems) => {
  //     return currItems.filter((item) => item.id !== id);
  //   });
  // };

  const clearCart = () => setCartItems([]);

  console.log("Provider CartContext object:", CartContext);
  console.log("CartProvider mounted");

  // const onAddToCart = (product: ProductCardProps) => {
  //   setCartItems((currItems) => {
  //     const existing = currItems.find((item) => item.id === product.id);

  //     if (existing) {
  //       return currItems;
  //     }

  //     return [
  //       ...currItems,
  //       {
  //         ...product,
  //         quantity: 1,
  //         discont_price: product.discont_price ?? product.price * 0.5,
  //       },
  //     ];
  //   });
  // };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) =>
      currItems.filter((item) => item.product.id !== id)
    );
  };

  const onAddToCart = (product: ProductCardProps) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.product.id === product.id
      );

      // Если товар уже в корзине - удаляем его (toggle)
      if (existingItem) {
        return currItems.filter((item) => item.product.id !== product.id);
      }

      // Если товара нет - добавляем с quantity: 1
      return [...currItems, { product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        onAddToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
