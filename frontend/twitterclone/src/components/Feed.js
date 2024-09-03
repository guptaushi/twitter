import React from 'react'
import Createthepost from './Createthepost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <Createthepost />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed
