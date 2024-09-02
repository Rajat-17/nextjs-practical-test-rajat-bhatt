"use client";
import React from 'react';
import Banner from '../image/banner';

type MenuCardProps = {
    id:string;
    name: string;
    rate: number;
    dsc: string;
    img: string;
    price: number;
};

const MenuCard: React.FC<MenuCardProps> = ({ name, rate, dsc, img, id, price }) => {
    const MAX_DSC_LENGTH = 40;
    const truncatedDsc = dsc.length > MAX_DSC_LENGTH ? `${dsc.substring(0, MAX_DSC_LENGTH)}...` : dsc;
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700">
            <div className="w-full h-64">
                <Banner image={{ src: img, alt: id }} />
            </div>

            <div className="p-4 h-40">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <div className="flex items-center mb-2 justify-between">
                    <div className="text-sm font-medium text-yellow-400">
                        ${price.toFixed(2)}
                    </div>
                    <div>    
                        <span className="text-yellow-500 mr-2">
                            {'★'.repeat(Math.floor(rate))}{' '}
                            {rate % 1 !== 0 && '★'}
                        </span>
                        <span className="text-gray-300">({`${rate}/5`})</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                    {truncatedDsc}
                </p>
            </div>
        </div>
    );
};

export default MenuCard;
