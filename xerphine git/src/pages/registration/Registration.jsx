import React, { useState } from 'react'
import storeImg from '../../assets/images/shopeImage.webp'
import { useForm } from 'react-hook-form'
import img from '../../assets/images/logoName.jpg'
import axios from 'axios'
import Urls from '../../config/apiEndpoints'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const { register , handleSubmit , formState: { errors }, } = useForm()
    const [loader , setLoader] = useState()
    const navigate = useNavigate() 
    const onSubmit = (data) => {
      setLoader(true)
        if(data?.userType){
            data['userType'] = 'WHOLE_SELLER'
        }
        else{
            data['userType'] = 'INDIVIDUAL_USER'
        }
        axios.post(`${Urls.baseUrl}/auth/sign-up` , data).then((res)=> {
          
          if(res.status === 201){
            alert(res.data?.message)
            navigate('/signIn')
          }else{
            alert(res.data?.message)
          }
        }).catch((errors) => {
          alert(errors.response?.data?.message)
        })
    }

  return (
    <section className='w-screen h-fit md:h-screen md:p-2 p-6 flex items-center justify-center overflow-auto new-scroll'>
      <div className='w-[90%] md:h-[90%] max-h-fit shadow-xl overflow-auto new-scroll rounded-lg md:flex'>
        <div className='lg:w-[40%] relative md:w-[70%] w-full md:h-full h-[40vh] md:rounded-tr-none rounded-t-lg md:rounded-l-lg'>
          <div className='bg-black bg-opacity-60 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center justify-center z-10 absolute top-0 left-0 w-full h-full'>
            <div className='w-[90%] flex flex-col'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-100 font-serif'>
                Xeraphine <span className='text-xs md:text-sm'>(Technology)</span>
                </h1>
                <p className='text-gray-300 text-xl md:text-3xl font-serif font-semibold'>Seeing Every Moment, Securing Every Place</p>
            </div>
          </div>
          <img src={storeImg} alt="" className='w-full h-full object-cover rounded-t-lg md:rounded-tr-none  md:rounded-l-lg' />
        </div>
        <div className='lg:flex-1  flex flex-col items-center justify-center border  md:rounded-r-lg w-full h-full '>
            <div className='w-full flex items-center justify-center md:mt-4 p-3'>
                <img src={img} alt="" className='md:h-[80px]' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full  lg:w-[90%] flex items-center justify-center'>
            <div className='w-full  lg:w-[90%]  h-fit grid grid-cols-1 md:grid-cols-2 my-2 md:gap-2  md:mt-4 p-3'>
            <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="name">Name</label>
                <input type="text" name="name" {...register("name", { required: true })} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="name" />
                {errors.name && <span className='text-xs text-red-200'>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="email">Email</label>
                <input type="email" name="email" {...register("email", { required: true })} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="email" />
                {errors.email && <span className='text-xs text-red-200'>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="phone">Phone No.</label>
                <input type="number" min={1000000000} name='phoneNumber' {...register("phoneNumber", { required: true })} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="phone" />
                {errors.phoneNumber && <span className='text-xs text-red-200'>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="phone2">Alternate No.</label>
                <input type="number" name="alternatePhoneNumber" {...register("alternatePhoneNumber")} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="phone2" />
              </div>
              <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="phone2">Password</label>
                <input type="password" name="password" {...register("password")} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="phone2" />
              </div>
              <div className="w-full flex flex-col gap-1 py-2">
                <label className="cursor-pointer text-sm font-semibold text-gray-600 " htmlFor="phone2">Confirm Password</label>
                <input type="password" name="confirmPassword" {...register("confirmPassword")} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-100 text-gray-600 " id="phone2" />
              </div>
              <div className="md:col-span-2 grid gap-2 py-2">
                <div className='flex items-center w-full gap-2'>
                <input type="checkbox" name="userType" {...register("userType")} defaultChecked={false} id="" />
                <span className='text-gray-500'>Are you a whole seller?</span>
                </div>
              </div>

              
             <div className='grid my-4 md:col-span-2'>
                <div className='w-full flex items-center  justify-center'>
                    <button type='submit' className='btn'>Submit</button>
                </div>
             </div>
            </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Registration
