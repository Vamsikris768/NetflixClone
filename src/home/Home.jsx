import React from 'react'
import './home.scss'
import Navabar from '../components/Navabar'
import Featured from '../featured/Featured'
import List from '../list/List'



const Home = () => {
  return (
    <div className='home'>
      <Navabar/>
     <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home

