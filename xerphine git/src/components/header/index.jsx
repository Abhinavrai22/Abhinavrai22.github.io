import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoNew from '../../assets/images/logo2.webp'
import { FaCircleUser } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_STATE } from '../../store/reducers/auth-reducer'

const Header = () => {
    const navigate = useNavigate()
    const [submenu , setSubmenu] = useState(false)
    const dispatch = useDispatch()
    const { user , authenticated , token } = useSelector(state => state.auth)
    
    return (
        <header class="text-white z-[9999]">
            <div class=" mx-auto flex flex-wrap bg-red-400 p-3 w-full flex-col md:flex-row items-center">
                <Link to={() => navigate('/')} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logoNew} alt="" className='h-10' />
                    <span class="ml-3 font-serif font-semibold text-white text-2xl">Xeraphine</span>
                </Link>
                <nav class="md:ml-auto md:mr-auto gap-6 flex flex-wrap items-center text-base justify-center">
                    <Link class=" hover:scale-105 transition-all duration-150">CCTV Cameras</Link>
                    <Link class=" hover:scale-105 transition-all duration-150">About Us</Link>
                    <Link class=" hover:scale-105 transition-all duration-150">Contact Us</Link>
                    <Link class=" hover:scale-105 transition-all duration-150">Address</Link>
                </nav>
                <div onClick={() => setSubmenu(prev => !prev)} className=' relative   inline-flex items-center bg-gray-100 text-gray-600 border-0  focus:outline-none hover:bg-gray-200 rounded-full  text-base mt-4 md:mt-0'>
                    {submenu && <div className='absolute bg-white p-1 shadow-lg gap-2 py-2  flex rounded-md flex-col items-center justify-center -bottom-20 right-6 h-fit w-fit '>
                        <div className='whitespace-nowrap w-full px-4 cursor-pointer hover:bg-gray-100  '>Profile</div>
                        { authenticated && token ? <div className='whitespace-nowrap cursor-pointer px-4 hover:bg-gray-100 ' onClick={() => {
                           dispatch(RESET_STATE()) 
                           navigate('/signIn')
                        }} >Sign Out</div> : <div className='whitespace-nowrap cursor-pointer px-4 hover:bg-gray-100' onClick={() => navigate('/signIn')}>Sign In</div> }
                    </div> }
                <FaCircleUser size={34} />
                </div>
            </div>
        </header>
    )
}

export default Header