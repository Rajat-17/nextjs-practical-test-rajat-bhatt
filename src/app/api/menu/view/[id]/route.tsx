'use server';
import { NextResponse } from 'next/server';
import { readMenuData } from '@/utils/menu';

export async function GET(request: any, { params }: any) {
    const { id } = params;
    const menuMockData = await readMenuData()

    console.log("===== menuMockData ===== ", menuMockData)
    const menuItem = menuMockData.find((item: { id: any; }) => item.id === id);

    if (menuItem) {
        const response = {
            status: 200,
            message: "Menu fetched successfully.",
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
