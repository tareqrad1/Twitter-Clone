import axios from "axios";
import toast from "react-hot-toast";
import AXIOS from "../../apis/api";
import React, { FormEvent } from "react";

interface UseLogoutShape {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useLogout = (): UseLogoutShape => {
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AXIOS.post('/auth/logout', {
                headers: {'Content-Type': 'application/json'}
            }, {
                withCredentials: true
            });            
            toast.success(response.data.message);
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                console.log(error);
                toast.error('error in logout');
            }
        }
    }
    return {handleSubmit}
};