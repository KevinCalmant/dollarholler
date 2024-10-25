import { isBefore } from 'date-fns'

export const formatDate = (myDate: string): string => {
  const [year, month, day] = splitDate(myDate)
  return `${month} / ${day} / ${year}`
}

export const isLate = (myDate: string): boolean => {
  const [year, month, day] = splitDate(myDate)
  const dueDate = new Date(parseInt(year), parseInt(month), parseInt(day))
  const today = new Date()
  return isBefore(dueDate, today)
}

export const splitDate = (myDate: string): Array<string> => {
  return myDate.split('-')
}