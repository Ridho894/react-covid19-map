import React from 'react'
import { Disclosure } from '@headlessui/react'

export default function Navbar({ onClick, name, role, picture, logout, email }) {
    return (
        <Disclosure as="nav" className="bg-gradient-to-r from-red-800 to-blue-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <h1 className={'text-white text-2xl font-bold'}>Covid19-Map</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}