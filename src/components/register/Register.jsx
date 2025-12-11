import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jeni from '../image/jeni.jpg';
import toast from "react-hot-toast";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const navigate = useNavigate();

  function submithandler() {
    if((username.trim().length===0)||(password.trim().length===0)||(email.trim().length===0)){
      setNameErr(true)
}
else if(!email.includes('@','.','com')){
  //alert('please Enter valid email address')
  toast.error('Please enter valid email address')
}
else if(password.length<5){
  //alert('please enter the password more than five characters')
  toast.error("please enter the password more than five characters")
}
else{
  setNameErr(false)
  const array =[{username:username,email:email,password:password}]
  console.log(array)
  sessionStorage.setItem('user',JSON.stringify({'name':username, 'email':email, 'password':password}));
  navigate('/login')
  toast.success("Registraction")
  console.log("print hau")
}
  }

  return (
    <div
      style={{
        backgroundImage: `url(${jeni})`
      }}
    >
      <div>
        <h1>
          Register Form
        </h1>

        {nameErr && (
          <p>
            *Please fill every input field*
          </p>
        )}

        <label>
          <p>Name</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>

        <button
          onClick={submithandler}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;



