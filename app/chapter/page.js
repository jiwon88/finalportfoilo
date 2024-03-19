import Link from "next/link";

export default function Chapter(){
    return (
        <div className="bg-gray-900 h-screen">
            <div className="text-white text-5xl text-center font-bold p-40 pl-80">
                <a className="text-yellow-300 p-2 text-4xl">✦</a> 
                    CONTENT
            
            </div>
            <div className="flex flex-col text-white text-2xl font-bold p-10 pl-40">
                <Link href="/about" className="hover:underline hover:text-yellow-200"><a className="p-2 text-yellow-300">✦</a>ABOUT ME</Link>
                <Link href="/market" className="pt-4 hover:underline hover:text-yellow-200"> <a className="p-2 text-yellow-300">✦</a>MARKET</Link>
                <Link href="/mbti" className="pt-4 hover:underline hover:text-yellow-200"> <a className="p-2 text-yellow-300">✦</a>MBTI</Link>
                <div className="pt-4 hover:underline hover:text-yellow-200"><a className="p-2 text-yellow-300">✦</a>JSTAR</div>
            </div>
            
        </div>
    );
}