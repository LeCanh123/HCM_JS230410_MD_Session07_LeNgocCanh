import React from 'react'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import DealOfWeek from './component/Body/Body'
import Clock from './component/Clock/Clock'
import Footer from './component/Footer/Footer'
import "./App.css"

export default function App() {
  return (
    <div >
      <Header></Header>
      <Nav></Nav>
      <DealOfWeek></DealOfWeek>
      <Footer></Footer>
    </div>
  )
}
