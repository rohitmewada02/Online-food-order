import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jeni from '../image/jeni.jpg'
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
  toast.error('Please enter valid email address')
}
else if(password.length<5){
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
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${jeni})`
      }}
    >
      <div className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-2xl w-[400px]">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Register Form
        </h1>

        {nameErr && (
          <p className="text-red-600 text-center mb-3">
            *Please fill every input field*
          </p>
        )}

        <label className="block mb-4">
          <p className="font-medium">Name</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-gray-500 outline-none py-1"
          />
        </label>

        <label className="block mb-4">
          <p className="font-medium">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-gray-500 outline-none py-1"
          />
        </label>

        <label className="block mb-6">
          <p className="font-medium">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-transparent border-b border-gray-500 outline-none py-1"
          />
        </label>

        <button
          onClick={submithandler}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
