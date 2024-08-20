import React from 'react'
import banner1 from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/bannr2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import Crousal from '../../components/sharable/Crousal'


const Home = () => {

    const category = [
        {
            name: 'Wi-Fi Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner1
        },
        {
            name: 'IP Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner2
        },
        {
            name: 'Land Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner3
        },
        {
            name: 'Lehsun Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner4
        },
    ]

    const products = [
        {
            name: 'Wi-Fi Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner1
        },
        {
            name: 'IP Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner2
        },
        {
            name: 'Land Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner3
        },
        {
            name: 'Lehsun Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner4
        },
        {
            name: 'Wi-Fi Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner1
        },
        {
            name: 'IP Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner2
        },
        {
            name: 'Land Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner3
        },
        {
            name: 'Lehsun Camera',
            description: 'very fast and sclable',
            link: '/new',
            image: banner4
        },
    ]
    const image = [
        banner1,
        banner2,
        banner3,
        banner4,
        // banner5
    ]

    return (
        <div className='w-[95%] sm:w-[90%] p-3 lg:w-[90%] flex items-center justify-center  '>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='w-full'>
                    {/* <img src={banner} alt="" /> */}
                    <div className={`h-[400px] w-full  rounded-xl`} >
                        <Crousal images={image} />
                    </div>
                    <hr className='my-4 border-black' />
                    <div className='w-full' >
                        <div className='py-2 px-3 w-full'>
                            <h1 className='text-gray-700 text-5xl '>Camera Categories</h1>
                        </div>
                        <div className="text-gray-600 ">
                            <div className="py-8">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2   place-items-center   ">
                                    {
                                        category?.map((item) => {
                                            return <div onClick={() => navigate(item?.link)} className="p-2 py-4 group border border-gray-300 hover:shadow-xl  shadow-md rounded-lg cursor-pointer w-full">
                                                <div className="h-full flex  gap-4  items-center sm:justify-start justify-center text-center sm:text-left">
                                                    <img alt="team" className="flex-shrink-0 group-hover:scale-110 transition-all duration-300 rounded-full w-24 h-24 object-cover object-center sm:mb-0 mb-4" src={item?.image} />
                                                    <div className="">
                                                        <h2 className="text-md font-semibold text-gray-700">{item?.name}</h2>
                                                        <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laboriosam excepturi beatae unde culpa ullam saepe nulla consequuntur corporis reprehenderit? Illum .</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-3 border-black' />
                    <div className='w-full  p-4'>
                        <h1 className='text-5xl  text-gray-600 font-semibold font-serif'>Latest Arivals</h1>
                    </div>
                    <div className='flex overflow-x-auto hide-scroll px-3 w-full'>
                    <div className='grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 py-4 '>
                            {products?.map((item) => {
                                return (
                                    <div className=" p-3 py-5 rounded-lg hover:shadow-xl group  shadow-md border w-full shrink-0">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover group-hover:scale-[1.2] transition-all duration-200 object-center w-full h-full block" src={item?.image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs w-fit bg-gray-100 rounded-md p-1 tracking-widest title-font mb-1">{item?.name}</h3>
                                            <h2 className="text-gray-800 py-2 title-font text-base font-semibold ">{item?.description}</h2>
                                            <div className='flex items-center justify-between'>
                                                <p className="mt-1 text-xs  text-gray-700 font-semibold">$16.00 </p>

                                                <button onClick={() => navigate(`/productDetail/${item?._id}`)} className='text-sm rounded-lg p-1 px-3 bg-red-200 text-white '>View details</button>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <hr className='my-3 border-black' />
                    <div className='flex overflow-x-auto hide-scroll px-3 w-full'>
                    <div className='grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 py-4 '>
                            {products?.map((item) => {
                                return (
                                    <div className=" p-3 py-5 rounded-lg hover:shadow-xl group  shadow-md border w-full shrink-0">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item?.image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs w-fit bg-gray-100 rounded-md p-1 tracking-widest title-font mb-1">{item?.name}</h3>
                                            <h2 className="text-gray-800 py-2 title-font text-base font-semibold ">{item?.description}</h2>
                                            <div className='flex items-center justify-between'>
                                                <p className="mt-1 text-xs  text-gray-700 font-semibold">$16.00 </p>

                                                <button onClick={() => navigate(`/productDetail/${item?._id}`)} className='text-sm rounded-lg p-1 px-3 bg-red-200 text-white '>View details</button>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Home