import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/home'))
const Layout = React.lazy(() => import('@pages/layout'))

const routers = [
  { path: '/', exact: true, render: () => <Redirect to="home" /> },
  { path: '/home', component: Home },
  { path: '/layout', component: Layout }
]

export default routers