import Header from "./components/Header";
import SearchGifs from "./components/SearchGifs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  return (
    <div className="bg-color5">
      <div className="container mx-auto">
        <BrowserRouter>
          <Header />
          <SearchGifs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:term" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
