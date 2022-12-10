import React from 'react'
import './Navbar.css'
import down from '../../Assets/small/downicon.png'
import group from '../../Assets/small/groupicon.png'
import leave from '../../Assets/small/leavegroup.png'
const Navbar = ({isLogin}) => {
  // const[classes,setClasses]= useState("navigation")
  // window.onscroll = ()=>{
  //   triggerFunction()
  // }
  // var navbar = document.getElementsByClassName('navigation')
  // var sticky = navbar.style.marginTop
  // const triggerFunction = ()=>{
  //   if(window.pageYOffset>=568){
  //     setClasses("navigation sticky")
  //   }else{
  //     setClasses("navigation")
  //   }
  // }
  return (
    <div>
    <div className='navigation'>
        <div className='navitems'>
            <p>All Posts(32)</p>
            <p>Article</p>
            <p>Event</p>
            <p>Education</p>
            <p>Job</p>
        </div>
        <div className='btns'>
            <button className='writePostbtn'><p>Write a Post</p><img src={down} alt="downArrow"/></button>
            {isLogin ?<buttton className="leaveGroup"><img src={leave} alt="leave"/> <p>Leave group</p></buttton>
            :<button className='joinbtn'><img src={group} alt="group"/><p>Join Group</p></button>}
        </div>
    </div>
    <hr/>
    <div className='androidNav'>
      <p>Posts(368)</p>
      <button>Filter: All<img src={down} alt="downArrow"/></button>
    </div>
    </div>
  )
}

export default Navbar