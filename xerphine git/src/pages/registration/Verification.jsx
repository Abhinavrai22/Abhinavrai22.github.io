import React, { useEffect, useLayoutEffect, useState } from 'react'
import yes1 from '../../assets/images/yes.gif'
import { FaCheck } from 'react-icons/fa'
import logo from '../../assets/images/logoName.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../../utils/Api'
import Urls from '../../config/apiEndpoints'
import { BiSolidErrorCircle } from 'react-icons/bi'
import axios from 'axios'

const Verification = () => {
    const navigate = useNavigate()
    const {token} = useParams()
    const [verified, setVerified] = useState(false)
    const [load , setLoad] = useState(true)
    const [preVerified , setPreVerified] = useState(false)

    const verifyEmail = async (token) => {
        axios.get(`${Urls.baseUrl+Urls.verifyEmail + '/'+token }`).then((res) => {
            if(res.status === 200 ){
                alert(res?.data?.message)
                setVerified(false)
                setLoad(false)
            }
            else if(res?.status === 204) {
                setLoad(false)
                setVerified(false)
                setPreVerified(true)
            }
            else {
                setLoad(false)
                
            }
        }).catch((error) => {
            console.log(error.response?.data?.message)
        })
    }

    useLayoutEffect(() => {
        verifyEmail(token)
    } , [])


    return (
        <div className='w-screen h-screen' >
            { !load ? <div className='flex justify-center w-full items-center h-full'>
                <div className='md:w-[40%] lg:w-[25%] shadow-2xl flex flex-col items-center justify-center rounded-3xl h-fit'>
                    <div className='w-full h-16 bg-gray-700 rounded-t-3xl' ></div>
                    { verified ? <div className='rounded-3xl z-10 flex flex-col w-full -mt-5  h-fit'>
                        <div className='w-full  flex bg-white rounded-3xl items-center justify-center h-fit'>
                            <div className='w-fit h-fit  -mt-11 shadow-xl mx-a bg-white p-2 rounded-full '>
                                <img src={yes1} alt="" className='h-20 w-20' />
                            </div>
                        </div>
                        <div className='w-full h-fit py-6 gap-4 flex-col items-center justify-center flex'>
                            <h1 className=' flex font-semibold font-sans flex-col items-center justify-center text-2xl '>

                                <span>Your Email has </span> <span className='whitespace-nowrap'> successfully verified!</span>
                            </h1>
                            <div className='w-fit h-fit p-2 my-4 rounded-full bg-white shadow-md'>
                            <FaCheck className='text-green-500  rounded-full' size={22} />
                            </div>
                            <button onClick={() => navigate('/')} className='btn px-10'>
                                Go To Dashboard
                            </button>
                            <img src={logo} alt="" className='w-[70%] my-5' />
                        </div>
                    </div> : <div className='rounded-3xl z-10 flex flex-col w-full -mt-5  h-fit'>
                        <div className='w-full  flex bg-white rounded-3xl items-center justify-center h-fit'>
                            <div className='w-fit h-fit  -mt-11 shadow-xl mx-a bg-white p-2 rounded-full '>
                                
                                <BiSolidErrorCircle className='h-20 text-red-300 w-20' />
                            </div>
                        </div>
                        <div className='w-full h-fit py-6 gap-4 flex-col items-center justify-center flex'>
                            <h1 className=' flex font-semibold font-sans flex-col items-center justify-center text-2xl '>

                                { preVerified ?  <>
                                    <span>Your Email was </span> <span className='whitespace-nowrap'> all-ready verified!</span> </>:  <><span>Your Email has </span> <span className='whitespace-nowrap'> not verified!</span></>}
                            </h1>
                            <div className='w-fit h-fit p-2 my-4 rounded-full bg-white shadow-md'>
                            <BiSolidErrorCircle className='text-red-500  rounded-full' size={22} />
                            </div>
                            <button onClick={() => navigate('/signIn')} className='btn px-10'>
                                Go to Sign-in 
                            </button>
                            <img src={logo} alt="" className='w-[70%] my-5' />
                        </div>
                    </div>}
                </div>
            </div> : <div className='flex justify-center w-full items-center h-full'>
                <div className='md:w-[40%] lg:w-[25%] shadow-2xl flex flex-col items-center justify-center rounded-3xl h-fit'>
                    <div className='w-full h-16 bg-gray-700 rounded-t-3xl' ></div>
                     <div className='rounded-3xl z-10 flex flex-col w-full -mt-5  h-fit'>
                        <div className='w-full  flex bg-white rounded-3xl items-center justify-center h-fit'>
                            <div className='w-fit h-fit  -mt-11 shadow-xl mx-a bg-white p-2 rounded-full '>
                                <img src={yes1} alt="" className='h-20 w-20' />
                            </div>
                        </div>
                        <div className='w-full h-fit py-6 gap-4 flex-col items-center justify-center flex'>
                            <h1 className=' flex font-semibold font-sans flex-col items-center justify-center text-2xl '>
                                <span>Please wait for a while, your email is being verified!</span>
                            </h1>
                            
                            <img src={logo} alt="" className='w-[70%] my-5' />
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default Verification