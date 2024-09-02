'use server';
import fs from 'fs';
import path from 'path';

// Path to the cart file
const menuFilePath = path.join(process.cwd(), 'src', 'fake-db', 'menu.json');

// Function to read the cart data from the JSON file
export const readMenuData = () => {
    const fileData = fs.readFileSync(menuFilePath, 'utf8');

    // Parse the JSON string
    return JSON.parse(fileData);
};
