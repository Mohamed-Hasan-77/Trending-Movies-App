import React from 'react'
import Home from './Components/Home/Home'  
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import error from './images/undraw_page_not_found_re_e9o6.svg'
import Layout from './Components/Layout/Layout';
import Login from './Components/LogIn/Login';
import Movies from './Components/Movies/Movies';
import Register from './Components/Register/Register';
import HomeSlider from './Components/HomeSlider/HomeSlider';
import TvShows from './Components/TvShows/TvShows';
import Actors from './Components/Actors/Actors';
import MoviePage from './Components/MoviePage/MoviePage';
import Search from './Components/searchPage/Search';
import TvPage from './Components/TvPage/TvPage';
import ActorDetails from './Components/ActorDetails/ActorDetails';





export default function App() {



  // const [crrUser, setCrrUser] = useState(null);

  // function getUserData() {
  //   const userData = jwtDecode(localStorage.getItem('tkn'));

  //   setCrrUser(userData);
  // }


  // function clearUserData() {
  //   localStorage.removeItem("tkn");
  //   setCrrUser(null);
  // }


  const router = createHashRouter([
    {path: "",
    element: <Layout  />    , 
    children: [
      {element: <Home/>, path: '/'},
      {element: <Home/>, path: 'home'},
      // {element: <Login  />, path: 'login'},
      // {element: <Register/>, path: 'register'},
      {element: <Movies/>, path: 'movies'},
      {element: <TvShows/>, path: 'tvshows'},
      {element: <Actors/>, path: 'actors'},
      {element: <Search/>, path: 'search'},
      {element: <MoviePage/>, path: 'moviePage/:id'},
      {element: <TvPage/>, path: 'tvPage/:id'},
      {element: <ActorDetails/>, path: 'actorDetails/:id'},
      {element: <HomeSlider/>, path: 'slider'},
    ]},
    {
      path: "*",
      element: (
        <div className=" flex w-screen h-screen justify-center items-center">
          <img src={error} alt="Error Not Found" />
            
        </div>
      ),
    },
  ])







  // useEffect(function() {
  //   if(localStorage.getItem('tkn') != null && crrUser == null ) {
  //     getUserData();
  //   } 
  // } ,[]);




  return <>

  <div className="darkMod dark:bg-black  transition-all duration-500">
  <RouterProvider router={router}/>

  </div>
  </>
}
