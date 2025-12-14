import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [incorrectErr, setIncorrectErr] = useState(false)

  const navigate = useNavigate();

  function submithandeler() {
    if (!username || !password) {
      toast.error("Please fill all fields");
      return;
    }
    

    let register = JSON.parse(sessionStorage.getItem('user'));

    if (!register) {
      toast.error("No user found! Please register first");
      return;
    }

    if (register.username === username || register.password === password) {
      setIncorrectErr(false);
      toast.success("Login successful");
      navigate('/home');
      console.log("login ho gya hai successfully")
    } else {
      setIncorrectErr(true);
      toast.error("Wrong username or password");
    }
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')"
      }}
    >

      {/* Transparent Card */}
      <div className="bg-white/80 shadow-xl rounded-xl px-10 py-10 w-[380px]">

        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {incorrectErr && (
          <p className="text-red-500 text-sm mb-3">
            Please enter correct username and password
          </p>
        )}

        {/* Username */}
        <label>
          <p className="font-medium">Username</p>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        {/* Password */}
        <label>
          <p className="font-medium mt-4">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        {/* Login Button */}
        <button
          onClick={submithandeler}
          className="w-full mt-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Doesn't have an account yet?
          <Link to="/" className="text-blue-600 font-semibold ml-1">
            Signup
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
