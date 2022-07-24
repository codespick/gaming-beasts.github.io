import Navbar from "../components/Navbar";
import "../styles/navbar.css";
import "../styles/carousel.css";
import "../styles/cards.css";
import SpinnerLoading from "../components/SpinnerLoading";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import "../styles/globals.css";
import Head from "next/head";
// import Section from '../components/Section';
import NProgress from "nprogress";
import "../styles/returnToTop.css";
import "../styles/slug.css";
import $ from "jquery";
import TopBar from "../components/TopBar";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    // React.useEffect(() => {
    NProgress.start();
    NProgress.set(0.4);
    NProgress.inc();
    NProgress.configure({ easing: "easeinout", speed: 150 });
    NProgress.configure({ showSpinner: true });
    setLoading(true);
    // }, []);
    // console.log("Router is changing");
  });

  Router.events.on("routeChangeComplete", (url) => {
    // console.log("Router is complete");
    NProgress.configure({ showSpinner: false });
    NProgress.done();
    setLoading(false);
  });

  const [colorMode, setColorMode] = useState("#F7F7F7");
  const [iconSelector, setIconSelector] = useState("fa-moon-o");

  let darkMode = process.browser && localStorage.getItem("dark-mode");

  const enableDarkMode = () => {
    process.browser && localStorage.setItem("dark-mode", "enabled");
    document.body.style.backgroundColor = "black";
  };

  const disableDarkMode = () => {
    process.browser && localStorage.setItem("dark-mode", "disabled");
    document.body.style.backgroundColor = "#F7F7F7";
  };
  useEffect(() => {
    if (darkMode === "enabled") {
      enableDarkMode(); // set state of darkMode on page load
      setColorMode("dark");
      setIconSelector("fa-sun-o");
    }
  }, [darkMode]);

  const toggleSwitchIcon = () => {
    if (iconSelector && darkMode === "disabled") {
      setColorMode("dark");
      enableDarkMode();
      setIconSelector("fa-sun-o");
    } else {
      setColorMode("#F7F7F7");
      disableDarkMode();
      setIconSelector("fa-moon-o");
    }
  };
  function clickCounter() {
    if (process.browser && typeof Storage !== "undefined") {
      if (process.browser && localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
    } else {
      document.getElementById("result").innerHTML =
        "Sorry, your browser does not support web storage...";
    }
  }

  return (
    <>
      {loading}
      <div onLoad={clickCounter}>
        <Navbar
          colorMode={colorMode}
          toggleSwitchIcon={toggleSwitchIcon}
          iconSelector={iconSelector}
        />

        <Component {...pageProps} />
        <TopBar />
      </div>
    </>
  );
}

export default MyApp;
