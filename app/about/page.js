import Button from "../button";

export default function About(){
    return (
        <div className="flex justify-between bg-gray-900 text-white">
            <div className="p-24 pl-32 pt-40">
                <Button />
                <div className="text-3xl">박지원</div>
                <div className="pt-4">PARK JIWON</div>
                <div>1995.05.16</div>
                <div>010.2303.3312</div>
                <div>qkek33120@naver.com</div>
            </div>

            <div className="p-24 pt-40">

                <div>
                    <div className="text-2xl">✨ About Me</div>
                    <div className="pt-4 pl-4">발전하기 위해 나아가는 프론트개발자</div>
                    <div className="pl-4 pt-4">프론트 개발자는 </div>
                </div>

                <div>
                    <div className="pt-8 text-2xl">✨ Education</div>
                    <div className="flex pt-8">
                        <div className="pl-4">2021.02</div>
                        <div className="pl-3">강원대학교 생활조형디자인 졸업</div>
                    </div>
                    <div className="flex">
                        <div className="pl-4">2014.02</div>
                        <div className="pl-3">명신여자고등학교 졸업</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="text-2xl">✨ Work</div>
                </div>
                <div className="pt-8">
                    <div className="text-2xl">✨ Skills</div>
                    <div className="pt-4">
                        <div className="pl-4">Javascript</div>
                        <div className="pl-4">React</div>
                        <div className="pl-4">NextJS</div>
                        <div className="pl-4">타입스크립트</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}