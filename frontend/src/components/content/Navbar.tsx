import React, { useState } from 'react'
import Posts from './Posts';
import FollowingContent from './FollowingContent';

const Navbar: React.FC = () => {
    const [forYouActive, setForYouActive] = useState(true);
    function handleClickActive() {
        setForYouActive(true)
    }
    function handleClickRmActive() {
        setForYouActive(false)
    }
  return (
    <>
        <div className='w-full border-b border-[#333] border-solid flex py-2'>
            <div className='flex-1 text-center'>
                <h1 className={`cursor-pointer ${forYouActive && `text-primaryColor` } capitalize`} onClick={handleClickActive}>for you</h1>
                {forYouActive && (
                    <div>
                        <Posts />
                    </div>
                )}
            </div>
            <div className='flex-1 text-center'>
                <h1 className={`cursor-pointer ${!forYouActive && `text-primaryColor`} capitalize`} onClick={handleClickRmActive}>following</h1>
                {!forYouActive && (
                    <div>
                        <FollowingContent />
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Navbar