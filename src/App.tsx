import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import geh_content from './assets/what.jfif'
import vite_logo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='h-screen'>
        <p>DENNIS JOHN TONZO</p>
        <p>Computer Software Developer</p>
      </section>
      <section className='h-screen'>
        <h1>SKILLS SUMMARY</h1>
      </section>
      <section className='h-screen'>
        <h1>
          MY JOURNEY
        </h1>
      </section>
      <section className='h-screen'>
        <h1>LETS TALK!</h1>
      </section>
    </div>
  )
}

export default App
