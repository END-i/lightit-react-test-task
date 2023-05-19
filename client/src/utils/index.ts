export function getErrors(err: any) {
  let errorMsgText = err?.message || 'Opps! Something wrong. Try again later.'
  if (err.response) {
    errorMsgText = `Status: ${err.response.status}. ${err.response.statusText}`
  }
  return errorMsgText
}
