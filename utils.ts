import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
 return twMerge(clsx(inputs))
}

export const getImpressionsCount = (data: any) => {
 if (!data) return
 let impressionsCount = 0
 data.forEach((item: any) => {
  impressionsCount += item.Impressions
 })
 return impressionsCount
}

export const getReachCount = (data: any) => {
 if (!data) return
 let reachCount = 0
 data.forEach((item: any) => {
  reachCount += item.Reach
 })
 return reachCount
}

export function extractDateRange(fileName: string) {
 const regex = /(\w{3}-\d{2}-\d{4})_(\w{3}-\d{2}-\d{4})/
 const match = fileName.match(regex)

 if (match && match.length === 3) {
  const startDate = match[1]
  const endDate = match[2]
  return { startDate, endDate }
 } else {
  return null // or handle error as needed
 }
}
