import { usePostsContext } from "../../context/PostsContextProvider";
import { useGetPosts } from "../../hooks/useGetPosts"
import PostSkeletons from "../skeletons/PostSkeletons"
import Post from "./Post";
const Posts: React.FC = (): JSX.Element => {
    const { isLoading, error } = useGetPosts();
    const { posts } = usePostsContext();
    return (
        <div>
            {!isLoading && error && <h1 className="select-none text-red-600 text-center mt-5">{error}</h1>}
            {isLoading && Array(3).fill(0).map((_, idx) => (
                <PostSkeletons key={idx} />
            ))}
            {!isLoading && !error && posts && (
                posts.map((ele) => (
                    <Post post={ele} key={ele._id} />
                ))
            )}
        </div>
    )
}

export default Posts
