import { House, Bell, User, LogOut} from 'lucide-react'
import XSvg from '../svg/X';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const SideBar: React.FC = () => {
    const { handleSubmit } = useLogout();
    const Navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col h-screen border-r border-[#333] border-solid py-4 pr-5'>
                <div className="w-[40px]">
                    <XSvg />
                </div>
                <ul className='flex-1 space-y-4 mt-7 capitalize'>
                    <li className='flex gap-2 cursor-pointer font-bold hover:text-primaryColor' onClick={() => Navigate('/')}><House />home</li>
                    <li className='flex gap-2 cursor-pointer font-bold hover:text-primaryColor'><Bell />notifications</li>
                    <li className='flex gap-2 cursor-pointer font-bold hover:text-primaryColor'><User />profile</li>
                </ul>
                <div className='flex space-x-3 items-center'>
                    <img src="../../../public/avatars/boy1.png" alt="avatar" className='w-[50px] h-[50px] rounded-full' />
                    <div className=''>
                        <h4 className='font-bold'>Jon daw</h4>
                        <p className='text-sm text-grayWithOpacity'>tareq.radi</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <button type='submit' onClick={() => Navigate('/login')}><LogOut className='cursor-pointer'/></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SideBar