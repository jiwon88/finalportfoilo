import { IoBookmark } from "react-icons/io5";
import Button from "../button";


export default function market(){
    return(
        <div className="bg-gray-900 text-white">
            <Button />
            <div className="p-20 text-3xl font-black">MARKET</div>
            <div className="flex justify-between p-20 pt-10">
                <div>
                    <img src="/market01.png" className="w-96" />
                    <div className="pt-4 pb-4">Solo project</div>
                    <div className="p-2 bg-gray-800 rounded-full w-24 text-center">베포 링크</div>
                    <div className="pt-2 pl-4 pb-2">www.</div>
                    <div className="p-2 bg-gray-800 rounded-full w-24 text-center">리포지토리</div>
                    <div className="pt-2 pl-4 pb-2">www.</div>
                </div>

                <div className="pl-20">
                    <div className="text-xl flex text-yellow-300"><IoBookmark  /><div className="pl-2">프로젝트 소개</div></div>
                    <div className="pt-2">Market는 '컬리' 사이트를 모티브로 제작 하였습니다.  다양한  <br />  식재료및 냉동식품 1인가구를 위한 간편하게 먹거리를 판매   <br /> 목적으로 사이트를 만들었습니다.</div>
                    <div className="text-xl pt-4 flex text-yellow-300"><IoBookmark  /><div className="pl-2">후기 & 교훈</div></div>
                    <div className="pt-2">여러모로 처음 혼자서 프로젝트를 하다보니 여러 시행착오가 <br /> 있었습니다.   장바구니 추가기능 oauth를 사용해서 로그인 문제 <br /> 디자인적으로도
                      소비자가 시점에서 고민해보고 시행착오 <br /> 겪다보니 많은걸 배운 프로젝트 같습니다. </div>
                    <div className="text-xl pt-4 flex text-yellow-300"><IoBookmark  /><div className="pl-2">기술 스택</div></div>
                    <div className="pt-2">Next.js, tailwindcss, javascript</div>
                </div>
            </div>
            
        </div>
    )
}