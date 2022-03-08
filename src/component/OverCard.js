import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/Over.css'
function OverCard({handle,name,svg,figure,icon,today}) {

  const {mode} = useContext(ThemeContext)
  return (
    <div className={mode ? `Overcard light-card` : `Overcard dark-card`}>
        <aside className='OverCard-head'>
            <p>{name}</p>
            <img src={svg} alt={handle}/>
        </aside>
        <aside className={handle === 'youtube' ? 'OverCard-body tube' : 'OverCard-body today-default'}>
            <p>{figure} </p>
            <div>
                <img src={icon} alt={handle}/>
                <span>{today}%</span>
            </div>
        </aside>
    </div>
  )
}

export default OverCard