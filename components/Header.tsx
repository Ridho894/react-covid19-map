import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'

function Header() {
  return (
    <header className="bg-blue-500">
      <h1>Header</h1>
      <div className="h-screen bg-red-500">
        <VectorMap
          id="map"
          map="world_mill"
          backgroundColor="red"
          // layers={[
          //   {
          //     name: 'markers',
          //     data: [
          //       {
          //         latLng: [41.9, 12.45],
          //         name: 'Vatican City',
          //       },
          //       {
          //         latLng: [43.73, 7.41],
          //         name: 'Monaco',
          //       },
          //     ],
          //   },
          // ]}
          checkedLayers={['nz-auk']}
          currentLayers={['nz-wgn']}
        />
      </div>
    </header>
  )
}

export default Header
