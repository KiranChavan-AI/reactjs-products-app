import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import DataBinding from './components/DataBinding'
// import DiscountOffer from './components/DiscountOffer'
// import ProductList from './components/ProductList'
// import Search from './components/Search'
import Layout from './components/Layout'
//import './App.css'

//function component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Welcome to first React JS app</h4>
     {/*<DataBinding/>*/} 
      {/* <DiscountOffer/> */}
      {/*<Search/>*/}
      <Layout/>

    </>
  )
}

export default App
