import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../MaterialUICom/LoadingScreen/LoadingScreen";
import LoadingScreenTwo from "../LoadingScreenTwo/LoadingScreenTwo";
import YouTube from "react-youtube";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [trailer, setTrailer] = useState(null);
  //   const [open, setOpen] = useState(false);

  //   let menuRef = useRef();

  const { id } = useParams();
  // https://api.themoviedb.org/3/movie/968051?language=en-US

  async function movieData() {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
          },
        }
      );
      setMovie(data);
      // console.log(data);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function movieTrailer() {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
          },
        }
      );
      // console.log(data);
      setTrailer(data.results[1]);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function getRecommendedMovies() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
            page: Math.floor(Math.random() * 100) + 1,
          },
        }
      );
      setRecommend(data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  function newMovieSearch() {
    movieData();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function trailerToggle() {
    if (trailer) {
      let trailerPop = document.querySelector(".trailerPopUp");
      trailerPop.classList.replace("hidden", "flex");
    } else {
      alert("No Trailer Available!");
    }
  }

  function trailerToggleClose() {
    let trailerPop = document.querySelector(".trailerPopUp");
    trailerPop.classList.replace("flex", "hidden");
    let iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  }

  useEffect(function () {
    movieData();
    getRecommendedMovies();
    movieTrailer();
  }, []);

  return (
    <>
      {movie ? (
        <>
          <div className="back w-screen h-[90vh] relative">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              className="w-full h-full object-cover absolute top-0 left-0 z-0  "
              alt="wallpaper"
            />

            {/* <YouTube
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              videoId={trailer.key}
              id={trailer.id}
              opts={opts}
              onStateChange={() => {
                close();
              }}
            /> */}
            <div className="overlay top-0 left-0 absolute w-full h-full bg-overlayWhite hover:bg-navbarDark dark:bg-overlayDark py-14  z-1 backdrop-blur-sm   flex justify-center items-center  ">
              <div className="play rounded-full bg-gray-900 w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-gray-800 ">
                <i class="fa-solid fa-play text-white text-4xl  "></i>
              </div>
            </div>

            <div className="container px-5 py-5 mb-10 md:mb-0 md:space-x-5 dark:text-white rounded-lg flex justify-center  md:justify-between items-start  shadow-lg flex-col md:flex-row bg-white dark:bg-darkTheme absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
              <div className="poster w-full text-center mb-5 md:w-1/5  md:-translate-y-0 px-3">
                <div className="img w-full flex justify-center">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    className="rounded hidden md:block md:w-full border-gray-200 border-4"
                    alt="Movie Poster"
                  />
                </div>

                <div className="vote  text-center md:text-left space-y-2 text-xs mt-3 md:mt-1">
                  <div className="movieTitle block md:hidden">
                    <h2 className="text-2xl font-bold"> {movie.title} </h2>
                    <p className=" text-sm text-gray-400">{movie.tagline} </p>
                  </div>
                  <h3>
                    <span className=" text-themeColor ">
                      {movie.vote_average} /
                    </span>
                    <span className="text-sm"> {movie.vote_count} Voted </span>
                  </h3>
                  <hr className="bar h-1 bg-darkTheme dark:bg-white w-full"></hr>
                  <div className="buttons flex justify-around md:justify-between gap-3 ">
                    <button className="px-2 py-1 bg-themeColor_purple text-white w-1/2 hover:bg-themeColor transition-all duration-300 ">
                      Like
                    </button>
                    <button className="px-2 py-1 bg-themeColor_red text-white w-1/2 hover:bg-gray-800 transition-all duration-300 ">
                      Dislike
                    </button>
                  </div>
                </div>
              </div>

              <div className=" w-full md:w-5/6   md:space-y-3 ">
                <div className="watch-add flex justify-between items-start md:items-center  ">
                  <button className="px-4 py-2 bg-themeColor_purple  text-white hover:bg-gray-800 transition-all duration-300 rounded-full">
                    <i class="fa-solid fa-play"></i>
                    <a target="_blank" href={movie.homepage}>
                      {" "}
                      Watch Now{" "}
                    </a>
                  </button>
                  <button className="px-4 py-2 bg-themeColor_red text-white hover:bg-gray-800 transition-all duration-300  rounded-full ">
                    <i class="fa-solid fa-heart"></i> add To fav
                  </button>
                </div>
                <div className="movieTitle hidden md:block">
                  <h2 className=" text-2xl font-bold"> {movie.title} </h2>
                  <p className=" text-sm text-gray-400"> {movie.tagline} </p>
                </div>
                <div className="rating flex items-center  space-x-5 mt-4">
                  <div
                    onClick={trailerToggle}
                    className="trailerBtn px-2 py-1 border border-black hover:bg-darkTheme hover:text-white cursor-pointer transition-all duration-300"
                  >
                    <i class="fa-solid fa-video"></i> Trailer
                  </div>

                  <p className="font-bold">
                    IMDB :
                    <span className=" text-themeColor">
                      {Math.round(movie.vote_average)}
                      <i class="fa-solid fa-star"></i>
                    </span>
                  </p>
                </div>
                <p className="desc">{movie.overview}</p>

                <div className="moreInfo flex justify-between ">
                  <div className="col-1 w-1/2">
                    <p>
                      <span className="font-bold"> Release Date </span> :
                      {movie.release_date}
                    </p>
                    <p>
                      <span className="font-bold"> Genre </span> :
                      {movie.genres?.map((genre, idx) => {
                        return <span key={idx}> {genre.name} , </span>;
                      })}
                    </p>
                    <p>
                      <span className="font-bold"> Language </span> :
                      {movie.spoken_languages?.map((lang, idx) => {
                        return <span key={idx}> {lang.english_name} , </span>;
                      })}
                    </p>
                  </div>
                  <div className="col-2 w-1/2 ">
                    <p>
                      <span className="font-bold"> Duration </span> :
                      {movie.runtime}
                    </p>
                    <p>
                      <span className="font-bold"> Country </span> :
                      {movie.production_countries?.map((country, idx) => {
                        return <span key={idx}> {country.name} , </span>;
                      })}
                    </p>
                    <p>
                      <span className="font-bold">Production Companies</span>:
                      {movie.production_companies?.map((company, idx) => {
                        return <span key={idx}> {company.name} , </span>;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trailerPopUp hidden absolute w-screen h-screen bg-navbarDark  backdrop-blur-sm left-0 top-0  justify-center items-center  z-50">
            <div className="inner relative w-3/4 z-50">
              {trailer ? (
                <>
                  <YouTube videoId={trailer.key} id={trailer.id} opts={opts} />
                </>
              ) : (
                <></>
              )}
              <div
                onClick={trailerToggleClose}
                className="close p-1 bg-red-600  text-white cursor-pointer absolute -top-5 -right-5 rounded-full w-7 h-7 flex justify-center items-center "
              >
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoadingScreenTwo />
      )}

      <div className="container mx-auto mb-40 mt-96 md:mt-80 ">
        <h2 className="text-3xl "> You May Also Like </h2>

        <div className="Recommendation  flex flex-wrap mt-10 ">
          {recommend ? (
            <>
              {recommend.map((movie, idx) => {
                return (
                  <>
                    {movie.poster_path ? (
                      <>
                        <div
                          key={idx}
                          className=" w-1/2 md:w-1/5 lg:w-44 p-2  "
                        >
                          <div className=" hover:translate-y-3 shadow-md  transition-all duration-500 ease-in-out cursor-pointer relative">
                            <div className="img realtive ">
                              <Link
                                onClick={() => {
                                  newMovieSearch();
                                }}
                                to={`/moviePage/${movie.id}`}
                              >
                                {/* <img className='rounded' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="Movie Poster" /> */}
                                {movie.poster_path ? (
                                  <>
                                    <img
                                      src={
                                        "https://image.tmdb.org/t/p/w500" +
                                        movie.poster_path
                                      }
                                      className=""
                                      alt="Movie Poster"
                                    />
                                  </>
                                ) : (
                                  <>
                                    <img
                                      src={require("../../images/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.avif")}
                                      className="rounded  border-gray-200 border-4"
                                      alt="Movie Poster"
                                    />
                                  </>
                                )}

                                <div className="imghover rounded absolute top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                                  <i class="fa-solid fa-play text-themeColor_purple text-3xl "></i>
                                </div>
                              </Link>
                            </div>

                            <span className=" text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0">
                              {Math.round(movie.vote_average)}
                              <i class="fa-solid fa-star ml-1 text-yellow-400"></i>
                            </span>

                            <div className="movie-desc bg-white dark:bg-darkTheme px-2  py-3 text-xs  dark:text-white rounded-b  ">
                              {movie.title ? (
                                <>
                                  <h4 className="font-bold">
                                    {movie.title.split(" ").length > 3
                                      ? movie.title
                                          .split(" ")
                                          .slice(0, 3)
                                          .join(" ") + "..."
                                      : movie.title}
                                  </h4>
                                </>
                              ) : (
                                <>
                                  <h4 className="font-bold">
                                    {movie.name.split(" ").length > 3
                                      ? movie.name
                                          .split(" ")
                                          .slice(0, 3)
                                          .join(" ") + "..."
                                      : movie.name}
                                  </h4>
                                </>
                              )}
                              <div className="dec mt-1 flex justify-between items-center">
                                {movie.release_date ? (
                                  <>
                                    <span>
                                      {movie.release_date
                                        ?.split("-")
                                        .slice(0, 1)
                                        .join("")}
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span>
                                      {movie.first_air_date
                                        ?.split("-")
                                        .slice(0, 1)
                                        .join("")}
                                    </span>
                                    np
                                  </>
                                )}
                                <span>
                                  | {movie.original_language?.toUpperCase()}
                                </span>
                                <span className=" bg-themeColor_red px-1 py-1 text-white rounded">
                                  {movie.media_type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <LoadingScreen />
          )}
        </div>
      </div>
    </>
  );
}
