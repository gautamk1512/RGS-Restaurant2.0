import React from 'react'
import bg1 from '../assets/img/ho.jpg'
import Button from '../layouts/Button'

const Carousel = () => {
    return (


        <div id="default-carousel" class="relative w-full pt-9" data-carousel="slide">
            <div class="relative h-3/5 overflow-hidden rounded-lg md:h-96" style={{ top: "50px", height: "550px" }}>
                <div class="duration-700 ease-in-out" data-carousel-item>
                    <img src={bg1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    <div className='absolute top-5 left-5' style={{width:"838px"}}>
                        <h1 className=" text-white font-semibold text-5xl my-8 relative left-3">
                            Life is uncertain. Eat dessert first.
                        </h1>
                        <p className="  text-white text-1xl relative left-3">
                            Welcome to RGS, where culinary excellence meets unforgettable hospitality. Step into our world of flavors and indulge in a dining experience like no other. Discover our seasonal menu featuring inspired creations from our passionate chefs, paired with a carefully curated selection of wines and beverages. Join us and embark on a journey of taste and discovery. Life is uncertain – so why not start with dessert? Indulge your cravings and make each moment extraordinary at RGS.
                        </p>

                        <div className=" lg:pl-44 text-white mx-24 my-8">
                            <Button title="Order Now" onClick={()=>{}}/>
                        </div>
                    </div>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={bg1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}

export default Carousel