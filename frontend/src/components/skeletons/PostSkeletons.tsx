import React from 'react'
import { Skeleton } from '../ui/skeleton'

const PostSkeletons: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-4 w-full p-4'>
      <div className='flex gap-4 items-center'>
          <Skeleton className='skeleton w-10 h-10 rounded-full shrink-0'></Skeleton>
          <div className='flex flex-col gap-2'>
              <Skeleton className='skeleton h-2 w-12 rounded-full'></Skeleton>
              <Skeleton className='skeleton h-2 w-24 rounded-full'></Skeleton>
          </div>
      </div>
      <Skeleton className='skeleton h-40 w-full'></Skeleton>
    </div>
  )
}

export default PostSkeletons