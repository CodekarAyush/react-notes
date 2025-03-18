import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App