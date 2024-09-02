'use server';
import { NextResponse } from 'next/server';
import { readCartData } from '@/utils/cart';

export async function GET() {
    const cartMockData = await readCartData();
    const response = {
        status: 200,
        message: "Menu fetched successfully.",
        data: cartMockData
    }
    return NextResponse.json(response);
}
