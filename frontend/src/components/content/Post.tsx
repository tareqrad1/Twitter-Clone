import { FC } from "react";
import { Link } from "react-router-dom";
import { Heart, Repeat2, Bookmark, Trash } from 'lucide-react'
import { PostState } from "../../hooks/useGetPosts";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useDeletePost } from "../../hooks/useDeletePost";
import { usePostsContext } from "../../context/PostsContextProvider";
import { DialogDemo } from "../ui/DialogDemo";

interface PostPropsShape {
	post: PostState;
}
const Post: FC<PostPropsShape> = ({ post }): JSX.Element => {
	const postOwner = post.user;
	const { authUser } = useAuthContext();
	const { handleDeletePost } = usePostsContext();
	const { setId } = useDeletePost();
	const isLiked = false;
	const isMyPost = postOwner._id === authUser?._id;

	const formattedDate = "1h";

	const handleDeleteFunc = (id: string) => {
		setId(id);
		handleDeletePost(id);
	}
	const handleLikePost = () => {};

	return (
		<>
			
			<div className='flex gap-2 items-start p-4 border-b border-gray-700'>
				<div className='avatar'>
					<Link to={`/profile/${postOwner.username}`} className='w-8 rounded-full overflow-hidden'>
						<img className="w-8 rounded-full" src={"../../../public/avatars/boy2.png"} />
					</Link>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='flex gap-2 items-center'>
						<Link to={`/profile/${postOwner.username}`} className='font-bold'>
							{postOwner.fullname}
						</Link>
						<span className='text-gray-700 flex gap-1 text-sm'>
							<Link to={`/profile/${postOwner.username}`}>@{postOwner.username}</Link>
							<span>·</span>
							<span>{formattedDate}</span>
						</span>
						{isMyPost && (
							<span className='flex justify-end flex-1'>
								<Trash className='cursor-pointer hover:text-red-500' onClick={() => handleDeleteFunc(post._id)} />
							</span>
						)}
					</div>
					<div className='flex flex-col gap-3 overflow-hidden'>
						<span>{post.text}</span>
						{post.image && (
							<img
								src={post.image}
								className='h-80 object-contain rounded-lg border border-gray-700'
								alt={post.user?.username}
							/>
						)}
					</div>
					<div className='flex justify-between mt-3'>
						<div className='flex gap-4 items-center w-2/3 justify-between'>
							<div
								className='flex gap-1 items-center cursor-pointer group'
							>
								<DialogDemo />
							</div>
							<div className='flex gap-1 items-center group cursor-pointer'>
								<Repeat2 className='w-6 h-6  text-slate-500 group-hover:text-green-500' />
								<span className='text-sm text-slate-500 group-hover:text-green-500'>0</span>
							</div>
							<div className='flex gap-1 items-center group cursor-pointer' onClick={handleLikePost}>
								{!isLiked && (
									<Heart className='w-4 h-4 cursor-pointer text-slate-500 group-hover:text-pink-500' />
								)}
								{isLiked && <Heart className='w-4 h-4 cursor-pointer text-pink-500 ' />}
								<span
									className={`text-sm text-slate-500 group-hover:text-pink-500 ${
										isLiked ? "text-pink-500" : ""
									}`}
								>
									{45}
								</span>
							</div>
						</div>
						<div className='flex w-1/3 justify-end gap-2 items-center'>
							<Bookmark className='w-4 h-4 text-slate-500 cursor-pointer' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Post;
