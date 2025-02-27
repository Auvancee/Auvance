import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHome from "../pages/PageHome";
import PageWorks from "../pages/PageWorks";
import PageSynopsis from "../pages/PageSynopsis";
import PageArchive from "../pages/PageArchive";

const AppRouter = () => {



  
  return (
    
    <>
      <Header />

        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/works" element={<PageWorks />} />
          <Route path="/synopsis" element={<PageSynopsis />} />
          <Route path="/archive" element={<PageArchive />} />
        </Routes>

      <Footer />
    </>

  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;