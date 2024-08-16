import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Header from './header'
import Footer from './footer/Footer'
import img from '../assets/images/logoNew.png'
import { useNavigate } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6'
import { MdDashboard, MdOutlineProductionQuantityLimits } from 'react-icons/md'

const Layout = ({ children }) => {

    const user = useSelector(state => state.auth?.user)
    const navigate = useNavigate()
    const sideElement = useMemo(() => {
        return [
            { name: 'Dashboard', icon: <MdDashboard size={45} />, link: '/dashboard' },
            { name: 'Products', icon: <MdOutlineProductionQuantityLimits size={45} />, link: '/allProducts' },
            { name: 'Categories', icon: '', link: '/allCategories' },

        ]
    }, [])

    return (
        <>
            {user?.role === 'ADMIN' && <div className={`max-w-screen flex min-h-screen h-fit new-scroll overflow-auto`} >
                <div className='w-[80px] h-screen overflow-auto new-scroll bg-gray-600'>
                    <div className='w-full items-center border-b flex justify-center p-2 flex-col h-14'>
                        <img src={img} className='w-full h-full ' alt="" />
                    </div>
                    {
                        sideElement?.map((item) => {
                            return <div onClick={() => {
                                navigate(item?.link)
                            }} className='w-full items-center border-b bg-gray-600 p-2 hover:bg-gray-100 hover:text-gray-600 text-white flex justify-center flex-col '>
                                {item?.icon}
                                <span className='text-sm'>{item?.name}</span>
                            </div>
                        })
                    }
                </div>
                <div className='flex-1'>
                    <div className='w-full h-14 items-center justify-end p-3 bg-red-300 flex  ' >
                        <div className='w-fit flex items-center justify-center '>
                        <h1>{user?.role}</h1>
                            <div className='p-1 rounded-full bg-white'>
                                
                                <FaCircleUser size={32} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full overflow-auto new-scroll p-2'>{children}</div>
                </div>
            </div>} 
            {
              user?.role !== 'ADMIN' &&  <div className={`w-full min-h-screen h-fit  relative`} >
                    <div className='sticky top-0 z-50  w-full '>
                        <Header />
                    </div>
                    <div className='w-full  flex flex-col items-center overflow-auto hide-scroll justify-center  '>
                        {children}
                        <div className='w-full'>
                            <Footer />
                        </div>
                    </div>
                </div>
            }
</>
    )
}

export default Layout