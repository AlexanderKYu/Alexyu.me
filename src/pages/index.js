import React, { useState } from 'react'
import Candy from '../components/Candy'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen = { isOpen } toggle = { toggle }/>
            <Navbar toggle = { toggle }/>
            <Candy/>
        </>
    )
}

export default Home
