import { useNavigate } from "react-router-dom"
import XSvg from "../../components/svg/X"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

const Signup = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-28 w-full h-[100vh]">
                <div className="">
                    <XSvg className='w-[100px] md:w-[300px]' />
                </div>
                <div>
                    <h1 className="text-white text-3xl mb-2 font-bold">Join today.</h1>
                    <form className="space-y-4"> 
                        <Input type="email" placeholder="Email" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="text" placeholder="Username" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="text" placeholder="Fullname" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="password" placeholder="Password" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="password" placeholder="Confirm Password" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Button variant='outline' className="bg-primaryColor w-full border-none outline-none text-white mt-3 rounded-full">Sign Up</Button>
                    </form>
                    <div className="">
                        <p className="text-white my-2 text-sm">already have account ?</p>
                        <Button variant='default' className="w-full rounded-full hover:bg-gray-50 border border-white border-solid bg-transparent text-primaryColor" onClick={() => Navigate('/login')}>Sign in</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup