"use client";
import { createContext, useReducer, ReactNode, useEffect } from 'react';
import { readCartData, writeCartData } from '@/utils/cart';

interface CartItem {
    id: string;
    menuId: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    carts: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (menuId: string) => void;
    getItemByMenuId: (menuId: string) => CartItem | undefined;
    listItems: () => CartItem[];
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartItem[], action: any): CartItem[] => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.menuId !== action.payload);
        case 'SET_CART':
            return action.payload;
        default:
            return state;
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [carts, dispatch] = useReducer(cartReducer, []);

    useEffect(() => {
        const initializeCart = async () => {
            const cartData = await readCartData();
            dispatch({ type: 'SET_CART', payload: cartData });
        };
        initializeCart();
    }, []);

    const addItem = async (item: CartItem) => {
        const cartData = await readCartData();
        const existingItemIndex = cartData.findIndex((cartItem: CartItem) => cartItem.menuId === item.menuId);
    
        if (existingItemIndex !== -1) {
            cartData[existingItemIndex].quantity += 1;
        } else {
            cartData.push(item);
        }
    
        await writeCartData(cartData);
        dispatch({ type: 'SET_CART', payload: cartData });
    };
    

    const removeItem = async (menuId: string) => {
        let cartData = await readCartData();
        const itemIndex = cartData.findIndex((item: CartItem) => item.menuId === menuId);
    
        if (itemIndex !== -1) {
            if (cartData[itemIndex].quantity > 1) {
                cartData[itemIndex].quantity -= 1;
            } else {
                cartData = cartData.filter((item: CartItem) => item.menuId !== menuId);
            }
    
            await writeCartData(cartData);
            dispatch({ type: 'SET_CART', payload: cartData });
        }
    };
    

    const getItemByMenuId = (menuId: string) => {
        console.log("===== getItemByMenuId ===== ", menuId)
        return carts.find(item => item.menuId === menuId);
    };

    return (
        <CartContext.Provider value={{ carts, addItem, removeItem, getItemByMenuId, listItems: () => carts }}>
            {children}
        </CartContext.Provider>
    );
};
