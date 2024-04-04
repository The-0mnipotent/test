import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Navigation from "../components/Navigation";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Navigation />
        <Input />
      </div>
    </div>
  );
}

export default Home;
