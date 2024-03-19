import { FiChevronsLeft } from "react-icons/fi";
import Link from 'next/link';

export default function Button(){
    return (
        <Link href="/chapter">
            <div className="absolute top-8 left-6 text-4xl bg-gray-900 text-white hover:text-yellow-400">
                <FiChevronsLeft  />
            </div>
        </Link>
    )
}
