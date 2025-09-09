import { useContext, useState } from "react";
import {AuthContext} from "../authContext.jsx"
const Login = () => {
    const { currentUser, login,signup, logout} = useContext(AuthContext)

    const [isSignup, setIsSignup] = useState(false)
    const [ form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const action = isSignup ? signup: login
        const {error} = action(form)
        
        if (error) setError(error)
        else {
            setError("")
            setForm({ username: "", email: "", password: ""})}
    }


    if (currentUser) {
        return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.username}!</h2>
          <p className="mb-4">Your email: {currentUser.email}</p>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    )
    }


    return (
    <div className="min-h-screen flex items-center my-15 justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
            {isSignup ? "Sign Up" : "Login"}
        </h2>

        <form onSubmit = {handleSubmit}>
          {isSignup && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              placeholder="Enter your username"
            />
          </div>)}

          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              placeholder="Enter your password"
            />
          </div>
           {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-900"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          
          <p className="text-center mt-4 text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-gray-800 hover:underline">
              {isSignup ? "Login here" : "Signup here"}
            </button>
          </p>
        </form>
      </div>
    </div>
    )
};

export default Login;
