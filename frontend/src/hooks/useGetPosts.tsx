import axios from "axios";
import { useEffect, useState } from "react";
import AXIOS from "../../apis/api";

export type PostState = {
    "_id": string,
    "user": {
        "_id": string,
        "username": string,
        "fullname": string,
        "email": string,
        "followers": string[],
        "following": string[],
        "profileImage": string,
        "coverImage": string,
        "bio": string,
        "link": string,
        "likedPost": string[],
        "createdAt": string,
        "updatedAt": string,
        "__v": number
    },
    "text": string,
    "image": string,
    "like": string[]
    "comment": string[],
    "createdAt": string,
    "updatedAt": string;
}

export const useGetPosts = () => {
    const [ postData, setPostData ] = useState<PostState[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true);
            setError(null);
            try {
                const response = await AXIOS.get('/posts/all', {
                    withCredentials: true,
                });
                setPostData(response.data?.posts);
                setLoading(false);
            } catch (error: unknown) {
                if(axios.isAxiosError(error)) {
                    console.log(error, 'use posts error');
                    setError(error?.message);
                    setLoading(false)
                }
            }
        };
        fetchPosts()
    }, []);
    return { postData, isLoading, error }
};