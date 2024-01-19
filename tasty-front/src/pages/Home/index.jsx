import React from 'react'
import { Helmet } from 'react-helmet-async'
import Menu from '../../components/Menu'
import Slider from '../../components/Slider'
import About from '../../components/About'
import Blog from '../../components/Blog'
import Team from '../../components/Team'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Slider/>
    <About/>
    <Menu/>
    <Team/>
    <Blog/>
    </>
  )
}

export default Home