import { useState } from 'react'
import { Link, useNavigate} from'react-router-dom'
import axios from 'axios'

const ForgotPass = () => {


    return (
            <div className="w-full bg-gray-900 max-w-xs mx-auto justify-center items-center mt-5">
                <p className="text-center text-white pt-3 font-bold"> Forgot password? </p>
                <form  className="bg-gray shadow-md rounded px-8 pt-4 pb-3 mb-2">
                    <div className="mb-2">
                    <label className="block text-white text-sm font-bold mb-1" htmlFor="username">  Email </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="username" type="email" placeholder="Username" />
                    
                    </div>
                  
                    <div className="flex items-center justify-between py-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                       Send Link
                    </button>
                    </div>
                </form>
            </div>
    )
}

export default ForgotPass;