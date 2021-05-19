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
  }
]
const Item = (props) => {
  const { pathname } = useLocation()
  const [path, setPath] = useState(pathname)
  useEffect(() => {
    let path = pathname
    setPath(path)
  }, [pathname]);
  return (
    <li >
      <Link className={props.data.link === path ? 'current-nav' : ''} to={props.data.link}>
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