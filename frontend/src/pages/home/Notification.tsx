import React, { useState } from 'react'
import { Settings, User, Heart, X } from 'lucide-react'

const Notification: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <div className="w-[80%] sm:w-[100%] lg:w-[50%] px-3 ">
            <header className='flex justify-between items-center py-4 border-b-[1px] border-[#333] relative'>
                <h1 className='capitalize font-bold'>notification</h1>
                <Settings className='cursor-pointer' onClick={() => setActive(!active)} />
                <div className={`bg-black absolute -right-[94px] -bottom-[50px] p-3 cursor-pointer transition-transform ${active ? 'block' : 'hidden'}`}>
                    <p className='hover:bg-[#111] py-1 text-sm' onClick={() => setActive(false)}>Delete all notifications</p>
                </div>
            </header>
            <section className='space-y-2'>
                {/* follow */}
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <User className='fill-blue-700 w-10' />
                            <img src="../../../public/avatars/boy2.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>followed you</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                {/* likes */}
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
                <div className='gap-x-3 border-b-2 border-[#333] border-solid py-4 flex justify-between'>
                    <div>
                        <div className='flex'>
                            <Heart className='fill-red-500 w-10' />
                            <img src="../../../public/avatars/girl1.png" alt="name" className='w-10 h-10 rounded-full'/>
                        </div>
                        <p className='font-bold ml-10 mt-1'>@Jane Doe <small className='font-normal'>liked your post</small></p>
                    </div>
                    <X className='cursor-pointer' />
                </div>
            </section>
        </div>
    );
}
export default Notification