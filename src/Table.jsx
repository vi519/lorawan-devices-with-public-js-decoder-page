/* This example requires Tailwind CSS v2.0+ */
import useDevices from "./api_devices"

const examplePayload = {
  "devices": [
    {
      "id": "example/windsensor",
      "name": "Wind Sensor",
      "description": "Wind Sensor with controllable LED",
      "vendor-name": "Example",
      "image-url": "https://raw.githubusercontent.com/TheThingsNetwork/lorawan-devices/master/vendor/example/windsensor.jpg",
      "sensors": [
        "wind direction",
        "wind speed"
      ],
      "has-js-codec": true
    },
    {
      "id": "adeunis/pulse",
      "name": "Pulse",
      "description": "The Adeunis Pulse impulse interface allows connecting up to 2 connectable meters (water, gas, electricity, etc) and provides LoRaWAN® connectivity.",
      "vendor-name": "Adeunis",
      "image-url": "https://raw.githubusercontent.com/TheThingsNetwork/lorawan-devices/master/vendor/adeunis/pulse.png",
      "sensors": [
        "pulse count"
      ],
      "has-js-codec": false
    }]
}

export default function Table() {
  const { devices, isLoading, error } = useDevices()

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const filterA = devices.devices.slice(0);
  console.log(filterA);
  const sorted = [...filterA].sort((a, b) => b['vendor-name'] - a['vendor-name']);
  console.log(sorted);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Has JS codec</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sensors</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sorted.map((device) => (
                  <tr key={device.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={device['image-url']} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{device.name.slice(0, 20)}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{device['vendor-name'].slice(0)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{device.description.slice(0, 60)}...</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${device['has-js-codec'] ? 'bg-green-100' : 'bg-red-100'} text-green-800`}>
                        {device['has-js-codec'] ? 'true' : 'false'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.sensors.join('|').slice(0, 20)}...</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={device['image-url']} target="_blank" rel="noopener" className="text-indigo-600 hover:text-indigo-900">Open</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
