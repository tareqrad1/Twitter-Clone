import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const RightBar: React.FC = () => {
    return (
        <div className="">  
            <div className="bg-[#16181c] flex relative py-3">
                <Search className="absolute top-[20px] left-[12px] text-[#e7e7e7]"/>
                <Input type="text" placeholder="Search Twitter" className="bg-transparent rounded-full pl-10" />
            </div>
            <div className="bg-[#16181C] w-fit px-8 pt-2 pb-5 mt-10 ml-2 space-y-4">
                <h3 className="font-bold mb-1">who to follow</h3>
                <div className="">
                    <div className='flex space-x-3 items-center mb-1'>
                        <img src="../../../public/avatars/girl2.png" alt="avatar" className='w-[50px] h-[50px] rounded-full' />
                        <div className=''>
                            <h4 className='font-bold'>MedO Al-Shantti</h4>
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