import { useEffect, useState } from 'react'
import axios from 'axios'
import services from 'services/api'
import { getErrors } from 'utils'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

interface Props<C> {
  apiName: string
  lazyFetch?: boolean
  payload?: C
}
function useAxios<T, C = string>({ apiName, lazyFetch, payload }: Props<C>) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  console.log(process.env)
  useEffect(() => {
    if (lazyFetch) return

    fetchData()
  }, [apiName, payload])

  const fetchData = async () => {
    setLoading(true)
    setData(undefined)
    setError('')

    try {
      const request = services[apiName]

      if (!request) {
        throw new Error('Error! Api not found')
      }

      const { status, statusText, ...rest } = await axios(request(payload))

      if (status < 200 && status > 300) {
        throw new Error(`Status: ${status}. ${statusText}`) // TODO: check this msg
      }

      setData(rest.data)
    } catch (err) {
      setError(getErrors(err))
    } finally {
      setLoading(false)
    }
  }

  return { fetchData, data, loading, error }
}

export default useAxios
