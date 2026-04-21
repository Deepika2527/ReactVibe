import React, { useState } from 'react'
import authImg from '../../assets/images/authimg.png'
import Buttn from '../common/Buttn'
import SignIn from './SignIn'
import SignUp from './SignUp'

function AuthPage() {
    const [isLogin,setLogin] = useState(true)
  return (
    <div className="container-fluid vh-100">
        <div className="row h-100">

            {/* Left section beging now */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={authImg} alt="authImg" className='img-fluid'/>


            </div>

             {/* rightside */}
             <div className="col md-6 d-flex flex-column justify-content-center align-items-center">
                <p className='mb-2'>Welcome ✋</p>
                <small className='text-muted mb-3'>Do you want to SignIn/SignUp?</small>
                 
                 {/* Buttons */}
                 <div className="mb-4">
                    <Buttn text="Sign In" onClick={()=>setLogin(true)}/>
                    <Buttn text="Sign Up" onClick={()=>setLogin(false)}/>
                 </div>
                 {/* condtionla rendering */}
                 <div className="w-75">
                    {isLogin ? <SignIn/>: <SignUp/>}
                 </div>
             </div>





        </div>







    </div>
  )
}

export default AuthPage