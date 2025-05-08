import { useState } from 'react'
import Header from "./Components/Header/Header"
import Carousel from "./Components/Carousel/CarouselEffect"
import './App.css'
import CategoryCard from './Components/Category/CategoryCard'
import Product from './Components/Product/Product'
import Routering from './Routering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routering/>
    </>
  )
}

export default App
