import React from 'react'
import Row from './row'

export default function Results({ postCount, impressionsCount, reachCount }: any) {
 return (
  <div className='flex flex-col gap-2 max-w-[400px] w-full mt-8'>
   <Row
    label='Post Count:'
    value={postCount}
   />
   <Row
    label='Impressions Sum:'
    value={impressionsCount}
   />
   <Row
    label='Reach Sum:'
    value={reachCount}
   />
  </div>
 )
}
