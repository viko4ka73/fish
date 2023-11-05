import { createContext, useEffect, useState } from "react";

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
        console.log(cartItems)
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            delete updatedItems[productId]; // Удаляем товар по productId
            return updatedItems;
        });
    };

    return (
        <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};
