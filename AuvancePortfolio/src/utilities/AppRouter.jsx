/* 
 Some Notes, To Run this server locally, you need npm install the react splide
 otherwise the package will not load and it will break everything.

$ npm install @splidejs/react-splide  */


import { BrowserRouter, Routes, Route} from "react-router-dom";
import { APP_FOLDER_NAME } from "../global/global";
// import { useState, useEffect } from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import PageHome from "../pages/PageHome";
// import PageAbout from "../pages/PageAbout";
// import PageFavourites from "../pages/PageFav";
// import PageMovie from "../pages/PageMovie";
// import LoginPage from "../pages/Login";
// import PageWelcome from "../pages/Welcome";


const AppRouter = () => {





 return (
    <>

      <Routes>

        <Route path="../pages/PageHome.jsx" element={<PageHome />} />

        <Route path="../pages/PageWorks.jsx" element={<PageWorks />} />

        <Route path="../pages/PageSynopsis.jsx" element={<PageSynopsis />} />
        
        <Route path="../pages/PageArchive.jsx" element={<PageArchive />} />

      </Routes>

    </>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>  
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
