import { useNavigate } from "react-router-dom"
import XSvg from "../../components/svg/X"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useRegister } from "../../hooks/useRegister"
import { Loader } from 'lucide-react';

const Signup: React.FC = (): JSX.Element => {
    const Navigate = useNavigate();
    const { registerData, loading, handleSubmit, handleChange } = useRegister();
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-28 w-full h-[100vh]">
                <div className="">
                    <XSvg className='w-[100px] md:w-[300px]' />
                </div>
                <div>
                    <h1 className="text-white text-3xl mb-2 font-bold">Join today.</h1>
                    <form onSubmit={handleSubmit} className="space-y-4"> 
                        <Input type="email" name="email" value={registerData.email} onChange={handleChange} placeholder="Email" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="text" name="username" value={registerData.username} onChange={handleChange} placeholder="Username" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="text" name="fullname" value={registerData.fullname} onChange={handleChange} placeholder="Full Name" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="password" name="password" value={registerData.password} onChange={handleChange} placeholder="Password" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Button variant='outline' className="bg-primaryColor w-full border-none outline-none text-white mt-3 rounded-full">{loading ? <Loader className="animate-spin" /> : 'Sign Up'}</Button>
                    </form>
                    <div>
                        <p className="text-white my-2 text-sm">already have account ?</p>
                        <Button variant='default' className="w-full rounded-full hover:bg-gray-50 text-primaryColor border border-white border-solid bg-transparent" onClick={() => Navigate('/login')}>Sign in</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup