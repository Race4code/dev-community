import React ,{useState}from 'react'
import './Login.css'
import fb from '../../Assets/small/fb.png'
import gmail from '../../Assets/small/gmail.png'
import image from '../../Assets/small/loginimage.png'
import back from '../../Assets/small/back.png'
const Login = ({isLogin,setShow,show}) => {
  const [loginpage,setLoginpage] = useState(false)
  const handleExit = ()=>{
    setShow(!show)
  }
  const handleSignIn = ()=>{
    setLoginpage(!loginpage)
  }
  return (
    <div className='outerLoginCard'> 
    <div className='loginCard'>
    <div className='exit' onClick={handleExit}>
      <img src={back} alt="back"/>  
    </div>
    <div className='loginCardInner'>
        <div className='loginCardTopbar'>
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='loginCardContent'>
          <div className='loginForm'>
            {loginpage?<p className='loginSignup'>Sign In</p>:<p className='loginSignup'>Create Account</p>}
            {!loginpage?
              <form className='form'>
                <div className='name'>
                  <input type="text" placeholder='First Name' />
                  <input type="text" placeholder='Last Name'/>
                </div>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input type="text" placeholder='Confirm Password'/>
                  <button type="submit">Create Account</button>
              </form>:
               <form form className='form'>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <button type="submit">Sign In</button>
             </form>
            }
            <button className='thirdpartylogin'><img src={fb} alt="fb"/> <p>Sign up with Facebook</p></button>
            <button className='thirdpartylogin'><img src={gmail} alt="gamil"/><p>Sign up with Google</p></button>
            {loginpage && <p className='forgetPassword'>Forget Password?</p>}
          </div>
          <div className='loginCardImage'>
            {loginpage?
              <span>Don't have an account yet? <p onClick={handleSignIn}> Create new for free!</p></span>
              :<span>Already, have an account? <p onClick={handleSignIn}> Sign In</p></span>
            }
            <img src={image} alt=""/>
            <p className='agreement'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login