import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15;

  const [name] = useState("Richard")

  const redTitle = true

  return (
    <>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do APP js</p>
      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/*Inline CSS dinâmico*/}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={name === "Richard" ? ({ color: "green", backgroundColor: "red" }) : ({ color: "yellow", backgroundColor: "yellowgreen" })}>CSS dinâmico</h2>
      <h2 style={name !== "Richard" ? ({ color: "green", backgroundColor: "red" }) : ({ color: "yellow", backgroundColor: "yellowgreen" })}>CSS dinâmico</h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/*CSS Modules*/}
      <Title />
      
    </>
  )
}

export default App
