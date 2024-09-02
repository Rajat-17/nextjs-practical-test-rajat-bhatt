"use client";
import { useEffect, useState } from 'react';
import MenuCard from "@/components/menu/menu";
import Link from 'next/link';

interface MenuData {
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
    data?: MenuData[]
}

const Menu = () => {
    const [data, setData] = useState<MenuData[]>([]);

    const getAllMenu = async () => {
        try {
            const response = await fetch('/api/menu');
            const res: ResponseData = await response.json();
    
            if (res.data) {
                setData(res.data);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error('Failed to fetch menu data:', error);
        }
    }

    useEffect(() => {
        getAllMenu();
    }, [])
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((menu, index) => 
                    <div key={`${menu.id}-${index}`}>
                        <Link href={`/menu/view/`+menu.id}>    
                            <MenuCard 
                                id={menu.id}
                                name={menu.name} 
                                rate={menu.rate} 
                                img={menu.img}
                                dsc={menu.dsc} 
                                price={menu.price}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu;