import { useState } from "react"
import AXIOS from "../../apis/api"
import axios from "axios";
import toast from "react-hot-toast";


interface DeleteShapeHooks {
    isLoading: boolean;
    handleDelete: (id: string) => void;
    id: string | null;
    setId: (id: string) => void; 
}

export const useDeletePost = (): DeleteShapeHooks => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [id, setId] = useState<string>('');

    const handleDelete = async(id: string) => {
        try {
            await AXIOS.delete(`/posts/delete/${id}`);
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                console.log('sorry you have error in delete this post');
                toast.error(error.message);
            }
        }finally {
            setLoading(false);
        }
    }
    return { handleDelete, isLoading, setId, id}
}