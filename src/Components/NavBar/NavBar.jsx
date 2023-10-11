import React, { useRef, useState } from 'react'
import DarkMod from '../DarkModBtn/DarkMod'
import navCss from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NavBar() {


    


    const [search, setSearch] = useState(null)

    let searchRefInput = useRef(null)
    let nav = useNavigate()



    // const navigate = useNavigate();

    // function logOutUser() {
    //     clearUserData();
    //     navigate('./login');
    // }

    // async function searchAll() {

    //     // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
    //     // https://api.themoviedb.org/3/search/collection
    
    //     try{
    //         let {data} = await axios.get('https://api.themoviedb.org/3/search/movie',
    //         {params: {
    //         api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
    //         query: searchRef.current.value,
    //         include_adult: false,
    //         language: "en-US",
    //         page: 1,
    //         }},  
    //     )
    //     setSearch(data.results)
    //     console.log(data.results);

    //     }catch(err) {
    //         console.error('Error:', err);
    //         }
    //     }



        // function close() {
        //     document.querySelector('.searchBox').style.display = 'none' 
        // }


        // function searchBlurHandle() {
        //     searchRef.current.value = "";

        // }


        // function searchFoucsHandle() {
        //     document.querySelector('.searchBox').style.display = 'block' 
        //     document.querySelector('.searchBox').style.maxHeight = 'auto' 
        // }


    


    // window.addEventListener('scroll', () => {
    //     let navBar = document.querySelector('nav');
    //     navBar.classList.toggle('fixed', window.scrollY > 900)
    // })





    async function searching() {

        // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
        // https://api.themoviedb.org/3/search/collection
    
        try{
            let {data} = await axios.get('https://api.themoviedb.org/3/search/movie',
            {params: {
            api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
            query: searchRefInput.current.value,
            include_adult: false,
            language: "en-US",
            page: 1,
            }},  
        )
        setSearch(data.results)
        // console.log(data.results);
        // console.log(searchRefInput.current.value);

        }catch(err) {
            // console.error('Error:', err);
            }
        }


        function goToSearchResults() {
            sessionStorage.setItem("searchData" , JSON.stringify(search));
            if(search) {
                nav('/search');
            }
        }




    return <>



<nav className=" border-gray-200 bg-white dark:bg-transparent  transition-all duration-300  backdrop-blur-md w-screen fixed top-0 z-40 text-black dark:text-white shadow-md  ">
    <div className=" container  flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-2 md:text-xs lg:text-base">
    <Link to={'/home'} className="flex items-center">
        <img src={require('../../images/film-reel_3172555.png')} className="h-8 mr-3 " alt="movies Logo" />
        <span className="self-center text-2xl font-bold transition-colors duration-300 hover:text-themeColor_purple whitespace-nowrap  "> Trending </span>
    </Link>
    <div className="flex md:order-2 flex space-x-3">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>


    <ul className=" hidden md:flex flex-col items-center p-4 md:p-0 mt-4 font-bold border border-gray-200 shadow md:shadow-none rounded-lg   md:flex-row  md:space-x-8 md:mt-0 md:border-0 ">
        {/* <li>
            <Link to={'/login'} className="block py-2 pl-3 pr-4  bg-purple-700 rounded md:bg-transparent  md:p-0  hover:text-themeColor_purple" aria-current="page"> Login </Link>
        </li>
        <li>
            <Link to={'/register'} className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themeColor_purple md:p-0 md:dark:hover:text-themeColor_purple  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Register </Link>
        </li> */}

                    <li className='block my-3  py-2 pl-3 pr-4  rounded e md:p-0 ' >
                        <DarkMod/> 
                    </li>
    </ul>

    <div className="relative hidden md:block ">

        <div className="searchIcon  relative ">
            {/* <div className={`${navCss.inputmdx_wrapper}`} >
                <button onClick={() => {goToSearchResults()}}  className={`${navCss.iconmdx}`}> 
                <i className="fa-solid fa-magnifying-glass font-bold "></i>
                </button>
            
                <input  onChange={() => {searching()}} ref={searchRefInput} placeholder="search.." className={`${navCss.inputmdx} peer dark:text-white `} name="text"/>
                {search ? <>
                        <div className={` ${navCss.searchBox}   z-50 max-h-60 w-full transition-all duration-500 delay-500 absolute top-full right-0  overflow-x-visible bg-white dark:bg-darkTheme text-xs    overflow-y-scroll p-2 `}>
                        <div className="close ml-auto w-5 h-5 bg-red-500 text-center py-1 cursor-pointer"> <i className="fa-solid fa-xmark text-white"></i> </div>
                        {search.map((item, idx ) => {
                            return   <Link to={`/moviePage/${item.id} `}>
                            <div key={idx} className="searchItem flex border-b border-black dark:border-white py-2 items-center w-full">
                                <div className="poster w-1/4 ">
                                    <img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} className='w-full rounded-md' alt="Movie Poster" />
                                </div>
                                <div className="info ml-3 w-3/4">
                                    <h3 className='font-bold'> {item.title} </h3>
                                    <p className='text-gray-500'>{item.overview.split(" ").slice(0, 4).join(" ")}...</p>
                                    <div className='text-xs flex justify-between text-gray-500'>  
                                        <p> {item.release_date.split("-").slice(0, 1).join("")} </p>
                                        <p> {item.original_language.toUpperCase()}</p>
                                        <p > {Math.round(item.vote_average)} <i className="fa-solid fa-star text-themeColor"></i> </p>
                                    </div>
                                    
                                </div>
                            </div>
                                    </Link>

                })}
                

            </div>
        </> : <></>}


            </div> */}


            {/* <input type="search" className="peer cursor-pointer relative z-10 h-10 w-10 rounded border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4 transition-all duration-300" />
        
                <button onClick={() => {goToSearchResults()}}  > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-10 bg-themeColor_red w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                </button> */}

        </div>

    </div>


<label htmlFor="navtoggle">
{/* aria-controls="navbar-search" aria-expanded="false"  data-collapse-toggle="navbar-search" */}
    <button  type="button" className="toggleButton inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
                
</label>
    </div>
    <input className={` ${navCss.checkMenu} absolute z-50 right-0 top-0 w-40 opacity-0 md:hidden h-10 bg-white`} type="checkbox" id="navtoggle"/>

    <div className={`${navCss.NavMenu} items-center justify-between hidden w-full md:flex md:w-auto md:order-1`} id="navbar-search">
        <div className="relative mt-3 md:hidden">

                        <button className='absolute inset-y-0 right-0 flex items-center rounded-md z-40 bg-themeColor_purple px-7' onClick={() => {goToSearchResults()}} > 
                            <i className="fa-solid fa-magnifying-glass font-bold "></i>
                        </button>

        <input onChange={() => {searching()}} ref={searchRefInput} type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        </div>
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-bold border border-gray-200 shadow md:shadow-none rounded-lg text-sm md:text-xm lg:text-sm md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <Link to={'/movies'} className="block py-2 pl-3 pr-4 ml:0 md:ml-10 lg:ml-0  dark:text-white  rounded md:bg-transparent  md:p-0 dark:hover:text-themeColor_purple hover:text-themeColor_purple" aria-current="page"> Movies </Link>
                    </li>
                    <li>
                        <Link to={'/tvshows'} className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themeColor_purple md:p-0 md:dark:hover:text-themeColor_purple dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> TV-Shows </Link>
                    </li>
                    <li>
                        <Link to={'/actors'} className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themeColor_purple md:p-0 dark:text-white md:dark:hover:text-themeColor_purple dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Actors</Link>
                    </li>
                    
                    {/* <li className='block md:hidden my-3'>
                        <Link  to={'/login'} className=" font-1xl py-2 pl-3 pr-4 dark:text-white  rounded md:bg-transparent  md:p-0 dark:hover:text-themeColor_purple hover:text-themeColor_purple" > Login </Link>
                    </li>
                    <li className='block md:hidden my-3 '>
                        <Link to={'/register'} className=" py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themeColor_purple md:p-0 md:dark:hover:text-themeColor_purple dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Register </Link>
                    </li> */}                   
                    <li className='block md:hidden my-3  py-2 pl-3 pr-4  rounded e md:p-0 ' >
                        <DarkMod/> 
                    </li>
            </ul>
        </div>
    </div>
</nav>





    </>

}
