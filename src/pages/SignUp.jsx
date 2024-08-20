import React from "react";

import img from '../assets/images/logoName.jpg'
import img4 from '../assets/images/bullet1.png'
import img2 from '../assets/images/bullet2.png'
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Urls from "../config/apiEndpoints";
import { useDispatch } from "react-redux";
import { SET_AUTHENTICATION, SET_TOKEN, SET_USER } from "../store/reducers/auth-reducer";

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, } = useForm()

  const submitData = (data) => {
    axios.post(`${Urls.baseUrl+Urls.signIn}` , data).then((res) => {
      if(res?.status === 200){
       
        dispatch(SET_USER(res?.data?.data?.user))
        dispatch(SET_TOKEN(res?.data?.data?.tokens))
        dispatch(SET_AUTHENTICATION(true))
        if(res?.data?.data?.user?.role === 'ADMIN'){
          navigate('/dashboard')
        }else{
          navigate('/')
        }
      }
    }).catch((error) => {
      alert(error.response?.data?.message)
    })
  }
  return (
    <section className="w-screen h-screen">
      <div className="w-full  h-full flex items-center justify-center">
        <div className="w-full relative  flex items-center justify-center h-full bg-slate-50 ">
          <div className="lg:w-[35%]  md:w-[55%] w-[80%] flex flex-col p-4 py-8 items-center justify-center h-fit border-[1px] border-gray-100 rounded-2xl shadow-xl">
            <div className="w-[90%]  ">
              <div className="w-full my-3 flex items-center justify-center">
                <div className="w-fit h-fit border-b border-red-300 pb-2">
                  <img src={img} alt="" className="w-fit  h-[50px]" />
                </div>
              </div>
              <div className="w-full flex flex-col py-4 gap-3 mt-2">

                <h1 className="text-5xl  text-gray-600 font-bold font-serif">Sign in</h1>
                <p className="text-gray-700 text-sm">Welcome Back !!!</p>
              </div>
              <form onSubmit={handleSubmit(submitData)}>
                <div className="w-full flex flex-col gap-2 py-2">
                  <label className="cursor-pointer" htmlFor="email">Email</label>
                  <input type="email" name="email" {...register('email' ,  { required: true })}  className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="email" />
                  {errors.email && <span className='text-xs text-red-200'>This field is required</span>}
                </div>
                <div className="w-full flex flex-col gap-2 py-2">
                  <div className="w-full  flex justify-between items-center">
                    <label className="cursor-pointer" htmlFor="password">Password</label>
                    <span className="text-gray-500 underline underline-offset-2 cursor-pointer">Forgot <span className="text-gray-700">Password?</span></span>
                  </div>
                  <input type="password" name="password" {...register('password' , { required: true })} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="password" />
                  {errors.password && <span className='text-xs text-red-200'>This field is required</span>}
                </div>
                <div className="w-full flex items-center justify-center my-3 p-2">
                  <button type="submit" className="flex items-center btn group gap-3 justify-center "><span>Sign in</span> <IoMdArrowForward className="mt-1" /></button>
                </div>
              </form>
              <div className="w-full flex items-center  justify-center my-2 p-2">
                <span className="text-gray-400  text-sm">I don't have an account ? <span onClick={() => navigate('/signup')} className="text-red-300 cursor-pointer font-semibold">Sign up</span></span>
              </div>
            </div>
          </div>
          <div className="absolute md:block hidden  right-0 -top-8">
            <img src={img4} alt="" className="h-[150px]" />
          </div>
          <div className="absolute md:block hidden -left-1 -top-8">
            <img src={img2} alt="" className="h-[150px]" />
          </div>
        </div>

      </div>
    </section>
  );
}