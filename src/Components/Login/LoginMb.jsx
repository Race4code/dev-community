import React ,{useState}from 'react'
import './LoginMb.css'
import fb from '../../Assets/small/fb.png'
import gmail from '../../Assets/small/gmail.png'
import back from '../../Assets/cross.png'
const Login = ({isLogin,show,setShow,setWriteOn}) => {
  const [loginpage,setLoginpage] = useState(false)
  const handleExit = ()=>{
    setShow(!show)
    setWriteOn((pre)=>!pre)
  }
  const handleSignIn = ()=>{
    setLoginpage(!loginpage)
  }
  return (

    <div className='outerLogin'>
        <div className='loginCardd'>
            <div className='top'>
                {loginpage?<p>Welcome back!</p>:<p>Create Account</p>}
                <img src={back} alt="back"onClick={handleExit}/>
            </div>
            <div className='formm'>
                <form>
                    {!loginpage && <div className='namee'>
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                    </div>}
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    {!loginpage && <input type="text" placeholder='Confirm Password'/>}
                    <div className='createBtn'>                
                        {loginpage ? <button type='submit'>Sign In</button>:<button type='submit'>Create Account</button>}
                        {loginpage ? <p onClick={handleSignIn}>or, Create Account</p>:<p onClick={handleSignIn}>or, Sign In</p>}
                    </div>
                </form>
                <button><img src={fb} alt="fb"/> Sign up with Facebook</button>
                <button><img src={gmail}alt="gmail"/> Sign up with Google</button>
            </div>
            {loginpage ? <p>Forget Password?</p>:<p>By signing up, you agree to our Terms & conditions, Privacy policy</p>}
        </div>
    </div>
  )
}

export default Login