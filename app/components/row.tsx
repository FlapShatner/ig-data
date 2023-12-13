import React from 'react'

export default function Row({ label, value }: { label: string; value: number }) {
 return (
  <div className='grid grid-cols-5 bg-grey-10 px-2 py-1 rounded-md'>
   <span className='col-span-4'>{label}</span>
   <span className='col-span-1'>{value}</span>
  </div>
 )
}
