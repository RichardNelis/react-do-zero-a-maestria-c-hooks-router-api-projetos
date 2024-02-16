import "./App.css";

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Info from "./pages/Product/Info/Info";
import NotFound from "./pages/NotFound/NotFound";
import SearchForm from "./components/Search/SearchForm";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com React Router*/}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*4 - Rota dinâmica*/}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Route parra Search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to={"/about"} />} />
          {/* 7 - No match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
