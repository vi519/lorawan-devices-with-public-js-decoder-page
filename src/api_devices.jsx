import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export default function useDevices() {
    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/photos`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      })

    return {
        devices: data,
        isLoading: !error && !data,
        isError: error
    }
}