'use server';
import { NextResponse } from 'next/server';
import { readMenuData } from '@/utils/menu';

export async function GET() {
    const menuMockData = await readMenuData();
    const response = {
        status: 200,
        message: "Menu fetched successfully.",
        data: menuMockData
    }
    return NextResponse.json(response);
}
