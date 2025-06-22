import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Category = () => {
    const { isOpen, setIsOpen, onAdd } = useContext(AppContext);
    const [category, setCategory] = useState([]);
    const [categoryArray, setCategoryArray] = useState([]);
    const [activeC, setActiveC] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch categories and skip the zeroth index
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(data => {
                if (data.meals && data.meals.length > 1) {
                    const remainingCategories = data.meals.slice(1); // Skip the zeroth index
                    setCategory(remainingCategories);
                    setActiveC(remainingCategories[0].strCategory); // Set the first category from remaining ones
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    // Fetch meals for the active category
    useEffect(() => {
        if (activeC) {
            setLoading(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeC}`)
                .then(res => res.json())
                .then(data => {
                    setCategoryArray(data.meals);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching meals:', error);
                    setLoading(false);
                });
        }
    }, [activeC]);

    return (
        <main className='py-10 px-4 md:px-10 rounded-md'>
            {isOpen && (
                <div className='flex items-center justify-between text-xl'>
                    <h1 className='text-xl md:text-3xl text-[#6C4B3F]'>Our Regular <br className='flex md:hidden' /> Menu Pack</h1>
                    <Link to='/menu'>
                        <div onClick={() => setIsOpen(false)} className='gap-x-3'>
                            <button className='flex mx-auto mt-6 px-3 md:px-6 py-3 bg-[#f27957] rounded-[10px]'>See Menu</button>
                        </div>
                    </Link>
                </div>
            )}

            <div className='mt-4 overflow-x-scroll'>
                <div className='whitespace-nowrap flex items-center gap-x-4'>
                    {category.map((item, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setActiveC(item.strCategory)}
                            className={`${activeC === item.strCategory ? 'bg-[#f27957] border-none outline-none' : ''} px-6 border border-[#f27957] py-3 rounded-[13px] hover:bg-[#f27957]`}
                        >
                            {item.strCategory}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className='text-center text-3xl text-[#6C4B3F]'>
                    Loading...
                </div>
            ) : (
                <div className='flex flex-col md:flex-row md:flex-wrap gap-x-2'>
                    {categoryArray.slice(0, 12).map((item) => (
                        <Link key={item.idMeal} to={`/mealdetails/${item.idMeal}`}>
                            <div className='mt-4 px-4 md:px-6 py-3 rounded-[14px] bg-white w-full md:w-[300px]'>
                                <img src={item.strMealThumb} alt='' className='rounded-[13px] w-full' />
                                <h1 className={`${item.strMeal.length > 10 ? 'truncate' : ''} mt-8 text-4xl text-[#6C4B3F] text-center`}>
                                    {item.strMeal}
                                </h1>
                                <p className='mt-6 text-center mb-4 text-[#6C4B3F]'>
                                    This is a meal that has the <br /> best ingredients.
                                </p>
                                <div className='flex py-4 items-center justify-between'>
                                    <h1>$20</h1>
                                    <button onClick={() => onAdd(item)} className='px-2 py-2 bg-[#f27957] rounded-[10px]'>Add to Cart</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Category;
