import React from 'react'
import img from '../../assets/images/logoName.jpg'
import img4 from '../../assets/images/bullet1.png'
import img2 from '../../assets/images/bullet2.png'
import { IoMdArrowForward } from 'react-icons/io'

const VerifyOtp = () => {
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
              <div className="w-full flex flex-col gap-2 py-2">
                <label className="cursor-pointer" htmlFor="email">Email</label>
                <input type="email" name="" className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="email" />
              </div>
              <div className="w-full flex flex-col gap-2 py-2">
                <div className="w-full  flex justify-between items-center">
                <label className="cursor-pointer" htmlFor="password">Password</label>
                <span className="text-gray-500 underline underline-offset-2 cursor-pointer">Forgot <span className="text-gray-700">Password?</span></span>
                </div>
                <input type="password" name="" className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="password" />
              </div>
              <div className="w-full flex items-center justify-center my-3 p-2"> 
                <button className="flex items-center btn group gap-3 justify-center "><span>Sign in</span> <IoMdArrowForward className="mt-1" /></button>
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
  )
}

export default VerifyOtp