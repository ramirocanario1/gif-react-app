import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SearchGifs from "../components/SearchGifs";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-color5">
      <div className="container mx-auto">
        <Header />
        <SearchGifs />
        <main className="min-h-[700px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
