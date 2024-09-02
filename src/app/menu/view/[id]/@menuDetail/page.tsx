'use client';
import Banner from '@/components/image/banner';
import { readCartData, writeCartData } from '@/utils/cart';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from "@/context/CartContext";

interface MenuDetailProps {
    id:string;
    name: string;
    rate: number;
    dsc: string;
    img: string;
    price: number;
    country: string;
};

interface ResponseData {
    status: number,
    message: string,
    data?: MenuDetailProps
}

const MenuDetail = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<MenuDetailProps | null>(null);
    const cartContext = useContext(CartContext);
    const getMenuDetail = async () => {
        try {
            const response = await fetch(`/api/menu/view/${params.id}`);
            const res: ResponseData = await response.json();
    
            if (res.data) {
                setData(res.data);
            } else {
                setData(null);
            }
        } catch (error) {
            console.error('Failed to fetch menu detail:', error);
        }
    }

    const addCart = async () => {
        if (data) {
            // Create a cart item based on the menu data
            const cartItem = {
                id: Date.now().toString(),
                menuId: data.id,
                name: data.name,
                img: data.img,
                price: data.price,
                quantity: 1,
            };

            // Use the addItem function from the context to add the item to the cart
            await cartContext?.addItem(cartItem);
        }
    };
    
    useEffect(() => {
        getMenuDetail();
    }, [])
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <Banner image={{ src: data?.img, alt: data?.name }}/>
            {/* className="w-full h-64 object-cover rounded-lg mb-4" */}
            <h2 className="text-2xl font-bold my-2">{data?.name}</h2>
            <p className="mb-4">{data?.dsc}</p>
            <p className="text-lg font-semibold mb-4 text-yellow-400">${data?.price}</p>
            <button onClick={addCart} className="px-4 py-2 rounded-lg border-2 border-[#243c5a] hover:bg-gray-600">
                Add to Cart
            </button>
        </div>
    );
};


export default MenuDetail;