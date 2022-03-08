import React,{useContext} from 'react'
import OverCard from './OverCard.js'
import {OverviewContext} from '../context/OverviewContext'
import '../styles/Overview.css'
function Overview() {
    const overview = useContext(OverviewContext)
  return (
    <aside className='Overview'>
       {overview.map((data,id) =>(
         <OverCard key={id} {...data}/>
       ))}
    </aside>
  )
}

export default Overview