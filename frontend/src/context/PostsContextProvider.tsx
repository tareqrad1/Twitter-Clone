import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { useGetPosts } from "../hooks/useGetPosts";
import {PostState} from '../hooks/useGetPosts';
import { useDeletePost } from "../hooks/useDeletePost";
import toast from "react-hot-toast";


interface PostStateContext {
    posts: PostState[];
    setPosts: Dispatch<SetStateAction<PostState[]>>;
    loading: boolean;
    handleDeletePost: (id: string) => void
}
const PostsContext = createContext<PostStateContext | undefined>(undefined);

const PostsContextProvider = ({ children }: { children: ReactNode }) => {
    const { postData } = useGetPosts(); 
    const { handleDelete } = useDeletePost();   
    const [posts, setPosts] = useState<PostState[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        try {
            setPosts(postData);
        } catch (error: unknown) {
            console.log('error from post context', error);
        }finally {
            setLoading(false);
        }
    },[postData]);


    function handleDeletePost(id: string) {
        handleDelete(id);
        setPosts(posts.filter((ele) => ele._id !== id ))
        toast.success('Deleting successfully');
    }
    console.log('context posts', posts);
    return (
        <PostsContext.Provider value={{ posts, setPosts, handleDeletePost, loading }}>
            {children}
        </PostsContext.Provider>
    )
}
export default PostsContextProvider;

export const usePostsContext = (): PostStateContext => {
    const context = useContext(PostsContext);
    if (context === undefined) {
        throw new Error('usePostsContext must be used within a PostsContextProvider');
    }
    return context;
}
