import React,{createContext,useState} from 'react'
import fb from '../images/icon-facebook.svg'
import tw from '../images/icon-twitter.svg'
import ig from '../images/icon-instagram.svg'
import yt from '../images/icon-youtube.svg'
import iun from '../images/icon-up.svg'
import idn from '../images/icon-down.svg'
export const FollowContext = createContext()
export function FollowContextProvider(props) {
    const followers = [
        {
          handle : 'facebook',
          name : 'nathanf',
          svg : fb,
          total : 1987,
          today : 12,
          icon : iun
        },
        {
          handle : 'twitter',
          name : 'nathanf',
          svg : tw,
          total : 1044,
          today : 99,
          icon : iun
        },
        {
          handle : 'instagram',
          name : 'realnathanf',
          svg : ig,
          total : '11k',
          today : 1099,
          icon : iun
        },
        {
          handle : 'youtube',
          name : 'Nathan F.',
          svg : yt,
          total : 8239,
          today : 144,
          icon : idn
        }
      ]
    const [follow,setFollow] = useState(followers)
  return (
    <FollowContext.Provider value={follow}>
        {props.children}
    </FollowContext.Provider>
  )
}
