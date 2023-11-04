import { createContext, useState } from "react";

interface Product {
    id: number;
    name: string;
    photos: string[];
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}

interface ShopContextValue {
    cartItems: { [key: number]: CartItem };
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopProvider = ({ children }: { children: JSX.Element }) => {
    const [cartItems, setCartItems] = useState<{ [key: number]: CartItem }>({});

    const addToCart = (product: Product) => {

        setCartItems((prevItems) => {
            if (prevItems[product.id]) {
                return {
                    ...prevItems,
                    [product.id]: {
                        ...product,
                        quantity: prevItems[product.id].quantity + 1
                    }
                };
            } else {
                return {
                    ...prevItems,
                    [product.id]: {
                        ...product,
                        quantity: 1
                    }
                };
            }
        });
        console.log(cartItems.toString())
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            delete updatedItems[productId]; // Удаляем товар по productId
            return updatedItems;
        });
    };

    return (
        <ShopContext.Provider value={{cartItems, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};
