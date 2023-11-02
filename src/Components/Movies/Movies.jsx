import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../MaterialUICom/LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [movies2, setMovies2] = useState(null);
  let [pageNum, setPageNum] = useState(1);

  async function getMovies() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
            include_adult: false,
            include_video: true,
            language: "en-US",
            page: pageNum,
          },
        },
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer d47938e631d44e72cba7333121355c99",
          },
        }
      );
      setMovies(data.results);
      // console.log('data.results: ', data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  async function getMoviesTwo() {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          params: {
            api_key: "cffed22b0a485ebb8a8ade2cd4bcd5f1",
            include_adult: false,
            include_video: true,
            language: "en-US",
            page: pageNum + 1,
          },
        },
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer d47938e631d44e72cba7333121355c99",
          },
        }
      );
      setMovies2(data.results);
      // console.log('data.results: ', data.results);
    } catch (err) {
      // console.error('Error:', err);
    }
  }

  function pagination() {
    pageNum = pageNum + 1;
    setPageNum(pageNum);
    getMovies();
    getMoviesTwo();
  }

  function paginationPlusTwo() {
    pageNum = pageNum + 2;
    setPageNum(pageNum);
    getMovies();
    getMoviesTwo();
  }

  function paginationDwon() {
    if (pageNum > 1) {
      pageNum = pageNum - 1;

      setPageNum(pageNum);
      getMovies();
      getMoviesTwo();
    }
  }

  useEffect(() => {
    getMovies();
    getMoviesTwo();
  }, []);

  return (
    <>
      <div className="container mx-auto py-24">
        <h2 class="flex flex-row flex-nowrap items-center mt-8">
          <span
            class="flex-grow block border-t border-black dark:border-white"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span class="flex-none block mx-4 font-bold  px-4 py-2.5  leading-none uppercase bg-black dark:bg-white text-white dark:text-black">
            Movies
          </span>
          <span
            class="flex-grow block border-t border-black   dark:border-white"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>

        <ul class="flex space-x-2 my-7 justify-center">
          <li>
            <button
              onClick={() => {
                paginationDwon();
              }}
              class="flex items-center justify-center mr-1 w-9 h-9  text-white  transition-colors duration-150 rounded-full focus:shadow-outline dark:text-black bg-indigo-300 hover:bg-indigo-600"
            >
              <i class="fa-solid fa-arrow-left w-4 h-4 fill-current "></i>
            </button>
          </li>
          <li>
            <button class="w-9 h-9 text-white transition-colors duration-150 bg-themeColor_purple border border-r-0 border-themeColor_purple  rounded-full focus:shadow-outline">
              {pageNum}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                pagination();
              }}
              class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple  hover:border-themeColor_purple  rounded-full focus:shadow-outline"
            >
              {pageNum + 1}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                paginationPlusTwo();
              }}
              class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple   hover:border-themeColor_purple  rounded-full focus:shadow-outline"
            >
              {pageNum + 2}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                pagination();
              }}
              class="flex items-center justify-center ml-1 w-9 h-9  transition-colors duration-150 bg-darkTheme text-white dark:text-black  rounded-full focus:shadow-outline bg-indigo-300 hover:bg-themeColor_purple "
            >
              <i class="fa-solid fa-arrow-right w-4 h-4 fill-current "></i>
            </button>
          </li>
        </ul>

        {/* -------------------------------------------------------------------------------------------------------------------------- */}
        {/* -------------------------------------------------------------------------------------------------------------------------- */}
        <div className="wrapper flex flex-wrap justify-start ">
          {movies ? (
            <>
              {movies.map((movie, idx) => {
                return (
                  <div key={idx} className=" w-1/2 md:w-1/5 lg:w-1/6 p-2  ">
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
                            <i class="fa-solid fa-play text-themeColor_purple text-3xl "></i>
                          </div>
                        </Link>
                      </div>

                      <span className=" text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0">
                        {" "}
                        {Math.round(movie.vote_average)}{" "}
                        <i class="fa-solid fa-star ml-1 text-yellow-400"></i>{" "}
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
            </>
          ) : (
            <LoadingScreen />
          )}
          {movies2 ? (
            <>
              {movies2.map((movie, idx) => {
                return (
                  <div key={idx} className=" w-1/2 md:w-1/5 lg:w-1/6 p-2  ">
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
                            <i class="fa-solid fa-play text-themeColor_purple text-3xl "></i>
                          </div>
                        </Link>
                      </div>

                      <span className=" text-white text-xs font-bold backdrop-blur-lg px-3 py-1 rounded m-1 absolute top-0 right-0">
                        {" "}
                        {Math.round(movie.vote_average)}{" "}
                        <i class="fa-solid fa-star ml-1 text-yellow-400"></i>{" "}
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
            </>
          ) : (
            <LoadingScreen />
          )}
        </div>

        <ul class="flex space-x-2 my-7 justify-center">
          <li>
            <button
              onClick={() => {
                paginationDwon();
              }}
              class="flex items-center justify-center mr-1 w-9 h-9  text-white  transition-colors duration-150 rounded-full focus:shadow-outline dark:text-black bg-indigo-300 hover:bg-themeColor_purple"
            >
              <i class="fa-solid fa-arrow-left w-4 h-4 fill-current "></i>
            </button>
          </li>
          <li>
            <button class="w-9 h-9 text-white transition-colors duration-150 bg-themeColor_purple border border-r-0 border-themeColor_purple  rounded-full focus:shadow-outline">
              {pageNum}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                pagination();
              }}
              class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple  hover:border-themeColor_purple  rounded-full focus:shadow-outline"
            >
              {pageNum + 1}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                paginationPlusTwo();
              }}
              class="w-9 h-9 dark:text-white transition-colors duration-150 border hover:bg-themeColor_purple   hover:border-themeColor_purple  rounded-full focus:shadow-outline"
            >
              {pageNum + 2}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                pagination();
              }}
              class="flex items-center justify-center ml-1 w-9 h-9  transition-colors duration-150 bg-darkTheme text-white dark:text-black  rounded-full focus:shadow-outline bg-indigo-300 hover:bg-themeColor_purple "
            >
              <i class="fa-solid fa-arrow-right w-4 h-4 fill-current "></i>
            </button>
          </li>
        </ul>

        <div
          class="flex-grow block border-t border-black dark:border-white mt-10"
          aria-hidden="true"
          role="presentation"
        ></div>
      </div>
    </>
  );
}
