import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Search() {


  const [result, setResult] = useState(null);









  function getSearchResult() {
    setResult(JSON.parse(sessionStorage.getItem('searchData')))
    // console.log(JSON.parse(sessionStorage.getItem('searchData')));
  }










  useEffect(() => {

    getSearchResult()
  
  }, [])


  return <>
      <div className="container mx-auto py-24">



{/* <div className="my-4 line w-full bg-gradient-to-r mx-2 md:mx-0 from-purple-600 via-purple-700 to-white dark:to-black rounded-md h-1"></div>   */}



            <h2 class="flex flex-row flex-nowrap items-center my-8">
                <span class="flex-grow block border-t border-black dark:border-white" aria-hidden="true" role="presentation"></span>
                <span class="flex-none block mx-4 font-bold  px-4 py-2.5  leading-none uppercase bg-black dark:bg-white text-white dark:text-black">
                    Result
                </span>
                <span class="flex-grow block border-t border-black   dark:border-white" aria-hidden="true" role="presentation"></span>
            </h2>  

          


        

{/* -------------------------------------------------------------------------------------------------------------------------- */}
{/* -------------------------------------------------------------------------------------------------------------------------- */}
<div className="wrapper flex flex-wrap justify-start ">

{result? <>

{result.map((movie, idx) => {
return <>
{movie.poster_path ? <>
  <div key={idx} className=" w-1/2 md:w-1/5 lg:w-1/6 p-2  ">
          <div className=' hover:translate-y-3 shadow-md  transition-all duration-500 ease-in-out cursor-pointer relative'>
              <div className="img realtive ">
                  <Link to={`/moviePage/${movie.id}`}>
                  {movie.poster_path ? <>
                    <img className='rounded' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="Movie Poster" />

                                            </> : <>
                                            
                                            <img src={require('../../images/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.avif')} className='rounded  border-gray-200 border-4' alt="Movie Poster" />
                                            
                                            </>}
                  
                    <div className="imghover rounded absolute top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                        <i class="fa-solid fa-play text-themeColor_purple text-3xl "></i>  
                    </div>
                  </Link>
              </div>

                <span className=' text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0'> {Math.round(movie.vote_average)} <i class="fa-solid fa-star ml-1 text-yellow-400"></i> </span>

                <div className='movie-desc bg-white dark:bg-darkTheme px-2  py-3 text-xs  dark:text-white rounded-b  '> 
                  <h4 className='font-bold'> {movie.title.split(" ").length > 3 ? movie.title.split(" ").slice(0, 3).join(" ") + "..." :  movie.title}   </h4>
                  <div className="dec mt-1 flex justify-between items-center">
                      <span> {movie.release_date.split("-").slice(0,1).join("")} | {movie.original_language.toUpperCase()}</span>
                      <span className=' bg-themeColor_red px-1 py-1 text-white rounded'> {movie.media_type}</span>
                  </div>              
                </div>

            </div>
        </div>


</> : <>  </> }
  

        </> })}





</> : <>


                  <div className="h2 text-3xl font-bold text-center text-gray-400"> NO DATA FOUND </div> 


</>}
    

</div> 




<div class="flex-grow block border-t border-black dark:border-white mt-10" aria-hidden="true" role="presentation"></div>

      </div>
  
  
  </>

  
}
