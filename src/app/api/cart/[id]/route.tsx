'use server';
import { NextResponse } from 'next/server';
import { readCartData } from '@/utils/cart';

export async function GET(request: any, { params }: any) {
    const { id } = params;
    const menuMockData = await readCartData()

    // @ts-ignore
    const menuItem = menuMockData.find((item) => item.menuId === id);

    if (menuItem) {
        const response = {
            status: 200,
            message: "Cart fetched successfully.",
            data: menuItem
        }
        return NextResponse.json(response);
    } else {
        const response = {
            status: 404,
            message: "Item not found.",
        }
        return NextResponse.json(response);
    }
}
