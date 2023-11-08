import { createContext, useEffect, useState } from "react";
import product from "../pages/admin/Product";

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
    decrementFromCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopProvider = ({ children }: { children: JSX.Element }) => {
    const [cartItems, setCartItems] = useState<{ [key: number]: CartItem }>({});

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    useEffect(() => {
        if (Object.keys(cartItems).length === 0 && localStorage.getItem('cartItems')) {
            console.error("пустой cartItems");
        } else {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const newQuantity = prevItems[product.id] ? prevItems[product.id].quantity + 1 : 1;
            const newCartItem = {
                ...product,
                quantity: newQuantity
            };

            return {
                ...prevItems,
                [product.id]: newCartItem
            };
        });
    };

    const decrementFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            const currentItem = prevItems[productId];
            if (!currentItem) {
                return prevItems;
            }
            if (currentItem.quantity > 1) {
                return {
                    ...prevItems,
                    [productId]: {
                        ...currentItem,
                        quantity: currentItem.quantity - 1
                    }
                };
            } else {
                const updatedItems = { ...prevItems };
                delete updatedItems[productId];
                localStorage.setItem('cartItems', JSON.stringify(updatedItems));
                return updatedItems;
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            delete updatedItems[productId];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems({});
        localStorage.removeItem('cartItems'); // Полная очистка localStorage
    };


    return (
        <ShopContext.Provider value={{ cartItems, addToCart, decrementFromCart, removeFromCart, clearCart}}>
            {children}
        </ShopContext.Provider>
    );
};
