import React from 'react'
import footerCss from './FooterCss.module.css'



export default function Footer() {
    return <>

        <footer  className={` ${footerCss.footerBack} dark:bg-gray-900 relative z-40 `}>
            <div class="container px-6 py-12 mx-auto px-20">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="sm:col-span-2">
                        <h1 class="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Subscribe  our newsletter to get update.</h1>

                        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
                    
                            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-themeColor_purple rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-white dark:text-white">Quick Link</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover  hover:underline hover:text-themeColor_hover">Home</a>
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover hover:underline hover:text-themeColor_hover">Who We Are</a>
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover hover:underline hover:text-themeColor_hover">Our Philosophy</a>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-white dark:text-white">Industries</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover hover:underline hover:text-themeColor_hover">Retail & E-Commerce</a>
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover hover:underline hover:text-themeColor_hover">Information Technology</a>
                            <a href="#" class="text-white transition-colors duration-300 dark:white dark:hover:text-themeColor_hover hover:underline hover:text-themeColor_hover">Finance & Insurance</a>
                        </div>
                    </div>
                </div>
                
                <hr class="my-6 border-gray-200 md:my-8 dark:border-white"/>
                
                <div class="flex items-center justify-between">
                    <a href="#" className='text-3xl text-white flex space-x-3 items-center font-bold'>
                        <img className='w-10' src={require('../../images/film-reel_3172555.png')} alt="site logo" />
                        <span className=' text-white  hover:text-themeColor_purple  transition-colors duration-300'> Trending  </span> 
                    </a>
                    
                    <div class="flex -mx-2">
                        <a href="#" class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>

                        <a href="#" class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-700" aria-label="Github">
                            <i class="fa-brands fa-github"></i>
                        </a>

                        <a href="#" class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500" aria-label="Facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
    </footer>

</>

}
