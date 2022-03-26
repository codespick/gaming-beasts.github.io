import React from 'react'
import $ from 'jquery';

const TopBar = () => {

    var amountScrolled = 200;
    var amountScrolledNav = 25;

    process.browser && $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('button.back-to-top').addClass('show');
        } else {
            $('button.back-to-top').removeClass('show');
        }
    });

    process.browser && $('button.back-to-top').click(function () {

        function navbarRecord() {

            if (document.querySelector(".navbar-collapse").classList.value === "show") {
                console.log("showing navbar");
                document.querySelector(".navbar-collapse").classList.remove("show");
            }
            document.querySelector(".navbar-collapse").classList.remove("show");

            if (document.getElementById("nav-icon1").classList.value === "open") {
                document.getElementById("nav-icon1").classList.remove("open");
            }
            document.getElementById("nav-icon1").classList.remove("open");
        }

        $('html, body').animate({
            scrollTop: 0
        }, 300);
        // return false;
        navbarRecord();
    });
    return (
        <div className="contentDiv" id="content">

            <button className="back-to-top" type="button"></button>
        </div>
    )
}

export default TopBar