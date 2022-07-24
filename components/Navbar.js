import Link from "next/Link";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import $ from "jquery";
import { useRouter } from "next/router";
var amountScrolled = 200;
var amountScrolledNav = 25;
// import slug1 from "../pages/blogpost/[slug]"
let scrollOfHomeScreenBlur = () => {
  if (
    document.querySelector(".navbar-toggler").classList.value !== "collapsed"
  ) {
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
  }
  document.querySelector(".navbar-toggler").classList.toggle("collapsed");
  if (document.querySelector(".navbar-collapse").classList.value !== "show") {
    document.querySelector(".navbar-collapse").classList.toggle("show");
  }
  // document.querySelector(".navbar-collapse").classList.toggle("show");
};

process.browser &&
  $(document).ready(function () {
    $("#nav-icon1").click(function () {
      $(this).toggleClass("open");
    });
  });

function Navbar(props, req, res) {
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log(!slug);
  // useEffect(() => {

  // }, [router.isReady])
  return (
    <>
      <Head>
        <title>Gamingbeasts - free games</title>
        {/* <meta onLoad={dropMenuFuncRemove1, dropMenuFuncRemove2, dropMenuFuncRemove3} /> */}
        <style jsx>{``}</style>
      </Head>

      <div className="mainContainer">
        <nav
          className={`navbar navbar-expand-lg navbar-${
            props.colorMode === "#F7F7F7" ? "dark" : "light"
          } bg-${props.colorMode === "#F7F7F7" ? "dark" : "light"}`}
        >
          <Link href={"/"}>
            <a className="navbar-brand"> GAMINGBEASTS</a>
          </Link>

          <button
            id="navbarMainBtn"
            onClick={() => {
              scrollOfHomeScreenBlur();
            }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <div id="nav-icon1" className="noneOpen">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto closed">
              <li className="nav-item active">
                <Link href={"/"} onClick={scrollOfHomeScreenBlur}>
                  <a
                    className={`nav-Link ${
                      props.colorMode === "#F7F7F7" ? "text-white" : "text-dark"
                    }`}
                  >
                    HOME
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown" id="dropdown1">
                {/* <Link href={"#"}> */}
                <a
                  className="nav-Link dropdown-toggle"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  {" "}
                  SIZE
                </a>
                {/* </Link> */}
                <div
                  className="dropdown-menu menu-3 stop-menu3"
                  aria-labelledby="navbarDropdown1"
                >
                  <Link href={`/blogpost/0mb-to-500mb-games`}>
                    <a className="dropdown-item"> 0mb to 500mb Games</a>
                  </Link>
                  <Link href={"/blogpost/500mb-to-1gb-games"}>
                    <a className="dropdown-item"> 500mb to 1gb Games</a>
                  </Link>
                  <Link href={"/1gb-to-5gb-games"}>
                    <a className="dropdown-item"> 1gb to 5gb Games</a>
                  </Link>
                  <Link href={"/5gb-to-10gb-games"}>
                    <a className="dropdown-item"> 5gb to 10gb Games</a>
                  </Link>
                  <Link href={"/10gb-to-15gb-games"}>
                    <a className="dropdown-item"> 10gb to 15gb Games</a>
                  </Link>
                  <Link href={"/more-than-15gb"}>
                    <a className="dropdown-item"> More than 15gb </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" id="dropdown1">
                {/* <Link href={"/"}> */}
                <a
                  href="#"
                  className="nav-Link dropdown-toggle"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  PACKS
                </a>
                {/* </Link> */}
                <div
                  className="dropdown-menu menu-3 stop-menu3"
                  aria-labelledby="navbarDropdown1"
                >
                  <Link href={"/crashmetal-cyberpunk-free-pc-game-download"}>
                    <a className="dropdown-item">Crashmetal Cyberpunk</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Puzzle</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Action</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Sports</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Racing</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Shooting</a>
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown" id="dropdown1">
                <Link href={"#"}>
                  <a
                    className="nav-Link dropdown-toggle"
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    CATEGORIES
                  </a>
                </Link>
                <div
                  className="dropdown-menu menu-3 stop-menu3"
                  aria-labelledby="navbarDropdown1"
                >
                  <Link href={"/adventure"}>
                    <a className="dropdown-item"> Adventure</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Puzzle</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Action</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Sports</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Racing</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="dropdown-item"> Shooting</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href={"/about"}>
                  <a className="nav-Link" id="navbarDropdown1">
                    ABOUT{" "}
                  </a>
                </Link>
              </li>
              <li className="nav-item login-btn">
                <Link href={"/login"}>
                  <a className="nav-Link login">LOGIN</a>
                </Link>
              </li>
            </ul>
            <span onClick={props.toggleSwitchIcon} className="all-icon-button">
              <i
                className={`icon-mode fa ${props.iconSelector}`}
                aria-hidden="true"
              ></i>
            </span>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="search-btn btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* // dropDown = document.querySelector(".dropdown-menu"),
                // dropMenu2 = document.querySelector(".menu-2"),
                // dropMenu3 = document.querySelector(".menu-3"),
                // stopMenu = document.querySelector(".stop-menu"),
                // dropdownItem = document.querySelector(".dropdown-item"),
                // navbarDropdown2 = document.getElementById("navbarDropdown2"),
                // navbarToggler = document.querySelector(".navbar-toggler"),
                // navbarCollapse = document.querySelector(".navbar-collapse"),

                // id of dropdown menu
                // dropdownMenu = document.getElementById("navbarDropdown1"),
                // items = document.getElementById("item"),
                // console.log(items ),  



                // hamburger icon
                // $(document).ready(function () {
                //                         $('#nav-icon1').click(function () {
                //                             $(this).toggleClass('open'),
                //                         }),
                // }),

                // dropdownMenu.addEventListener("mouseover", (e) => {
                //     items.addEventListener("click", (e) => {
                //         e.preventDefault()
                //     }),
                // }), */}
    </>
  );

  // toggleOpen() {
  //     return $(document).ready(function () {
  //         $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
  //             $(this).toggleClass('open');
  //         });
  //     });
  // }
  // dropMenuFuncAdd1();
  // dropMenuFuncRemove1();
  // dropMenuFuncAdd2();
  // dropMenuFuncRemove2();
  // dropMenuFuncAdd3();
  // dropMenuFuncRemove3();
  // stopMainMenu();
  // paddingAllItems();
}
// $(document).ready(() => {
//     $('/nav-icon1,/nav-icon2,/nav-icon3,/nav-icon4').click(() => {
//         $(this).toggleClass('open');
//     });
// });

export default Navbar;
