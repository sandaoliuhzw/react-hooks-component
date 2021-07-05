import './side-nav.less'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

let navList = [
  {
    name: '首页',
    link: '/home'
  },
  {
    name: '布局',
    link: '/layout'
  },
  {
    name: '输入',
    link: '/inputsdl'
  },
  {
    name: '日历',
    link: '/calendar'
  },
  {
    name: '抽奖转盘',
    link: '/lotteryTurntable'
  }
]
const Item = (props) => {
  const { pathname } = useLocation()
  const [path, setPath] = useState(pathname)
  const [isHome, setIsHome] = useState(false)
  useEffect(() => {
    let path = pathname
    // console.log(path)
    setPath(path)
    if (path === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [pathname]);
  const currentNav = (link) => {
    if (link === path) {
      return 'current-nav'
    } else {
      return ''
    }
  }
  const homeNav = (link) => {
    if (link === '/home' && isHome) {
      return 'home-nav'
    } else {
      return ''
    }
  }
  return (
    <li >
      <Link 
        className={`${currentNav(props.data.link)} ${homeNav(props.data.link)}`} 
        to={props.data.link}
      >
        {props.data.name}
      </Link>
    </li>
  )
}

const sideNav = () => {
  return (
    <div className="side-nav">
      <div className="box">
        <ul>
          {navList.map((data) => <Item key={data.link} data={data}></Item>)}
        </ul>
      </div>
    </div>
  )
}

export default sideNav