import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen text-center bg-gray-900">
      <div className="pt-44"><p className="text-5xl font-bold pl-80 text-white">Jiwon</p></div>
      <button className="p-10 pl-72 bg-white">
        <Link href="chapter" className="text-center text-gray-800 font-bold text-3xl hover:underline hover:text-gray-500">portfolio</Link>
      </button>
      <div className="text-5xl font-bold pr-80 text-white"><a className="text-2xl pr-4 text-yellow-300">★</a>Park</div>
    </div>
  );
}
