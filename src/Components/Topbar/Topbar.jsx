import React ,{useState}from 'react'
import Search from '../Search/Search'
import logo from '../../Assets/weblogo.png'
import './Topbar.css'
import Login from '../Login/Login'
import userImage from '../../Assets/ronal.png'
import down from '../../Assets/small/downicon.png'
const Navbar = ({isLogin}) => {
  const [show,setShow] = useState(false)
  const handleLoginSignup = ()=>{
    setShow(!show)
  }
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo'/>
        <Search />
        {isLogin?
          <div className='userProfile'>
            <img src={userImage} alt="user"/>
            <p>Siddarth Goyal</p>
            <img src={down} alt="downArrow"/>
          </div>
         :<p>Create account.<span onClick={handleLoginSignup}><a href="#df">It's free!</a></span></p>
        }
        {show && <Login isLogin={isLogin} setShow={setShow} show={show}/>}
    </nav>
  )
}

export default Navbar
