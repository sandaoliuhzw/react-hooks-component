import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/home'))
const Layout = React.lazy(() => import('@pages/layout'))
const InputSDL = React.lazy(() => import('@pages/inputsdl'))

const routers = [
  // { path: '/', exact: true, render: () => <Redirect to="home" /> },
  { path: '/', exact: true,  component: Home },
  { path: '/home', component: Home },
  { path: '/layout', component: Layout },
  { path: '/inputsdl', component: InputSDL }
]

export default routers