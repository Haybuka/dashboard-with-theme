import React,{useState,createContext} from 'react'
import fb from '../images/icon-facebook.svg'
import tw from '../images/icon-twitter.svg'
import ig from '../images/icon-instagram.svg'
import yt from '../images/icon-youtube.svg'
import iun from '../images/icon-up.svg'
import idn from '../images/icon-down.svg'

export const OverviewContext = createContext()
export function OverviewProvider(props) {
  const views = [
    {
      handle : 'facebook',
      name : 'Page Views',
      svg : fb,
      figure : 87,
      today : 3,
      icon : iun
    },
    {
      handle : 'facebook',
      name : 'Likes',
      svg : fb,
      figure : 52,
      today : 2,
      icon : idn
    },
    {
      handle : 'instagram',
      name : 'Likes',
      svg : ig,
      figure : 5462,
      today : 2257,
      icon : iun
    },
    {
      handle : 'instagram',
      name : 'Profile Views',
      svg : ig,
      figure : '52k',
      today : 1375,
      icon : iun
    },
    {
      handle : 'twitter',
      name : 'Retweets',
      svg : tw,
      figure : 117,
      today : 303,
      icon : iun
    },
    {
      handle : 'twitter',
      name : 'Likes',
      svg : tw,
      figure : 507,
      today : 553,
      icon : iun
    },
    {
      handle : 'youtube',
      name : 'Likes',
      svg : yt,
      figure : 107,
      today : 19,
      icon : idn
    },
    {
      handle : 'youtube',
      name : 'Total Views',
      svg : yt,
      figure : 1407,
      today : 12,
      icon : idn
    }
  ]
  const [overview,setOverview] = useState(views)
  return (
    <OverviewContext.Provider value={overview}>
        {props.children}
    </OverviewContext.Provider>
  )
}

