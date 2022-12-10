import React,{useState} from 'react'
import './Home.css'
import arrow from '../Assets/arrowicon.png'
import write from '../Assets/write.png'
import Login from '../Components/Login/LoginMb'
const Home = ({isLogin}) => {
  const [show,setShow] = useState(false)
  const [writeOn,setWriteOn] = useState(true)
  const handleClick = ()=>{
    setShow(!show)
    setWriteOn(!writeOn)
  }
  return (

    <div>
      <div>
      {show && <Login isLogin={isLogin} show={show} setShow={setShow} setWriteOn={setWriteOn}/>}
      </div>
      <div className='cararol'>
        <div className='joinGroupBtn'>
          <button><img src={arrow} alt="downArrow"/></button>
          <button>Join Group</button>
        </div>
        <div className='blur'>
        <div className='head'>Computer Engineering</div>
        <div className='count'>142,765 Computer Engineers follow this</div>
      </div>
      </div>
      <div className='write' onClick={handleClick}>
        {writeOn && <img src={write} alt="writeicon"/>}
      </div>
    </div>
  )
}

export default Home
