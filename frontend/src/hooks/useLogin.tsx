import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import AXIOS from "../../apis/api";
import { useAuthContext } from "../context/AuthContextProvider";
interface UseLoginStateShape {
    loginData: LoginState;
    loading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
interface LoginState {
    username: string;
    password: string;
}
export const useLogin = (): UseLoginStateShape => {
    const { setAuthUser } = useAuthContext();
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    };
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await AXIOS.post('/auth/login', loginData, {
                withCredentials: true,
            });
            toast.success('Login successfully');
            setLoginData({ username: '', password: '' });
            setAuthUser(response.data.user);
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                toast.error(error.response?.data.error);
            }
        }finally {
            setLoading(false);
        };
    };
    return { loginData, loading, handleChange, handleSubmit };
};