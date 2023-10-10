import React from 'react'

export default function Register() {
    return <>
    <div class="py-20 container pt-32 ">
        <div class="flex bg-white rounded-lg shadow-xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl  dark:bg-gray-900 dark:text-white">
            <div class="hidden lg:block lg:w-1/2 bg-cover"  > 
                <img className='w-full h-full object-cover' src={require('../../images/wallpaperflare.com_wallpaper (1).jpg')}  alt="" />
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <p class="text-xl text-gray-600 text-center font-bold dark:text-gray-100">Welcome !</p>
                <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-lg  hover:bg-gray-100 ">
                    <div class="px-4 py-3 ">
                        <svg class="h-6 w-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                        </svg>
                    </div>
                    <h1 class="px-4 py-3 w-5/6 text-center text-gray-500 font-bold  ">Sign up with Google</h1>
                </a>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                    <p  class="text-xs text-center text-gray-500 uppercase">or sign up with email</p>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">your Name </label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"/>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">  Email Address </label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2"> Phone Number </label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number"/>
                </div>
                <div class="mt-4">
                        <label class="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">Password</label>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
                </div>
                <div class="mt-4">
                        <label class="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2">Repeat Password</label>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
                </div>
                <div class="mt-8">
                    <button class="bg-gray-700 text-white dark:text-gray-100 font-bold py-2 px-4 w-full rounded hover:bg-gray-600"> Sign Up </button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <a href="#" class="text-xs text-gray-500 uppercase">or sign in </a>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>



    </>

}