'use client';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from "@/context/CartContext";

interface CartDetailProps {
    id: string;
    menuId: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
};

const CartDetail = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<CartDetailProps | null>(null);
    const [totalPrice, setTotalPrice] = useState<number>(0.00);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        if (cartContext) {
            const cartItem = cartContext.getItemByMenuId(params.id);
            if (cartItem) {
                setData(cartItem);
                setTotalPrice(cartItem.price * cartItem.quantity);
            } else {
                setData(null);
                setTotalPrice(0.00);
            }
        }
    }, [params.id, cartContext]);

    const handleRemove = async () => {
        if (data) {
            await cartContext?.removeItem(data.menuId);

            // Update the local state based on the updated cart
            const updatedItem = cartContext?.getItemByMenuId(data.menuId);
            if (updatedItem) {
                setData(updatedItem);
                setTotalPrice(updatedItem.price * updatedItem.quantity);
            } else {
                setData(null);
                setTotalPrice(0.00);
            }
        }
    };

    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {data ? (
                <div key={data.id} className="flex justify-between mb-2">
                    <span>{data.name} (x{data.quantity})</span>
                    <span>${data.price.toFixed(2)}</span>
                    <button onClick={handleRemove} className="px-4 py-2 rounded-lg border-2 border-[#243c5a] hover:bg-gray-600">
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            ) : (
                <p className="text-gray-400">No items in cart.</p>
            )}
            <hr className="my-4" />
            <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartDetail;
