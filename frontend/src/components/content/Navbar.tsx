import React from 'react'
interface stateShape {
    setIsActive: (active: boolean) => void;
    isActive: boolean;
}
const Navbar: React.FC<stateShape> = ({ setIsActive, isActive }): JSX.Element => {
    return (
        <>
            <div className='w-full border-b border-[#333] border-solid flex'>
                <div className='flex-1 text-center hover:bg-stone-900 py-3 transition-colors'>
                    <h1 className={`cursor-pointer ${isActive && 'text-primaryColor'} capitalize`} onClick={() => setIsActive(true)}>for you</h1>
                </div>
                <div className='flex-1 text-center hover:bg-stone-900 py-3 transition-colors'>
                    <h1 className={`cursor-pointer capitalize ${!isActive && 'text-primaryColor'}`} onClick={() => setIsActive(false)}>following</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar