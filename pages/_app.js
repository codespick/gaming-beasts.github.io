import Navbar from '../components/Navbar';
import "../styles/navbar.css"
import "../styles/carousel.css"
import "../styles/cards.css"
import SpinnerLoading from '../components/SpinnerLoading';
import React, { useState } from "react"
import Router from "next/router"
import "../styles/globals.css"
import Head from "next/head"
// import Section from '../components/Section';
import NProgress from "nprogress"
import "../styles/returnToTop.css"
import "../styles/slug.css"
import $ from 'jquery';
import TopBar from '../components/TopBar';



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    // React.useEffect(() => {
    NProgress.start()
    NProgress.set(0.4);
    NProgress.inc();
    NProgress.configure({ ease: 'easeinout', speed: 200 });
    NProgress.configure({ showSpinner: false });
    setLoading(true);
    // }, []);
    // console.log("Router is changing");
  })

  Router.events.on("routeChangeComplete", (url) => {
    // console.log("Router is complete");
    NProgress.configure({ showSpinner: false });
    NProgress.done()

    setLoading(false)
  })

  const [colorMode, setColorMode] = useState("#ebebeb");

  const toggleSwitchIcon = () => {
    if (colorMode === "#ebebeb") {
      document.body.style.backgroundColor = 'black';
      setColorMode("dark")

      // console.log("toggleSwitchIcon called");
    } else {

      setColorMode("#ebebeb")
      document.body.style.backgroundColor = '#ebebeb';
    }
  }
  function clickCounter() {
    if (process.browser && typeof (Storage) !== "undefined") {
      if (process.browser && localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      // return localStorage.clickcount
      // document.getElementById("result").innerHTML = `<p className='card-text'><i className='fas fa-eye'></i> ${localStorage.clickcount} </p>` + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  // console.log(router.route)
  return (

    <>
      {loading}
      <div onLoad={clickCounter} >
        <Navbar colorMode={colorMode} toggleSwitchIcon={toggleSwitchIcon} />


        <Component {...pageProps} />
        <TopBar />

      </div>
    </>



  );

}

export default MyApp
