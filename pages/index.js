import styles from '../styles/Home.module.css'
import React from 'react'
import Object from '../components/Object'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'


const index = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Object/>
    </>
  )
}

export default index

