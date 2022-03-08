import React,{useContext} from 'react'
import { FollowContext } from '../context/FollowContext'
import Card from './Card'
import '../styles/Media.css'
function Media() {
  const followers = useContext(FollowContext)
  return (
    <aside className='Media'>
       {followers.map((data,id) =>(
         <Card key={id} {...data}/>
       ))}
    </aside>
  )
}

export default Media