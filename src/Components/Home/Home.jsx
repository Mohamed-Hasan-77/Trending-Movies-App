import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import LoadingScreen from "../MaterialUICom/LoadingScreen/LoadingScreen";
import HomeSlider from "../HomeSlider/HomeSlider";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [trendingNow, setTrendingNow] = useState(null);
  const [trendingTV, setTrendingTV] = useState(null);
  const [trendingActors, setTrendingActors] = useState(null);
  const [search, setSearch] = useState(null);

  let searchRef = useRef(null);

  let nav = useNavigate();

  async function getTrendingMovies() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
            page: Math.floor(Math.random() * 10) + 1,
          },
        }
      );
      setTrendingNow(data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function getTrendingTvShows() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
          },
        }
      );
      setTrendingTV(data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function getTrendingActors() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/person/week?language=en-US",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
          },
        }
      );
      setTrendingActors(data.results);
      // console.log(data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function searching() {
    // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
    // https://api.themoviedb.org/3/search/collection

    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
            query: searchRef.current.value,
            include_adult: false,
            language: "en-US",
            page: 1,
          },
        }
      );
      setSearch(data.results);
      // console.log(data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  function goToSearchResults() {
    if (search) {
      sessionStorage.setItem("searchData", JSON.stringify(search));
      nav("/search");
    }
  }

  useEffect(() => {
    getTrendingMovies();
    getTrendingTvShows();
    getTrendingActors();
  }, []);

  return (
    <>
      <div className="homeSection">
        {trendingNow ? (
          <>
            <HomeSlider movieData={trendingNow} />
          </>
        ) : (
          <>
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mx-auto  md:px-60 h-screen"
            >
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                {/* <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg> */}
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}

        <div className="container mx-auto my-16 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            aut dicta reiciendis magnam adipisci quis!
          </p>

          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------- */}

          <div className="heading w-full  flex justify-between items-end mt-5 flex-wrap ">
            <div className="headers order-2 md:order-1 w-full md:w-1/2 text-center md:text-left ">
              <h2 className=" text-sm mt-3 md:mt-0  md:text-1xl dark:text-white  transition-colors duration-300 hover:text-themeColor_purple ">
                {" "}
                Trending Movies this week{" "}
                <i className="fa-solid text-sm ml-2 fa-arrow-trend-up"></i>{" "}
              </h2>
            </div>

            <div className="relative w-full md:w-1/4 order-1 md:order-2 text-lg bg-transparent px-2 md:px-0 text-black  dark:text-white ">
              <div className="flex items-center border-b border-b-2 border-themeColor_purple py-2">
                <input
                  onChange={() => {
                    searching();
                  }}
                  ref={searchRef}
                  className=" searchInput bg-transparent border-none mr-3 px-4 py-1 leading-tight focus:outline-none outline-none  "
                  type="text"
                  placeholder="Search"
                />
                <button
                  onClick={() => {
                    goToSearchResults();
                  }}
                  className="absolute right-0 top-0  hover:bg-gray-700  bg-themeColor_purple text-white px-4 py-2"
                >
                  <i className="fa-solid fa-magnifying-glass font-bold "></i>
                </button>
              </div>
            </div>
          </div>

          <div className="my-4 line w-full bg-gradient-to-r mx-2 md:mx-0 from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>

          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------- */}

          {trendingNow ? (
            <>
              <div className="wrapper flex flex-wrap justify-start ">
                {trendingNow.slice(0, 13).map((movie, idx) => {
                  return (
                    <div key={idx} className=" w-1/2 md:w-1/5 lg:w-44 p-2    ">
                      <div className=" hover:translate-y-3 shadow-md  transition-all duration-500 ease-in-out cursor-pointer relative">
                        <div className="img realtive ">
                          <Link to={`/moviePage/${movie.id}`}>
                            <img
                              className="rounded"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                movie.poster_path
                              }
                              alt=""
                            />
                            <div className="imghover rounded absolute top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                              <i className="fa-solid fa-play text-themeColor_purple text-3xl "></i>
                            </div>
                          </Link>
                        </div>

                        <span className=" text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0">
                          {" "}
                          {Math.round(movie.vote_average)}{" "}
                          <i className="fa-solid fa-star ml-1 text-yellow-400"></i>{" "}
                        </span>

                        <div className="movie-desc bg-white dark:bg-darkTheme px-2  py-3 text-xs  dark:text-white rounded-b  ">
                          <h4 className="font-bold">
                            {" "}
                            {movie.title.split(" ").length > 3
                              ? movie.title.split(" ").slice(0, 3).join(" ") +
                                "..."
                              : movie.title}{" "}
                          </h4>
                          <div className="dec mt-1 flex justify-between items-center">
                            <span>
                              {" "}
                              {movie.release_date
                                .split("-")
                                .slice(0, 1)
                                .join("")}{" "}
                              | {movie.original_language.toUpperCase()}
                            </span>
                            <span className=" bg-themeColor_red px-1 py-1 text-white rounded">
                              {" "}
                              {movie.media_type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link to="/movies">
                  <div className="w-44 pt-2 px-2 hover:px-4 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="w-full h-64 font-bold text-gray-500 hover:text-themeColor_purple bg-gray-300 rounded-lg flex justify-center items-center  dark:bg-gray-600 dark:text-white ">
                      {" "}
                      More...{" "}
                    </div>

                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <LoadingScreen />
          )}

          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------- */}

          {trendingTV ? (
            <>
              <div className="heading w-full  flex justify-between items-end mt-16 ">
                <div className="headers w-full text-center md:text-left  ">
                  <h2 className=" md:text-1xl dark:text-white  transition-colors duration-300 hover:text-themeColor_purple">
                    {" "}
                    Trending TV Shows this week{" "}
                    <i className="fa-solid text-sm ml-2 fa-tv"></i>{" "}
                  </h2>
                </div>
              </div>

              <div className="my-4 line w-full bg-gradient-to-r mx-2 md:mx-0 from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>

              <div className="wrapper flex flex-wrap justify-start ">
                {trendingTV.slice(0, 13).map((TV, idx) => {
                  return (
                    <div key={idx} className=" w-1/2 md:w-1/5 lg:w-44  p-2    ">
                      <div className=" hover:translate-y-3 shadow-md  transition-all duration-500 ease-in-out cursor-pointer relative">
                        <div className="img realtive ">
                          <Link to={`/tvPage/${TV.id}`}>
                            <img
                              className="rounded"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                TV.poster_path
                              }
                              alt=""
                            />
                            <div className="imghover rounded absolute top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center">
                              <i className="fa-solid fa-play text-themeColor_purple text-3xl "></i>
                            </div>
                          </Link>
                        </div>

                        <span className=" text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0">
                          {" "}
                          {Math.round(TV.vote_average)}{" "}
                          <i className="fa-solid fa-star ml-1 text-yellow-400"></i>{" "}
                        </span>

                        <div className="movie-desc bg-white dark:bg-darkTheme px-2  py-3 text-xs  dark:text-white rounded-b  ">
                          <h4 className="font-bold">
                            {" "}
                            {TV.name.split(" ").length > 3
                              ? TV.name.split(" ").slice(0, 3).join(" ") + "..."
                              : TV.name}{" "}
                          </h4>
                          <div className="dec mt-1 flex justify-between items-center">
                            <span>
                              {" "}
                              {TV.first_air_date
                                .split("-")
                                .slice(0, 1)
                                .join("")}{" "}
                              | {TV.origin_country[0].toUpperCase()}
                            </span>
                            <span className=" bg-themeColor_red px-1 py-1 text-white rounded">
                              {" "}
                              {TV.media_type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link to="/tvshows">
                  <div className="w-44 pt-2 px-2 hover:px-4 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="w-full h-64 font-bold text-gray-500 hover:text-themeColor_purple bg-gray-300 rounded-lg flex justify-center items-center  dark:bg-gray-600 dark:text-white ">
                      {" "}
                      More...{" "}
                    </div>

                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <LoadingScreen />
          )}

          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------- */}

          {trendingActors ? (
            <>
              <div className="heading w-full  flex justify-between items-end mt-16 ">
                <div className="headers w-full text-center md:text-left ">
                  <h2 className=" md:text-1xl dark:text-white transition-colors duration-300 hover:text-themeColor_purple">
                    {" "}
                    Trending Actors this week...{" "}
                  </h2>
                </div>
              </div>

              <div className="my-4 line w-full bg-gradient-to-r from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>

              <div className="wrapper flex flex-wrap justify-start ">
                {trendingActors.slice(0, 13).map((actor, idx) => {
                  return (
                    <div
                      key={idx}
                      className="w-1/2 md:w-1/5 lg:w-44 px-2 p-1 my-3  "
                    >
                      <div className=" hover:translate-y-2 transition-all duration-300 shadow-md  rounded ">
                        <div className="img relative rounded-t overflow-hidden  cursor-pointer">
                          <Link to={`/actorDetails/${actor.id}`}>
                            <img
                              className="  "
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                actor.profile_path
                              }
                              alt=""
                            />
                            <div className=" absolute backdrop-saturate-0 top-0 left-0 w-full h-full flex opacity-0 hover:opacity-100 hover:backdrop-brightness-50 justify-center items-center"></div>
                          </Link>
                        </div>

                        <div className="movie-desc bg-white dark:bg-overlayDark  px-2 py-3  text-xs  dark:text-white rounded-b  ">
                          <h4 className=" text-sm">
                            <p className="font-bold w-full">
                              {" "}
                              {actor.name.split(" ").slice(0, 2).join(" ")}{" "}
                            </p>
                            <p className="text-gray-500">
                              {" "}
                              {actor.known_for_department}{" "}
                            </p>

                            <div className="my-1 line w-full bg-gradient-to-r from-themeColor_purple via-themeColor_purple to-white dark:to-black rounded-md h-1"></div>
                          </h4>
                          <div className="dec  flex items-center flex-wrap ">
                            {/* <div className="  mt-3 line w-full bg-gradient-to-r from-purple-600 via-purple-700 to-white dark:to-black rounded-md h-1"></div>   */}
                            <span className="  px-1  w-full dark:text-white font-bold text-sm">
                              {" "}
                              - Known for{" "}
                            </span>
                            <div className="w-full">
                              {actor.known_for?.slice(0, 2).map((work, idx) => {
                                return (
                                  <p key={idx} className="work w-full my-1 ">
                                    {/* {work.original_title.split(" ").length > 2 ? - work.title.split(" ").slice(0, 2).join(" ") + "..." : "-" + work.title} */}
                                    -{" "}
                                    {work.title?.split(" ").length > 3
                                      ? work.title
                                          .split(" ")
                                          .slice(0, 3)
                                          .join(" ") + "..."
                                      : work.title}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Link to="/actors">
                  <div className="group w-44 pt-2 px-2 relative overflow-hidden rounded-md hover:px-4 cursor-pointer transition-all duration-300  ">
                    <div className="w-full h-64 font-bold text-gray-500 hover:text-themeColor_purple bg-gray-300 rounded-lg flex justify-center items-center  dark:bg-gray-600 dark:text-white ">
                      {" "}
                      More...{" "}
                    </div>

                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <LoadingScreen />
          )}
        </div>
      </div>
    </>
  );
}
