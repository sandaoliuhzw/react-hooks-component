import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/home'))
const Layout = React.lazy(() => import('@pages/layout'))
const InputSDL = React.lazy(() => import('@pages/inputsdl'))
const Calendar = React.lazy(() => import('@pages/calendar'))
const LotteryTurntable = React.lazy(() => import('@pages/lottery_turntable'))

const routers = [
  // { path: '/', exact: true, render: () => <Redirect to="home" /> },
  { path: '/', exact: true,  component: Home },
  { path: '/home', component: Home },
  { path: '/layout', component: Layout },
  { path: '/inputsdl', component: InputSDL },
  { path: '/calendar', component: Calendar },
  { path: '/lotteryTurntable', component: LotteryTurntable }
]

export default routers