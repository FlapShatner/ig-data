'use client'
import { useState, useEffect } from 'react'
import { getImpressionsCount, getReachCount, extractDateRange } from '@/utils'
import CSVReader from './components/dropzone'
import Results from './components/results'
import DateRange from './components/date-range'

export default function Home() {
 const [results, setResults] = useState<any>(null)
 const [fileName, setFileName] = useState<any>(null)
 const [dateRange, setDateRange] = useState<any>(null)
 const [postCount, setPostCount] = useState<any>(null)
 const [impressionsCount, setImpressionsCount] = useState<any>(null)
 const [reachCount, setReachCount] = useState<any>(null)

 useEffect(() => {
  setPostCount(results?.data?.length)
  setImpressionsCount(getImpressionsCount(results?.data))
  setReachCount(getReachCount(results?.data))
  setDateRange(fileName && extractDateRange(fileName))
  console.log(results)
 }, [results, fileName])

 return (
  <main className=' flex min-h-screen flex-col items-center p-12 max-w-[900px] m-auto'>
   <CSVReader
    setResults={setResults}
    setFileName={setFileName}
   />
   {dateRange && <DateRange dateRange={dateRange} />}
   {results && (
    <Results
     postCount={postCount}
     impressionsCount={impressionsCount}
     reachCount={reachCount}
    />
   )}
  </main>
 )
}
