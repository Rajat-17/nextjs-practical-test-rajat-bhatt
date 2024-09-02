'use server';
import fs from 'fs';
import path from 'path';

// Path to the cart file
const cartFilePath = path.join(process.cwd(), 'src', 'fake-db', 'cart.json');

// Function to read the cart data from the JSON file
export const readCartData = () => {
    const fileData = fs.readFileSync(cartFilePath, 'utf8');

    // Parse the JSON string
    return JSON.parse(fileData);
};

// Function to write the updated cart data back to the JSON file
export const writeCartData = (data: any) => {
    const content = JSON.stringify(data, null, 2);
    fs.writeFileSync(cartFilePath, content, 'utf8');
};
