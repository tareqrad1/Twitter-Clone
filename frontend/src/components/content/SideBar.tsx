import { House, Bell, User, LogOut} from 'lucide-react'
import XSvg from '../svg/X';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
const SideBar: React.FC = (): JSX.Element => {
    const { handleSubmit } = useLogout();
    const Navigate = useNavigate();
    const { authUser } = useAuthContext();
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <>
            <div className='flex flex-col h-screen py-4 md:pr-5 '>
                <div className="w-[40px] mx-auto md:mx-0">
                    <XSvg />
                </div>
                <ul className='flex-1 space-y-4 mt-7 capitalize flex flex-col items-center md:items-start'>
                    <div className='flex gap-2 cursor-pointer' onClick={() => Navigate('/')}>
                        <House />
                        <li className='hidden md:flex gap-2 font-bold hover:text-primaryColor'>home</li>
                    </div>
                    <div className='flex gap-2 cursor-pointer' onClick={() => Navigate('/notification')}>
                        <Bell />
                        <li className='hidden md:flex gap-2 font-bold hover:text-primaryColor'>notifications</li>
                    </div>
                    <div className='flex gap-2 cursor-pointer' onClick={() => Navigate(`/profile/${authUser?.username}`)}>
                        <User />
                        <li className='hidden md:flex gap-2 font-bold hover:text-primaryColor'>profile</li>
                    </div>
                </ul>
                <div className='flex space-x-3 items-center justify-center md:justify-start'>
                    <div onClick={() => setToggle(!toggle)}>
                        <img onClick={() => Navigate(`/profile/${authUser?.username}`)} src={authUser?.coverImage ? authUser?.coverImage : '../../../public/avatars/boy1.png'} alt={authUser?.username} className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full cursor-pointer' />
                    </div>
                    <div className='hidden md:block cursor-pointer'>
                            <h4 onClick={() => Navigate(`/profile/${authUser?.username}`)} className='font-bold'>{authUser?.fullname}</h4>
                            <p onClick={() => Navigate(`/profile/${authUser?.username}`)} className='text-sm text-grayWithOpacity'>@{authUser?.username}</p>
                        </div>
                        <form onSubmit={handleSubmit} className={`md:block ${toggle ? `block`: 'hidden'}`}>
                            <button type='submit'><LogOut className='cursor-pointer w-5'/></button>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default SideBar