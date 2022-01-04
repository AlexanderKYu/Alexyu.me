import React, { useState } from 'react'
import Candy from '../components/Candy'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { AboutObject, ExtraObject, WorkObject, ProjectObject, ContactObject, FooterObject } from '../components/Data'
import Extra from '../components/Extra'
import Work from '../components/Experience'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


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
            <About { ...AboutObject }/>
            <Work { ...WorkObject }/>
            <Project { ...ProjectObject }/>
            <Extra { ...ExtraObject }/>
            <Contact { ...ContactObject}/>
            <Footer { ...FooterObject}/>
        </>
    )
}

export default Home
