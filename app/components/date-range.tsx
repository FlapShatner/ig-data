import React from 'react'

export default function DateRange({ dateRange }: any) {
 return (
  <span className='mt-8'>
   {dateRange.startDate} to {dateRange.endDate}
  </span>
 )
}
