import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export default function useDevices() {
    const { data, error } = useSWR(`https://raw.githubusercontent.com/deZemLabs/lorawan-meta-consumer-data/main/lorawan-devices-with-public-js-codec-dump.json`, fetcher, {
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