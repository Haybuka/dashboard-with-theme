import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/Card.css'
function Card({svg,icon,handle,name,total,today}) {
  const {mode,setMode} = useContext(ThemeContext)
  return (
    <section className={mode ? `Card light-card Card-${handle}` : `Card dark-card Card-${handle}`}>
       <p className='Card-handle'>
         <img src={svg}/>
          @{name}
       </p>
       <h3 className='Card-lead'>
          <p className='Card-total'>{total}</p>
          <p className='Card-follow'>FOLLOWERS</p>
       </h3>
       <p className={handle==='youtube' ? 'Card-today tube':'Card-today today-default'}> 
          <img src={icon}/>
          {today} Today
      </p>
    </section>
  )
}

export default Card