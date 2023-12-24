import React, { useState } from'react';
import { Link, useNavigate} from'react-router-dom'
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmationPassword] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleRegisterForm = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://192.168.10.26:8080/api1/register',{name, email, password, confirm_password, gender,});
            setName('');
            setEmail('');
            setPassword('');
            setConfirmationPassword('');
            setGender('');

           navigate('/');
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
        <div className="w-full bg-gray-900 max-w-xl mx-auto justify-center items-center mt-5">
                <h2 className="text-center text-white pt-4 font-bold"> Register to News App </h2>
                <form onSubmit={handleRegisterForm} className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
                   <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">  Name </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name"> Email </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="jane@gmail.com" />
                        </div>
                    </div>

                   <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">  Password  </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="*******" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name"> Confirm Password   </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={confirm_password} onChange={(e) => setConfirmationPassword(e.target.value)} id="confirm-password" type="password" placeholder="*******" />
                        </div>
                    </div>
                    
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Gender </h3>
                    <ul className="items-center w-full mb-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="male-radio" type="radio" name="gender-name" 
                                value="male" checked={gender === 'male'} onChange={handleGenderChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="male-radio" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Male </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="female-radio" type="radio" name="gender-name" 
                                value="female" checked={gender === 'female'} onChange={handleGenderChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="female-radio" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Female </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="other-radio" type="radio" name="gender-name" 
                                value="other" checked={gender === 'other'} onChange={handleGenderChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="other-radio" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Other </label>
                            </div>
                        </li>
                    </ul>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Register;