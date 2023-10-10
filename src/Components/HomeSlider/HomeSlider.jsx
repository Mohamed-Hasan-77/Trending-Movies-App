import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


//  


export default function HomeSlider({movieData}) {



    let baseUrl = "https://image.tmdb.org/t/p/w500";

    const settings = {
        customPaging: function(i) {
            return (
            <a>
                <img src={`${baseUrl}${movieData[i].poster_path}`} alt='movie Poster' />
            </a>
            );
        },
        className: "center",
        centerMode: true,

        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,

    };


        return (
            <div className=''>
            <Slider {...settings}>

                {movieData.map((movie, idx) => {
                    return <>
                    <div key={idx} className=" text-center relative  ">
                        <img src={baseUrl+movie.backdrop_path} className='w-full h-screen  object-cover' alt="movies background "/>

                        <div className=" top-0 left-0 absolute w-full h-full bg-overlayWhite dark:bg-overlayDark py-14  z-10 backdrop-blur-md   flex justify-center items-center shadow:md ">    
                        
                                <div className="wrapper flex justify-center items-center md:items-start flex-col md:flex-row space-x-5 h-3/4 px-2 md:px-4 lg:px-9 mt-10   ">

                                    <div className=" imgBox md:w-1/2  lg:w-1/4 h-3/4 lg:h-full border-4 border-gray-400 shadow-md  ">
                                        <img className='w-full h-full' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="movie poster" /> 
                                    </div>  
                                    
                                    <div className="description text-white flex items-start flex-col w-3/4 md:w-1/2 h-full">
                                        <h2 className='font-bold text-3xl lg:text-4xl mt-4 md:mt-0 '> {movie.title} </h2>
                                        <h3 className=' text-sm md:text-2xl mt-4'> {movie.release_date} </h3>
                                        <p className='text-xs md:text-sm mt-3'> movie Genre Action/Comedy </p>
                                        <h3 className='text-base md:text-1xl lg:text-1xl mt-3' > <span className='text-yellow-300 font-bold ' > <i className="fa-solid fa-star "></i> </span> {movie.vote_average} <span className='text-sm text-gray-300 '> /5 </span> <i className="fa-brands fa-imdb text-yellow-300 ml-2 text-2xl"></i> </h3>
                                        <p className=' hidden md:block text-start text-sm lg:text-1xl md:leading-9 mt-3 '> {movie.overview}</p>
                                        <p className=' block md:hidden  text-start text-sm lg:text-1xl lg:leading-9 mt-3'> {movie.overview.split(" ").slice(0, 10).join(" ")}... </p>

                                        <div className="space-x-5 mt-3 md:mt-9 flex justify-around items-center w-full">
                                            <button className='text-xs md:text-base bg-themeColor_purple text-white w-1/2 px-5 py-2 outline-none hover:bg-gray-600 transition-colors duration-150  rounded-full'> watch Trailer  </button>
                                            <button className=' text-xs md:text-base bg-themeColor_red text-white w-1/2 px-5 py-2 outline-none hover:bg-gray-600 transition-colors duration-150  rounded-full '> <Link to={`/moviePage/${movie.id}`}> More Details </Link></button> 
                                        </div>
                                    </div>

                                </div>

                        </div>
                    </div>
                
                    </> })}


                    
            </Slider>
            </div>
        );
        }

