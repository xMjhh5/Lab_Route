import React from 'react'

export default function Nav() {
  return (
    <>
        <nav >
            <ul className='flex gap-3 justify-end p-5 bg-sky-600 text-white m-4'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About/info">Login</a></li>
            </ul>
        </nav>
    
    </>
  )
}
