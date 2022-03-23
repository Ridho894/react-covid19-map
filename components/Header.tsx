import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'
import world from '../lib/world.json'

function Header() {
  return (
    <header className="bg-blue-500">
      <h1>Header</h1>
      <div className="">
        <VectorMap
          {...world}
          checkedLayers={['nz-auk']}
          currentLayers={['nz-wgn']}
          key="world"
        />
      </div>
    </header>
  )
}

export default Header
