import axios from 'axios'
import React, { useState } from 'react'
import Urls from '../../../../config/apiEndpoints'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const AddCategories = () => {
    const navigate = useNavigate()
    const { token , user , authenticated } = useSelector(state => state.auth)
    const { register , handleSubmit , formState: { errors }, } = useForm()
    const submitData = (data ) => {
        axios.post(`${Urls.baseUrl+Urls.category}`  , data , {
            headers: {
                'Authorization': token?.authToken
            }
        } ).then((res) => {
            if(res.status === 201){
                alert(res?.data?.message)
                navigate('/allCategories')
            }
        })
    }
  return (
    <div className="w-full  h-full flex items-center justify-center">
        <div className="w-full relative  flex items-center justify-center h-full bg-slate-50 ">
          <div className="lg:w-[35%]  md:w-[55%] w-[80%] flex flex-col p-4 py-8 items-center justify-center h-fit border-[1px] border-gray-100 rounded-2xl shadow-xl">
            <div className="w-[90%]  ">
              <div className="w-full my-3 flex items-center justify-center">
                <div className="w-fit h-fit border-b border-red-300 pb-2">
                  <h1>Add Categories</h1>
                </div>
              </div>
              <form onSubmit={handleSubmit(submitData)}>
                <div className="w-full flex flex-col gap-2 py-2">
                  <label className="cursor-pointer" htmlFor="email">Category Name</label>
                  <input type="text" name="categoryName" {...register('categoryName' ,  { required: true })}  className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="email" />
                  {errors.categoryName && <span className='text-xs text-red-200'>This field is required</span>}
                </div>
                <div className="w-full flex flex-col gap-2 py-2">
                  <div className="w-full  flex justify-between items-center">
                    <label className="cursor-pointer" htmlFor="password">Description</label>
                  </div>
                  <textarea  name="description" {...register('description' , { required: true })} className="border-[1px] bg-gray-50 outline-none p-2 text-sm rounded-md  border-gray-200 " id="password" />
                  {errors.description && <span className='text-xs text-red-200'>This field is required</span>}
                </div>
              
                <div className="w-full flex items-center justify-center my-3 p-2">
                  <button type="submit" className="flex items-center btn group gap-3 justify-center "><span>Submit</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
  )
}

export default AddCategories