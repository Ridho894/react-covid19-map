import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-blue-500">
      <section className="mx-auto flex max-w-6xl justify-between py-4 text-gray-200">
        <div>CORONAVIRUS</div>
        <div>
          <button>How to protect yourself</button>
        </div>
      </section>
      {/* <Image src={'/'} /> */}
    </header>
  )
}

export default Header
