import React from 'react';
import Avatar from 'react-avatar';
import { FaCommentDots } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { IoBookmark } from "react-icons/io5";


const Tweet = () => {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1824552681719181312/VF_bp331_400x400.jpg" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>Ayushi</h1>
                            <p className='text-gray-500 text-sm ml-1'>@ayushi2004 . 1m</p>
                        </div>
                        <div>
                            <p>Hello Developers lets connect and grow together
                            </p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                    <FaCommentDots size="20px" />
                                </div>
                                <p>0</p>
                            </div >
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-red-200 rounded-full cursor-pointer'>
                                    <FcLike size="24px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                                    <IoBookmark size="22px" />
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
