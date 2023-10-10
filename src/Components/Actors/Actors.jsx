import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../MaterialUICom/LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';

export default function Actors() {

    const [actors, setActors] = useState(null);
    const [actors2, setActors2] = useState(null);
    let [pageNum, setPageNum] = useState(1);








async function getActors() {

    try{
        let {data} = await axios.get('https://api.themoviedb.org/3/person/popular?language=en-US',
        {params: {
            api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
            page: pageNum,

        }})
        setActors(data.results)
        // console.log('data.results: ', data.results);

    }catch(err) {
        // console.error('Error:', err);
    }
    }



    async function getActorsTwo() {

        try{
            let {data} = await axios.get('https://api.themoviedb.org/3/person/popular?language=en-US',
            {params: {
                api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
                page: pageNum + 1,
    
            }})
            setActors2(data.results)
            // console.log('data.results: ', data.results);
    
        }catch(err) {
            // console.error('Error:', err);
        }
    }

    function pagination() {
    pageNum = pageNum + 1
    setPageNum(pageNum)
    getActors()
    getActorsTwo()
    }

    function paginationPlusTwo() {
    pageNum = pageNum + 2
    setPageNum(pageNum)
    getActors()
    getActorsTwo()
    }


    function paginationDwon() {
    if (pageNum > 1) {
    pageNum = pageNum - 1
        
        setPageNum(pageNum )
        getActors()
        getActorsTwo()
    }

    }




    useEffect(() => {

    getActors()
    getActorsTwo()

    }, [])


    return <>
        <div className="container mx-auto py-24">



            <h2 class="flex flex-row flex-nowrap items-center mt-8">
                <span class="flex-grow block border-t border-black dark:border-white" aria-hidden="true" role="presentation"></span>
                <span class="flex-none block mx-4 font-bold  px-4 py-2.5  leading-none uppercase bg-black dark:bg-white text-white dark:text-black">
                    Actors
                </span>
                <span class="flex-grow block border-t border-black dark:border-white" aria-hidden="true" role="presentation"></span>
            </h2>  

            <ul class="flex space-x-2 my-7 justify-center">
                <li>
                    <button onClick={() => {paginationDwon()}}  class="flex items-center justify-center mr-1 w-9 h-9  text-white  transition-colors duration-150 rounded-full focus:shadow-outline dark:text-black bg-indigo-300 hover:bg-themeColor_purple">
                    <i class="fa-solid fa-arrow-left w-4 h-4 fill-current "></i>
                </button>
                </li>
                <li>   
                        <button  class="w-9 h-9 text-white transition-colors duration-150 bg-themeColor_purple border border-r-0 border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum   }
                        </button>
                    </li>
                <li>   
                        <button onClick={() => {pagination()}}  class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple  hover:border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum + 1 }
                        </button>
                    </li>
                    <li>   
                        <button onClick={() => {paginationPlusTwo()}}   class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple   hover:border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum + 2 }
                        </button>
                    </li>
                <li>
                    <button onClick={() => {pagination()}}  class="flex items-center justify-center ml-1 w-9 h-9  transition-colors duration-150 bg-darkTheme text-white dark:text-black  rounded-full focus:shadow-outline bg-indigo-300 hover:bg-themeColor_purple ">
                        <i class="fa-solid fa-arrow-right w-4 h-4 fill-current "></i>
                    </button>
                </li>
            </ul>


        

    {/* -------------------------------------------------------------------------------------------------------------------------- */}
    {/* -------------------------------------------------------------------------------------------------------------------------- */}
    <div className="wrapper flex flex-wrap justify-start ">

    {actors ? <>




    {actors.map((actor, idx) => {
    return <div key={idx} className="w-1/2 md:w-1/5 lg:w-1/6 px-2 p-1 my-3  ">
    <div className=' hover:translate-y-2 transition-all duration-300 shadow-md  rounded '>

        <div className="img relative rounded-t overflow-hidden  cursor-pointer">
        <Link to={`/actorDetails/${actor.id}`}> 
                <img className='  ' src={"https://image.tmdb.org/t/p/w500"+actor.profile_path} alt="" />
                <div className=" absolute backdrop-saturate-0 top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                </div>
        </Link>
        </div>

                <div className='movie-desc bg-white dark:bg-overlayDark  px-2 py-3  text-xs  dark:text-white rounded-b  '> 
                    <h4 className=' text-sm'> 
                    <p className='font-bold w-full'> {actor.name.split(" ").slice(0, 2).join(" ")} </p>  
                    <p className='text-gray-500' > {actor.known_for_department} </p>

                    <div className="my-1 line w-full bg-gradient-to-r from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>      
                    </h4>
                    <div className="dec  flex items-center flex-wrap ">
                    {/* <div className="  mt-3 line w-full bg-gradient-to-r from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>   */}
                    <span className='  px-1  w-full dark:text-white font-bold text-sm'> - Known for </span>
                    <div className='w-full'>
                        {actor.known_for.map((work, idx) => {
                            return <p key={idx} className="work w-full my-1 ">
                                {/* - {work.title.split(" ").length > 3 ? work.title.split(" ").slice(0, 3).join(" ") + "..." :  work.title} */}
                                - {work.title ? work.title : work.name} 
                            </p>
                            })
                            }

                    </div>

                    </div>              
                </div>
            </div>
            </div>
        })}





    </> : <LoadingScreen/>}
        {actors2 ? <>
        {actors2.map((actor, idx) => {
            return <div key={idx} className="w-1/2 md:w-1/5 lg:w-1/6 px-2 p-1 my-3  ">
            <div className=' hover:translate-y-2 transition-all duration-300 shadow-md  rounded '>

                <div className="img relative rounded-t overflow-hidden  cursor-pointer">
                    <Link to={`/actorDetails/${actor.id}`}> 
                        <img className='  ' src={"https://image.tmdb.org/t/p/w500"+actor.profile_path} alt="" />
                        <div className=" absolute backdrop-saturate-0 top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                        </div>
                    </Link>
                </div>

                <div className='movie-desc bg-white dark:bg-overlayDark  px-2 py-3  text-xs  dark:text-white rounded-b  '> 
                    <h4 className=' text-sm'> 
                    <p className='font-bold w-full'> {actor.name.split(" ").slice(0, 2).join(" ")} </p>  
                    <p className='text-gray-500' > {actor.known_for_department} </p>

                    <div className="my-1 line w-full bg-gradient-to-r from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>      
                    </h4>
                    <div className="dec  flex items-center flex-wrap ">
                    {/* <div className="  mt-3 line w-full bg-gradient-to-r from-purple-600 via-purple-700 to-white dark:to-black rounded-md h-1"></div>   */}
                    <span className='  px-1  w-full dark:text-white font-bold text-sm'> - Known for </span>
                    <div className='w-full'>
                        {actor.known_for.slice(0, 2).map((work, idx) => {
                        return <p key={idx} className="work w-full my-1 ">
                            {/* {work.original_title.split(" ").length > 2 ? - work.title.split(" ").slice(0, 2).join(" ") + "..." : "-" + work.title} */}
                            {/* - {work.title.split(" ").length > 3 ? work.title.split(" ").slice(0, 3).join(" ") + "..." :  work.title} */}
                            - {work.title ? work.title : work.name} 
                        </p>
                        })}

                    </div>

                    </div>              
                </div>
            </div>
        </div>
        })}
        
        
        
        </> : <LoadingScreen/> }



    </div> 

    <ul class="flex space-x-2 my-7 justify-center">
                <li>
                    <button onClick={() => {paginationDwon()}}  class="flex items-center justify-center mr-1 w-9 h-9  text-white  transition-colors duration-150 rounded-full focus:shadow-outline dark:text-black bg-indigo-300 hover:bg-themeColor_purple">
                    <i class="fa-solid fa-arrow-left w-4 h-4 fill-current "></i>
                </button>
                </li>
                <li>   
                        <button  class="w-9 h-9 text-white transition-colors duration-150 bg-themeColor_purple border border-r-0 border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum   }
                        </button>
                    </li>
                <li>   
                        <button onClick={() => {pagination()}}  class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple  hover:border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum + 1 }
                        </button>
                    </li>
                    <li>   
                        <button onClick={() => {paginationPlusTwo()}}   class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple   hover:border-themeColor_purple  rounded-full focus:shadow-outline">
                            {pageNum + 2 }
                        </button>
                    </li>
                <li>
                    <button onClick={() => {pagination()}}  class="flex items-center justify-center ml-1 w-9 h-9  transition-colors duration-150 bg-darkTheme text-white dark:text-black  rounded-full focus:shadow-outline bg-indigo-300 hover:bg-themeColor_purple ">
                        <i class="fa-solid fa-arrow-right w-4 h-4 fill-current "></i>
                    </button>
                </li>
            </ul>


    <div class="flex-grow block border-t border-black dark:border-white mt-10" aria-hidden="true" role="presentation"></div>

        </div>


    </>

    }
