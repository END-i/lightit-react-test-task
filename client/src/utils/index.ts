import { imageBaseUrl } from 'services/api'

export function getErrors(err: any) {
  let errorMsgText = err?.message || 'Opps! Something wrong. Try again later.'
  if (err.response) {
    errorMsgText = `Status: ${err.response.status}. ${err.response.statusText}`
  }
  return errorMsgText
}

export function getImageUrl(fileName?: string) {
  return `${imageBaseUrl}${fileName || ''}`
}

export function getCurrency(price?: number) {
  return (price || 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  })
}
