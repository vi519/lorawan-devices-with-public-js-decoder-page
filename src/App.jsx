import { useState, useEffect } from 'react'
import Intro from './Intro'
import Table from './Table'

import useDevices from './api_devices'


function Profile () {
  const { devices, isLoading , error} = useDevices()

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // render data
  return <div>Device count: {devices.length}!</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="md:container md:mx-auto">
      <Intro></Intro>
      <Table></Table>
    </div>
  )
}

export default App
