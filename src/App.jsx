import React from "react"
import Navbar from "./Navbar"
import "./assets/style.css"
// import "./index.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
}
