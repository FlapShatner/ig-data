'use client'
import { useState } from 'react'
import { useCSVReader, lightenDarkenColor, formatFileSize } from 'react-papaparse'

export default function CSVReader() {
 const { CSVReader } = useCSVReader()
 const [zoneHover, setZoneHover] = useState(false)

 return (
  <CSVReader
   onUploadAccepted={(results: any) => {
    console.log(results)
    setZoneHover(false)
   }}
   onDragOver={(event: DragEvent) => {
    event.preventDefault()
    setZoneHover(true)
   }}
   onDragLeave={(event: DragEvent) => {
    event.preventDefault()
    setZoneHover(false)
   }}>
   {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }: any) => (
    <>
     <div
      className='cursor-pointer border-2 border-dashed border-slate-400 mt-24 py-12 px-36 rounded-xl '
      {...getRootProps()}>
      {acceptedFile ? (
       <>
        <div className='bg-gradient-to-b from-gray-50 to-gray-300 rounded-2xl flex h-32 w-32 relative z-10 flex-col justify-center'>
         <div className='flex flex-col items-center px-[10px]'>
          <span className='bg-grey-light rounded-sm mb-2 flex justify-center text-gray-800'>{formatFileSize(acceptedFile.size)}</span>
          <span className='bg-grey-light rounded-sm text-xs mb-2 text-gray-900'>{acceptedFile.name}</span>
         </div>
         <div className='absolute bottom-[14px] w-full px-[10px]'>
          <ProgressBar />
         </div>
         <div
          className=' absolute h-[23px] w-[23px] right-[6px] top-[6px]'
          {...getRemoveFileProps()}>
          <Remove color='#A01919' />
         </div>
        </div>
       </>
      ) : (
       'Drop CSV file here or click to upload'
      )}
     </div>
    </>
   )}
  </CSVReader>
 )
}
