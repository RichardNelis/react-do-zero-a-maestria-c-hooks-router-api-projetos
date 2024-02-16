import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{name: "Richard", email:"souza@souza.com", bio: "Teste bio", role: "admin"}} />
    </>
  )
}

export default App
