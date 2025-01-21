import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import AXIOS from "../../apis/api";
import toast from "react-hot-toast";
import { usePostsContext } from "../context/PostsContextProvider";

interface UseCreatePostShape {
    data: CreatePostState;
    setData: (data: CreatePostState ) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

type CreatePostState = {
    text: string,
    image: string | null,
} 
export const useCreatePost = (): UseCreatePostShape => {
    const { addNewPost } = usePostsContext();
    const [ data, setData ] = useState<CreatePostState>({
        text: '',
        image: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AXIOS.post('posts/create', data);
            console.log(response.data.post, 'res');
            addNewPost(response.data.post);
            toast.success("Post created successfully");
            setData({ text: '', image: '' });
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                console.log('error in create post hook', error);
            }
        }
    };

    console.log('test hook crete post', data);
    
    return { data, setData, handleChange, handleSubmit }
};