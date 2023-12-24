import { useEffect, useState } from 'react'
import { Link, useNavigate} from'react-router-dom'
import axios from 'axios'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(['']);
    const navigate = useNavigate();
   

    const handleLoginForm = async(event) => {
      event.preventDefault();
      
   

      try {
        await axios.post('http://192.168.10.26:8080/api1/login', {email, password}).then(response => {    
            console.log("response =", response);
            localStorage.setItem('token', response.data.token);

            setEmail('');
            setPassword('');
            
            if (response.data.token) {
               navigate('/');
            }else{
              navigate('/login');
            }
        });
        

      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
    };
    

    return (
            <div className="w-full bg-gray-900 max-w-xs mx-auto justify-center items-center mt-5">
                <h2 className="text-center text-white pt-4 font-bold"> Login to News App </h2>
                <form onSubmit={handleLoginForm} className="bg-gray shadow-md rounded px-8 pt-6 pb-3 mb-2">
                    <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email} onChange={(e) => setEmail(e.target.value)} id="username" type="email" placeholder="Username" />
                     {errors.email && 
                     <div className="flex">
                         <span className="text-red-400 p-2 m-2"> {errors.email} </span>
                    </div> }
                    </div>
                    <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="***************" />
                      {errors.password && 
                     <div className="flex">
                         <span className="text-red-400 p-2 m-2"> {errors.password} </span>
                    </div> }
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot-pass">
                        Forgot Password?
                    </Link>
                    </div>
                </form>
                    <Link className="inline-block align-baseline p-4 mb-3 ms-4 font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
                        Don't have an account? Sign Up
                    </Link>
            </div>
    )
}

export default Login;