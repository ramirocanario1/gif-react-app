import Header from "./components/Header";
import SearchGifs from "./components/SearchGifs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-color5">
      <div className="container mx-auto">
        <Header />
        <SearchGifs />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
