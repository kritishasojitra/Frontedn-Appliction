import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PurchaseOrderForm from './Page/PurchaseOrderForm'
import Dashboard from './Page/Dashboard'
import MainRouter from './Router/MainRouter'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainRouter/>
     {/* <PurchaseOrderForm/> */}
    </>
  )
}

export default App
