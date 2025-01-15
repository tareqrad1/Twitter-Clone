import AXIOS from '../../apis/api';
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios';

interface UseRegisterResultShape {
    registerData: RegisterState;
    error: string | null;
    loading: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
interface RegisterState {
    email: string,
    username: string,
    fullname: string,
    password: string,
    confirmPassword: string,
};
export const useRegister = ():UseRegisterResultShape => {
    const [registerData, setRegisterData] = useState<RegisterState>({
        email: '',
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
    });
    console.log(registerData);
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    };
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await AXIOS.post('auth/signup', registerData, {
                withCredentials: true,
            });
            toast.success('done response !');
            setRegisterData({
                username: '',
                fullname: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                toast.error(error?.response?.data.error);
            }
        }finally {
            setLoading(false);
            setError(null);
        }
    };
    return { registerData, handleChange, handleSubmit, loading, error };
};