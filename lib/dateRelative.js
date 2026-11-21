import { format, formatDistanceToNowStrict } from 'date-fns'

function toValidDate(dateTime) {
  if (dateTime instanceof Date) {
    return Number.isNaN(dateTime.getTime()) ? null : dateTime
  }
  const parsed = new Date(dateTime)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

export function distanceToNow(dateTime) {
  const date = toValidDate(dateTime)
  if (!date) return ''
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
  })
}

export function formatFullDate(dateTime) {
  const date = toValidDate(dateTime)
  if (!date) return ''
  return format(date, 'MMM d, yyyy')
}

export default distanceToNow
