import { useNavigate } from "react-router-dom"
import XSvg from "../../components/svg/X"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useLogin } from "../../hooks/useLogin";
import { Loader } from 'lucide-react'

const Login: React.FC = (): JSX.Element => {
    const Navigate = useNavigate();
    const { handleSubmit, loading, handleChange, loginData } = useLogin();
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-28 w-full h-[100vh]">
                <div className="">
                    <XSvg className='w-[100px] md:w-[300px]' />
                </div>
                <div>
                    <h1 className="text-white text-3xl mb-2 font-bold">Join today.</h1>
                    <form onSubmit={handleSubmit} className="space-y-4"> 
                        <Input type="text" name='username' value={loginData.username} onChange={handleChange} placeholder="Username" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Input type="password" name='password' value={loginData.password} onChange={handleChange} placeholder="Password" className="text-white bg-transparent focus:border-0 focus:outline-none pr-24 pl-5" />
                        <Button variant='outline' className="bg-primaryColor w-full border-none outline-none text-white mt-3 rounded-full">{loading ? <Loader className="animate-spin" /> : 'Sign Up'}</Button>
                    </form>
                    <div>
                        <p className="text-white my-2 text-sm">don't have any account ?</p>
                        <Button variant='default' className="w-full rounded-full hover:bg-gray-50 text-primaryColor border border-white border-solid bg-transparent" onClick={() => Navigate('/signup')}>Sign up</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;