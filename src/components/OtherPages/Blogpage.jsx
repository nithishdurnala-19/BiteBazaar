import React from 'react'
import bg from '../../assets/bg.jpg'
import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { blogs } from '../data';
import { Link } from 'react-router-dom';
const Blogpage = () => {
    const [categoryArray, setCategoryArray] = useState([])
    const [activeC, setActiveC] = useState('Dessert')
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeC}`)
            .then(res => res.json())
            .then(data => setCategoryArray(data.meals))
    }, [activeC])
    return (
        <main className='px-4'>
            <div className='md:px-10 mt-3 relative'>
                <img src={bg} alt='' className='h-[500px] w-full object-cover ' />
                <div className='absolute h-[500px] w-full md:w-auto top-0 md:left-10 md:right-10 bg-gray-900/40  px-6 ' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col text-white  justify-center z-10 items-center text-center'>
                    <h1 className='text-[43px] text-5xl mt-10'>News And Articles</h1>
                    <p className='md:max-w-lg max-w-[314px]  text-center mt-4'>
                        Discover the essence of refined elegance with our meticulously crafted offerings. Our approach combines traditional techniques with modern sensibilities, creating a harmonious blend of flavors and textures. Experience our commitment to quality with every dish, whether it's a classic favorite or an innovative new creation. Enjoy a dining experience that celebrates the art of fine cuisine, where every bite is a journey of taste and sophistication.
                    </p>
                    <div className='flex px-4 mt-10 max-w-lg rounded-md border border-[#f27957] py-2'>
                        <input type='text' className='w-full outline-none bg-transparent placeholder:px-4' placeholder='search blog' />
                        <AiOutlineSearch size={26} className='text-[#f27957]' />
                    </div>
                </div>

            </div>
            <div >
                <div className='grid px-4 md:grid-cols-4 md:gap-x-4'>
                    {
                        blogs.slice(0, 12).map((item) => (

                            <div key={item.id} className='mt-4 w-full px-3 py-3 rounded-[14px] bg-white md:w-[300px]'>
                                <img src={item.imgs
                                } alt='' className='rounded-[13px] w-full' />

                                <h1 className='text-[#6C4B3F] text-center mt-4 text-2xl'>
                                    {item.name}
                                </h1>
                                <p className={` mt-8 text-[#6C4B3F] text-center`}>
                                    {item.instruction.slice(0, 100)}...
                                </p>
                                <p className=' mt-6 text-center mb-4 text-[#6C4B3F]'>
                                    {/* This is a meal that has the <br /> best ingredients. */}
                                    {/* {item.strInstructions} */}
                                </p>
                                <Link to={`/blog/${item.id}`}>
                                    <div className='flex py-4 items-center justify-center'>

                                        <button className='px-2 py-2 bg-[#f27957] rounded-[10px]'>Read More</button>
                                    </div>
                                </Link>
                            </div>

                        ))
                    }

                </div>
            </div>
        </main>
    )
}

export default Blogpage