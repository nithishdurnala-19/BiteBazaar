import React from 'react'
import Navbar from '../Navbar';
import about3 from '../../assets/about3.jpg'
import about5 from '../../assets/about5.jpg'
import Services from '../Services';

const AboutPage = () => {
    return (
        <main className=' mt-28 px-4 md:px-16'>
            <div>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>About Us</h1>
                <p className='text-center text-[#6C4B3F] mt-5'>
                    We are more than multiple services. Food is one of the basic necessities of life. We are more than multiple services which serve the best foods and drinks. We provide the best and healthiest foods with great taste.
                </p>
                <h1 className='text-center text-4xl mt-10 text-[#6C4B3F]'>Our Story</h1>
            </div>
            <div className='mt-6  relative '>
                <img src={about3} alt='' className='h-[500px] w-full object-cover rounded-[14px]' />

                <div className='bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f27957] '>
                    <p className='text-center px-10 py-8'>
                        Discover a culinary experience that combines tradition and innovation. At Justo, we offer a menu that blends classic flavors with contemporary techniques. Our dishes feature fresh, locally-sourced ingredients and are crafted with precision to ensure a delightful dining experience. From savory appetizers to delectable mains, each dish is thoughtfully prepared to bring out the best in every ingredient. Whether you're here for a casual meal or a special occasion, our commitment to quality and flavor is evident in every bite. Enjoy a memorable meal with us where every dish tells a story of taste and craftsmanship.
                    </p>
                </div>
            </div>
            <div className='mt-40'>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>Our Mission</h1>
            </div>
            <div className='mt-6  relative '>
                <img src={about5} alt='' className='rounded-[14px] h-[500px] w-full object-cover' />

                <div className='bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f27957] '>
                    <p className='text-center px-10 py-8'>
                        A culinary journey where tradition meets innovation. Our dishes are crafted with a blend of classic and contemporary techniques, using the finest ingredients. Experience the perfect harmony of flavors, from savory starters to exquisite main courses. We take pride in creating memorable meals that delight the senses and celebrate the art of fine dining.
                    </p>
                </div>
            </div>
            <div className='mt-40'>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>Why Choose Us</h1>
            </div>
            <Services />

        </main>
    )
}

export default AboutPage