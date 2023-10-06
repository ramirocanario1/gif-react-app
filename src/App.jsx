import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <div className="bg-color5">
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search/:term" element={<SearchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
