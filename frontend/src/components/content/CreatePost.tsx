import { Image, Smile, CircleX } from 'lucide-react';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

const CreatePost: React.FC = (): JSX.Element => {
	const [text, setText] = useState<string>("");
  const [img, setImg] = useState<string | null>(null);
	const imgRef = useRef<HTMLInputElement | null>(null);
	const isPending = false;
	const isError = false;

	const data = {
		profileImg: "/avatars/boy1.png",
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
    setImg(null)
		alert("Post created successfully");
	};

	const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImg(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='flex p-4 items-start gap-4 border-b border-gray-700'>
			<div className='avatar'>
				<div className='w-8 rounded-full'>
					<img src={data.profileImg || "/avatar-placeholder.png"} />
				</div>
			</div>
			<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
				<textarea
					className='textarea bg-transparent w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
					placeholder='What is happening?!'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				{img && (
					<div className='relative w-72 mx-auto'>
						<CircleX
							className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
							onClick={() => {
								setImg(null);
								imgRef.current!.value = '';
							}}
						/>
						<img src={img} className='w-full mx-auto h-72 object-contain rounded' />
					</div>
				)}

				<div className='flex justify-between border-t py-2 border-t-gray-700'>
					<div className='flex gap-1 items-center'>
						<Image
							className='fill-primary w-6 h-6 cursor-pointer'
							onClick={() => imgRef.current!.click()}
						/>
						<Smile className='fill-primary w-5 h-5 cursor-pointer' />
					</div>
					<input type='file' hidden ref={imgRef} onChange={handleImgChange} />
					<button className='bg-primaryColor py-1 rounded-full btn-sm text-white px-4'>
						{isPending ? "Posting..." : "Post"}
					</button>
				</div>
				{isError && <div className='text-red-500'>Something went wrong</div>}
			</form>
		</div>
	);
};
export default CreatePost;