import { useState } from 'react'
import Edit from './components/Edit.js'
import List from './components/List.js'
import './index.css'


const Home = () => {

  // let a = 100
  const [a, setA] = useState(100)
  function plus(){
    setA(function (prev) {
      return prev + 200
    })
  }
  return <div className="app">
    {a}
    <button onClick={plus}>加法</button>
    <Edit />
    <List />
  </div>
}

export default Home
