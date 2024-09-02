'use client';
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from 'next/navigation'

const Header = () => {
    const segment = useSelectedLayoutSegment();
    return (
        <header className="flex justify-between items-center p-8 bg-gray-800 text-white">
            <div className="text-lg font-bold">
                <Link href="/">
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </div>

            <nav className="flex space-x-6">
                <Link href="/" className={segment === null ? "text-yellow-400" : ""}>
                    Dashboard
                </Link>
                <Link href="/menu" className={segment === "menu" ? "text-yellow-400" : ""}>
                    Menu
                </Link>
                <Link href="/cart" className={segment === "cart" ? "text-yellow-400" : ""}>
                    Carts
                </Link>
            </nav>
        </header>
    )
}

export default Header;