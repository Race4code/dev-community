import React ,{useState}from 'react'
import Topbar from './Components/Topbar/Topbar'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Blogpost/Main'
const App = () => {
  const [isLogin,setIsLogin]=useState(false)
  return (
    <div>
        <Topbar setIsLogin={setIsLogin} isLogin={isLogin}/>
        <Home isLogin={isLogin}/>
        <Navbar isLogin={isLogin}/>
        <Main isLogin={isLogin}/>
    </div>
  )
}

export default App
