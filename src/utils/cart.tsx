// 'use server';
// import fs from 'fs';
// import path from 'path';

// const cartFilePath = path.join(process.cwd(), 'src', 'fake-db', 'cart.json');

// export const readCartDataInFile = () => {
//     const fileData = fs.readFileSync(cartFilePath, 'utf8');
//     return JSON.parse(fileData);
// };

// export const writeCartDataInFile = (data: any) => {
//     const content = JSON.stringify(data, null, 2);
//     fs.writeFileSync(cartFilePath, content, 'utf8');
// };

interface CartItem {
    id: string;
    menuId: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

export const readCartData = async (): Promise<CartItem[]> => {
    if (typeof window !== "undefined") {  // Check if window is defined
        const data = sessionStorage.getItem('cart');
        return data ? JSON.parse(data) : [];
    }
    return [];
};

export const writeCartData = async (cartData: CartItem[]) => {
    if (typeof window !== "undefined") {  // Check if window is defined
        sessionStorage.setItem('cart', JSON.stringify(cartData));
    }
};
