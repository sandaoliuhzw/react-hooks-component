import './side-nav.less'
import { Link } from 'react-router-dom'

let navList = [
  {
    name: '首页',
    link: 'home'
  },
  {
    name: '布局',
    link: 'layout'
  }
]
const Item = (props) => {
  return (
    // <li to={props.data.link}>{props.data.name}</li>
    <li >
      <Link to={props.data.link}>
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