import React from 'react'
import { navbar } from '../utils'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
  return (
    <header className='header'>
        <div>
            <img src="" alt="" />
            <span>Brute Force</span>
        </div>

        <div className=''>
            <nav>
                {navbar.map((item) => (
                    <Link key={item.id} className=''>{item.text}</Link>
                ))}
            </nav>
        </div>
    </header>
  )
}

export default DashboardHeader