import axios from "axios";
import toast from "react-hot-toast";
import AXIOS from "../../apis/api";
import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
interface UseLogoutShape {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const useLogout = (): UseLogoutShape => {
    const { setAuthUser } = useAuthContext();
    const Navigate = useNavigate();
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AXIOS.post('/auth/logout', {
                headers: {'Content-Type': 'application/json'}
            }, {
                withCredentials: true
            });
            console.log(response.data, 'logout');
            setAuthUser(null);
            toast.success(response.data.message);
            Navigate('/login')
            } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                console.log(error);
                toast.error('error in logout');
            }
        }
    }
    return { handleSubmit }
};