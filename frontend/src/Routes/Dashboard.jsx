import React, { Component } from "react";
import CustomCarousel from "../components/CustomCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";


class Dashboard extends Component{
  render(){
    return(
      <div>
        <Header />
        <CustomCarousel />
        <Footer />
      </div>
    )
  }
}

export default Dashboard;