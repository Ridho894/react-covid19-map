import React from 'react'

interface InfoBoxProps {
  activeQuantity: number
}

const InfoBox = {
  Active: ({ activeQuantity }: InfoBoxProps) => {
    return (
      <main>
        <h1>{activeQuantity}</h1>
      </main>
    )
  },
  Closed: () => {
    return (
      <main>
        <h1>Closed</h1>
      </main>
    )
  },
  Statistic: () => {
    return (
      <main>
        <h1>Statistic</h1>
      </main>
    )
  },
}

export default InfoBox
