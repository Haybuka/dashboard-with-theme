import React,{useContext,memo} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Media from './Media'
import Overview from './Overview.js'
import '../styles/Dashboard.css'
function Dashboard() {
    const {mode,setMode} = useContext(ThemeContext)
  return (
    <main className='Dashboard'>
       <section className='Dashboard-media'>
           <div className='Dashboard-head'>
              <article>
                <h3>Social Media Dashboard</h3>
                 <p>Total Followers : <span>23,004</span></p>
              </article>
              <aside className='mode'>
                 <p>Dark Mode</p>
                 <label className={!mode ? 'dark-label' : 'light-label'}>
                    <input type="checkbox" onChange={e => setMode(!mode)}/>
                    <span></span>
                 </label>
              </aside>
           </div>
           <Media />
       </section>
       <section className='Dashboard-overview'>
           <div className='Dashboard-head'>
              <article>
                <h3>Overview - Today</h3>
              </article>
           </div>
           <Overview />
       </section>
    </main>
  )
}

export default memo(Dashboard)