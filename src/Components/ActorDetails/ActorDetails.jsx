import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import LoadingScreen from '../MaterialUICom/LoadingScreen/LoadingScreen';
import LoadingScreenTwo from '../LoadingScreenTwo/LoadingScreenTwo';

export default function ActorDetails() {


    const [actor, setActor] = useState(null)
    const [actorWork, setActorWork] = useState(null)


    

    const {id} = useParams();
    // https://api.themoviedb.org/3/person/3245?language=en-US
    // https://api.themoviedb.org/3/movie/${id}?language=en-US
    // https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US  

    async function actorData() {
    
        try{
        let {data} = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`,
        {params: {
            api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
        }},  )
        // console.log(data);
        setActor(data)


        }catch(err) {
        // console.error('Error:', err);
        }
    }



    async function actorWorks() {
    
        try{
        let {data} = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
        {params: {
            api_key: 'cffed22b0a485ebb8a8ade2cd4bcd5f1',
        }},  )
        // console.log(data);
        setActorWork(data.cast)


        }catch(err) {
        // console.error('Error:', err);
        }
    }




    useEffect(function() {
        actorData()
        actorWorks()

    } ,[])

    return <>
        <div className="  bg-gray-100 dark:bg-black py-32 ">

                {actor ? <> 

                    <div className=" container mx-auto p-10  md:space-x-5 dark:text-white rounded-lg flex justify-center  md:justify-between items-start  shadow-lg flex-col md:flex-row bg-white dark:bg-darkTheme">

                        <div className="poster w-full text-center mb-5 md:w-2/5  md:-translate-y-0 px-3">
                            <div className="img w-full flex justify-center">
                                <img src={"https://image.tmdb.org/t/p/w500"+actor.profile_path} className='rounded md:w-full border-gray-200 border-4' alt="actor Poster" />
                            </div>

                            <div className="vote  text-center md:text-left space-y-2 text-xs mt-3 md:mt-1">

                            <div className="actorTitle block md:hidden">
                                <h2 className='text-2xl font-bold'> {actor.name} </h2>
                                <p className=' text-sm text-gray-400'>{actor.known_for_department}  </p>
                            </div>
                                {/* <h3> <span className=' text-themeColor '> {actor.vote_average} / </span> <span className='text-sm'> {actor.vote_count} Voted </span></h3> */}
                                <hr className="bar h-1 bg-darkTheme dark:bg-white w-full"></hr>

                            </div>
                        </div>


                        <div className=" w-full md:w-4/6   md:space-y-3 ">

                            <div className="actorTitle hidden md:block">
                                <h2 className=' text-2xl font-bold'> {actor.name} </h2>
                                <p className=' text-sm text-gray-400'> {actor.known_for_department}  </p>
                            </div>
                            <div className="rating flex items-center  space-x-5 my-4">
                                <div className="trailer px-2 py-1 border border-black hover:bg-darkTheme hover:text-white cursor-pointer transition-all duration-300"> <a target='_blank' href={actor.homepage}> <i class="fa-solid fa-video"></i>  More Info  </a>  </div>
                                {/* <p className='font-bold' > IMDB : <span className=' text-themeColor'> {Math.round(actor.vote_average)} <i class="fa-solid fa-star"></i></span> </p> */}
                            </div>


                            <div className="moreInfo  md:flex  justify-between space-y-3 ">
                                    <p><span className='font-bold '> birthday </span> : {actor.birthday}</p>
                                    <p> <span className='font-bold'> place of birth </span>  : {actor.place_of_birth}</p>
                            </div>

                            <p className='desc text-gray-400  '>
                                <span className='font-bold text-black dark:text-white'>Biography : </span> {actor.biography?.split(" ").slice(0, 150).join(" ")}... 
                            </p>

                        </div>
                        
                        
                    </div>

                </> : <LoadingScreenTwo/> }



                <div className="container mx-auto mb-40 mt-24 dark:text-white ">
            <h2 className='text-3xl '> His/Her Work : </h2> 


            <div className="Recommendation  flex flex-wrap mt-10 ">

                {actorWork ? <>
                
                    {actorWork.map((work, idx) => {
                        return <>
                        {work.poster_path ? <>
                            <div key={idx} className=" w-1/2 md:w-1/5 lg:w-44 p-2  ">
                            <div className=' hover:translate-y-3 shadow-md  transition-all duration-500 ease-in-out cursor-pointer relative'>
                                    <Link  to={`/moviePage/${work.id}`}>
                                <div className="img realtive ">
                                        {/* <img className='rounded' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="Movie Poster" /> */}
                                        {work.poster_path ? <>
                                                <img src={"https://image.tmdb.org/t/p/w500"+work.poster_path} className='' alt="Movie Poster" />

                                            </> : <>
                                            
                                            <img src={require('../../images/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.avif')} className='rounded  border-gray-200 border-4' alt="Movie Poster" />
                                            
                                            </>}
                                        <div className="imghover rounded absolute top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                                            <i class="fa-solid fa-play text-themeColor_purple text-3xl "></i>  
                                        </div>
                                </div>
                                    </Link>

                                <span className=' text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0'> {Math.round(work.vote_average)} <i class="fa-solid fa-star ml-1 text-yellow-400"></i> </span>

                                <div className='movie-desc bg-white dark:bg-darkTheme px-2  py-3 text-xs  dark:text-white rounded-b  '> 
                                    {work.title ? <>
                                        <h4 className='font-bold'> {work.title.split(" ").length > 3 ? work.title.split(" ").slice(0, 3).join(" ") + "..." :  work.title}   </h4>
                                        </> : <>
                                        <h4 className='font-bold'> {work.name.split(" ").length > 3 ? work.name.split(" ").slice(0, 3).join(" ") + "..." :  work.name}   </h4>
                                        </>}
                                    <div className="dec mt-1 flex justify-between items-center">
                                        {work.release_date ? <>
                                            <span> {work.release_date?.split("-").slice(0,1).join("")} </span>
                                        
                                        </> : <>
                                            <span> {work.first_air_date?.split("-").slice(0,1).join("")} </span>
np
                                        </> }
                                            <span> | {work.original_language?.toUpperCase()}</span>
                                        <span className=' bg-themeColor_red px-1 py-1 text-white rounded'> {work.media_type}</span>
                                    </div>              
                                </div>

                            </div>
                        </div>
                        
                        
                        
                        </> : <></>}
                        
                        </> })}



                </> : <LoadingScreen/>}


            </div>
        </div>




        </div>
                    




    
    </>

}
