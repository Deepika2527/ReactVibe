import React, { useState } from 'react'

function SignUp() {
    // taking state and keep them as empty string
    const [input,setInput] = useState({
        name : "",
        email : "",
        password : "",
        phone: ""
    })
    // taking state for storing errors
    const [errors,setErrors] = useState({
        nameErr : '',
        emailErr : '',
        paswdErr : "",
        phoneErr : ''
    })
     function handleInput(e){
        let {name,value} = e.target
        console.log("Name", name);
        console.log("Value", value);

        const update_value = {...input, [name]:value}
        console.log("Updated values", update_value);
        setInput(update_value)
        
        
        
     }

     function formValidation(e){
        e.preventDefault()
        const err = {}

        err.nameErr = input.name === ""? "Enter the name"  : ""
        err.emailErr = !input.email.includes('@')? "Email should contains a@" : ""
        err.paswdErr = input.password.length <6 ? "pswd should containe 6 chars" : ""
        err.phoneErr = input.phone.length <10 ? "Phone number shoul contains 10 digits" : ""


        console.log("Errors", err);
        setErrors(err)

        if(err.nameErr === "" && err.emailErr === "" && err.paswdErr === "" && err.phoneErr===""){
            alert("sucessfully signed up")
        }
        else{
            console.log("Fix errors");
            
        }
        




     }

  return (
    <form className='w-100' onSubmit={formValidation} noValidate >
        {/* name */}
        <div className="mb-4">
            <input type="text" name="name" value={input.name}  placeholder='Enter Your Name' className='form-control' onChange={handleInput}/>
            <small className='text-danger'>{errors.nameErr}</small>
        </div>
        {/* email */}
        <div className="mb-4">
            <input type="email" name="email" value={input.email} placeholder='Enter Your Email' className='form-control'  onChange={handleInput}/>
            <small className='text-danger'>{errors.emailErr}</small>
        </div>
        {/* Password */}
        <div className="mb-4">
            <input type="password" name="password" value={input.password}  placeholder='Enter Your password' className='form-control' onChange={handleInput}/>
            <small className='text-danger'>{errors.paswdErr}</small>
        </div>
        {/* phone */}
        <div className="mb-4">
            <input type="text" name="phoneno" value={input.phone}  placeholder='Enter Your phone number' className='form-control'  onChange={handleInput}/>
            <small className='text-danger'>{errors.phoneErr}</small>
        </div>

        <button className='btn btn-primary'>SignUp</button>


    </form>
  )
}

export default SignUp