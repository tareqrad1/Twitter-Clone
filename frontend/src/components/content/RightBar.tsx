import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const RightBar: React.FC = () => {
    return (
        <div className="px-3">  
            <div className="flex relative py-3 px-1">
                <Search className="absolute top-[20px] left-[12px] text-[#e7e7e7]"/>
                <Input type="text" placeholder="Search Twitter" className="bg-transparent rounded-full pl-10 mx-auto" />
            </div>
            <div className="bg-[#151619] px-8 pt-2 pb-5 mt-1 ml-2 space-y-4">
                <h3 className="font-bold mb-1 text-xl capitalize">who to follow</h3>
                <div className="mb-1">
                    <div className='flex space-x-3 items-center mb-1'>
                        <img src="../../../public/avatars/girl2.png" alt="avatar" className='w-[50px] h-[50px] rounded-full' />
                        <div className='flex-1'>
                            <h4 className='font-bold text-sm'>Medo AlShantti</h4>
                            <p className='text-sm text-grayWithOpacity'>tareq.radi</p>
                        </div>
                        <Button variant={"secondary"} className="bg-white text-black rounded-full p-0 py-[1px] px-5">Follow</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RightBar